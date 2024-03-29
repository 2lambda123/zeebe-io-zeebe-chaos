package io.zeebe.chaos

import io.camunda.zeebe.client.ZeebeClient
import io.camunda.zeebe.model.bpmn.Bpmn
import java.io.File

class ChaosModelDeployer(private val client: ZeebeClient, private val fileResolver: FileResolver) {
    companion object {
        private val MODEL_NAMES = listOf("actionRunner", "chaosExperiment", "chaosToolkit")
    }

    fun deployChaosModels() {
        for (modelName in MODEL_NAMES) {
            val modelStream = fileResolver.resolveBPMNModelStream(modelName)
            modelStream?.let {
                val bpmnModelInstance = Bpmn.readModelFromStream(modelStream)
                client.deployModel(bpmnModelInstance, modelName)
            }
        }
    }

    fun getChaosModelNames() : List<String> {
        return MODEL_NAMES
    }
}
