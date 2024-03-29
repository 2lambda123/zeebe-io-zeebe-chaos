package io.zeebe.chaos

import io.camunda.zeebe.client.ZeebeClient
import io.camunda.zeebe.client.api.response.ActivatedJob
import io.camunda.zeebe.client.api.worker.JobClient
import io.camunda.zeebe.client.impl.oauth.OAuthCredentialsProviderBuilder
import io.camunda.zeebe.model.bpmn.BpmnModelInstance
import org.awaitility.Awaitility
import org.awaitility.pollinterval.FibonacciPollInterval
import org.slf4j.MDC
import java.io.BufferedReader
import java.io.File
import java.io.InputStream
import java.io.InputStreamReader
import java.nio.charset.StandardCharsets.UTF_8
import java.time.Duration
import java.util.concurrent.CountDownLatch
import java.util.concurrent.TimeUnit
import kotlin.concurrent.thread

private const val ENV_TESTBENCH_ADDRESS = "TESTBENCH_ADDRESS"
private const val ENV_TESTBENCH_CLIENT_ID = "TESTBENCH_CLIENT_ID"
private const val ENV_TESTBENCH_CLIENT_SECRET = "TESTBENCH_CLIENT_SECRET"
private const val ENV_TESTBENCH_AUTHORIZATION_SERVER_URL = "TESTBENCH_AUTHORIZATION_SERVER_URL"

private val LOG = org.slf4j.LoggerFactory.getLogger("io.zeebe.chaos.ChaosWorker")

/**
 * The env variable which can contain a custom root path for the chaos experiment resources,
 * like scripts, experiment files etc.
 */
private const val ENV_CHAOS_ROOT_PATH = "CHAOS_ROOT_PATH"

private lateinit var fileResolver : FileResolver

private fun createTestbenchClient(): ZeebeClient {
    val audience = OAuthCredentialsProviderBuilder()
        .audience(System.getenv(ENV_TESTBENCH_ADDRESS).removeSuffix(":443"))
        .authorizationServerUrl(System.getenv(ENV_TESTBENCH_AUTHORIZATION_SERVER_URL))
        .clientId(System.getenv(ENV_TESTBENCH_CLIENT_ID))
        .clientSecret(System.getenv(ENV_TESTBENCH_CLIENT_SECRET))
        .build()

    return ZeebeClient.newClientBuilder()
        .credentialsProvider(audience)
        .gatewayAddress(System.getenv(ENV_TESTBENCH_ADDRESS))
        .numJobWorkerExecutionThreads(4)
        .build()
}

fun main() {
    // init
    initializeAwaitility()
    fileResolver = createFileResolver() ?: return

    val testbenchClient = createTestbenchClient()
    LOG.info("Connected to ${testbenchClient.configuration.gatewayAddress}")
    val topology = testbenchClient.newTopologyRequest().send().join()
    LOG.info("Topology: $topology")

    ChaosModelDeployer(client = testbenchClient, fileResolver).deployChaosModels()

    // register workers
    ChaosScriptWorkerRegistry(testbenchClient, fileResolver).registerChaosScriptWorkers()

    testbenchClient.newWorker().jobType(AwaitMessageCorrelationHandler.JOB_TYPE)
        .handler(AwaitMessageCorrelationHandler()).open()
    testbenchClient.newWorker().jobType(AwaitProcessWithResultHandler.JOB_TYPE)
        .handler(AwaitProcessWithResultHandler()).open()
    testbenchClient.newWorker().jobType(DeployMultipleVersionsHandler.JOB_TYPE)
        .handler(DeployMultipleVersionsHandler(::createClientForClusterUnderTest, ::setMDCForJob)).open()

    val readChaosExperimentsHandler = ReadChaosExperimentsHandler(::setMDCForJob, fileResolver)
    testbenchClient.newWorker().jobType(readChaosExperimentsHandler.getJobType()).handler(readChaosExperimentsHandler).open()

    // keep workers running
    val latch = CountDownLatch(1)
    Runtime.getRuntime()
        .addShutdownHook(
            object : java.lang.Thread("Close thread") {
                override fun run() {
                    LOG.info("Received shutdown signal")
                    latch.countDown()
                }
            })

    latch.await()
}

private fun createFileResolver() : FileResolver? {
    var fileResolver = FileResolver()
    val envVar = System.getenv("CHAOS_ROOT_PATH")
    if (envVar != null) {
        fileResolver = FileResolver(envVar)
    }
    LOG.info("Use ${fileResolver.rootPath} as ROOT_PATH to find chaos experiment resources.")

    // sanity check; paths can be resolved
    val resolveScriptsDir = fileResolver.resolveScriptsDir()
    if (!resolveScriptsDir.exists()) {
        LOG.error("Can't resolve the scripts dir $resolveScriptsDir with root path ${fileResolver.rootPath}.")
        return null
    }
    return fileResolver
}

private fun initializeAwaitility() {
    // set a default timeout for all awaitility calls
    Awaitility.setDefaultTimeout(Duration.ofHours(1))
    Awaitility.setDefaultPollInterval(FibonacciPollInterval.fibonacci(TimeUnit.SECONDS))
}

fun chaosScriptHandler(client: JobClient, activatedjob: ActivatedJob) {
    val clusterId = activatedjob.variablesAsMap["clusterId"]!! as String
    setMDCForJob(activatedjob)

    val namespace = "$clusterId-zeebe"
    prepareForChaosExperiments(namespace)

    val provider = activatedjob.variablesAsMap["provider"]!! as Map<String, Any>
    val command = provider["path"]!!.toString()

    val scriptPath = fileResolver.resolveScriptsDir()

    val commandList = createCommandList(scriptPath, command, provider)
    LOG.info("Commands to run: $commandList")

    val processBuilder = ProcessBuilder(commandList)
        .directory(scriptPath)
    processBuilder
        .environment()["NAMESPACE"] = namespace

    var timeoutInSeconds = 15 * 60L // per default 15 min timeout
    provider["timeout"]?.let {
        timeoutInSeconds = provider["timeout"].toString().toLong()
    }

    // redirects the error stream to the output stream
    processBuilder.redirectErrorStream(true)
    val process = processBuilder.start()
    // the input stream of the process object is connected to the output stream we want to consume, don't ask.
    consumeOutputStream(activatedjob, process.inputStream)
    val inTime = process.waitFor(timeoutInSeconds, TimeUnit.SECONDS)

    if (inTime && process.exitValue() == 0) {
        client.newCompleteCommand(activatedjob.key).send()
    } else {
        process.destroyForcibly()
    }
}

internal fun consumeOutputStream(job : ActivatedJob, inputStream: InputStream) {
    thread(start = true) {
        setMDCForJob(job)
        BufferedReader(InputStreamReader(inputStream, UTF_8)).use { reader ->
            reader.forEachLine {
                LOG.debug(it)
            }
        }
    }
}

private fun createCommandList(
    scriptPath: File,
    command: String,
    provider: Map<String, Any>
): MutableList<String> {
    val rootCommand = "${scriptPath.absolutePath}/$command"
    val commandList = mutableListOf(rootCommand)

    val args = provider["arguments"]
    args?.let {
        when (it) {
            is List<*> -> {
                commandList.addAll(it as List<String>)
            }
            is String -> {
                commandList.add(it)
            }
            else -> {
                // ?!
            }
        }
    }
    return commandList
}

/**
 * Prepares for running chaos experiments:
 *
 * * deploy workers for chaos experiments
 *
 * Workers are needed in some of our chaos experiments.
 * Be aware that we are not delete them here, since if the experiments fails we might want to check
 * the logs of the workers AND they are deleted if we delete the namespace anyway.
 * kubectl apply -f worker.yaml &>> "$logFile"
 */
internal fun prepareForChaosExperiments(namespace: String) {
    LOG.info("Prepare chaos experiments.")

    val workerPath = fileResolver.resolveWorkerDeploymentDir()
    runCommands(workerPath, "kubectl", "--namespace=$namespace", "apply", "--filename=worker.yaml")
}

fun runCommands(workingDir: File?, vararg commands: String): Int {
    val processBuilder = ProcessBuilder(commands.asList())
    workingDir?.let {
        processBuilder.directory(workingDir)
    }
    val process = processBuilder.start()
    process.waitFor()
    LOG.info(
        "Run ${commands.contentToString()} \n {} {}",
        String(process.inputStream.readAllBytes()),
        String(process.errorStream.readAllBytes())
    )
    return process.exitValue()
}

internal fun ZeebeClient.deployModel(model: BpmnModelInstance, name: String): Boolean {
    return succeeds({
        this.newDeployCommand().addProcessModel(model, name).send().join()
    }, { exc -> LOG.warn("Deployment of $name failed with exception: ${exc.message}", exc) })
}

internal fun createClientForClusterUnderTest(job: ActivatedJob): ZeebeClient {
    val authenticationDetails =
        job.variablesAsMap["authenticationDetails"]!! as Map<String, Any>
    val clientId = authenticationDetails["clientId"]!!.toString()
    val clientSecret = authenticationDetails["clientSecret"]!!.toString()
    val authorizationURL = authenticationDetails["authorizationURL"]!!.toString()
    val audience = authenticationDetails["audience"]!!.toString()
    val contactPoint = authenticationDetails["contactPoint"]!!.toString()

    val credentialsProvider = OAuthCredentialsProviderBuilder()
        .audience(audience)
        .authorizationServerUrl(authorizationURL)
        .clientId(clientId)
        .clientSecret(clientSecret)
        .credentialsCachePath("/tmp/${clientId}.cred")
        .build()

    return ZeebeClient.newClientBuilder()
        .credentialsProvider(credentialsProvider)
        .gatewayAddress(contactPoint)
        .build()
}

internal fun succeeds(
    callable: () -> Unit,
    exceptionHandler: (e: Exception) -> Unit = { exc -> LOG.warn("Exception occurred: ${exc.message}") }
): Boolean {
    return try {
        callable.invoke()
        true
    } catch (exc: Exception) {
        exceptionHandler.invoke(exc)
        false
    }
}

internal fun setMDCForJob(job: ActivatedJob) {
    MDC.put("jobType", job.type)

    val clusterId = job.variablesAsMap["clusterId"]!! as String
    MDC.put("clusterId", clusterId)

    val clusterPlan = job.variablesAsMap["clusterPlan"]!! as String
    MDC.put("clusterPlan", clusterPlan)

    MDC.put("processInstanceKey", job.processInstanceKey.toString())
}
