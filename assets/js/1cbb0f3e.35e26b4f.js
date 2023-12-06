"use strict";(self.webpackChunkzell_chaos=self.webpackChunkzell_chaos||[]).push([[2506],{74838:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=a(85893),s=a(11151);const i={layout:"posts",title:"Many Job Timeouts",date:new Date("2020-11-11T00:00:00.000Z"),categories:["chaos_experiment","broker"],tags:["availability"],authors:"zell"},o="Chaos Day Summary",r={permalink:"/zeebe-chaos/2020/11/11/job-timeouts",editUrl:"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2020-11-11-job-timeouts/index.md",source:"@site/blog/2020-11-11-job-timeouts/index.md",title:"Many Job Timeouts",description:"In the last game day (on friday 06.11.2020) I wanted to test whether we can break a partition if many messages time out at the same time. What I did was I send many many messages with a decreasing TTL, which all targeting a specific point in time, such that they will all timeout at the same time. I expected that if this happens that the processor will try to time out all at once and break because the batch is to big. Fortunately this didn't happen, the processor was able to handle this.",date:"2020-11-11T00:00:00.000Z",formattedDate:"November 11, 2020",tags:[{label:"availability",permalink:"/zeebe-chaos/tags/availability"}],readingTime:3.885,hasTruncateMarker:!0,authors:[{name:"Christopher Kujawa",title:"Chaos Engineer @ Zeebe",url:"https://github.com/zelldon",imageURL:"https://github.com/zelldon.png",key:"zell"}],frontMatter:{layout:"posts",title:"Many Job Timeouts",date:"2020-11-11T00:00:00.000Z",categories:["chaos_experiment","broker"],tags:["availability"],authors:"zell"},unlisted:!1,prevItem:{title:"Message Correlation after Failover",permalink:"/zeebe-chaos/2020/11/24/message-correlation-after-failover"},nextItem:{title:"Investigate failing Chaos Tests",permalink:"/zeebe-chaos/2020/11/03/investigate-failing-tests"}},l={authorsImageUrls:[void 0]},c=[{value:"Chaos Experiment",id:"chaos-experiment",level:2},{value:"Related issues",id:"related-issues",level:2},{value:"No worker name",id:"no-worker-name",level:3},{value:"Pod restarts",id:"pod-restarts",level:2},{value:"New Issues",id:"new-issues",level:2},{value:"Participants",id:"participants",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"In the last game day (on friday 06.11.2020) I wanted to test whether we can break a partition if many messages time out at the same time. What I did was I send many many messages with a decreasing TTL, which all targeting a specific point in time, such that they will all timeout at the same time. I expected that if this happens that the processor will try to time out all at once and break because the batch is to big. Fortunately this didn't happen, the processor was able to handle this."}),"\n",(0,n.jsx)(t.p,{children:"I wanted to verify the same with job time out's."}),"\n",(0,n.jsx)(t.h2,{id:"chaos-experiment",children:"Chaos Experiment"}),"\n",(0,n.jsx)(t.p,{children:"I setup an Production S cluster in camunda cloud. Deployed an normal starter, which starts 20 workflow instances per second. I used similar code to activate jobs with a decreasing timeout, such that they all timeout at the same time. The target time was 3 PM. I started the test ~11 am."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Code:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'            var now = DateTime.Now;\n            var today3PM = now.Date.AddHours(15);\n            int count = 0;\n            var totalMilli = (today3PM - now).TotalMilliseconds;\n            do\n            {\n                try\n                {\n\n                    await client\n                        .NewActivateJobsCommand()\n                        .JobType("benchmark-task")\n                        .MaxJobsToActivate(100)\n                        .Timeout(TimeSpan.FromMilliseconds(totalMilli))\n                        .WorkerName("lol")\n                        .Send(TimeSpan.FromSeconds(30));\n                    count++;\n\n                    totalMilli = (today3PM - DateTime.Now).TotalMilliseconds;\n                    if (count % 10 == 0)\n                    {\n                        Console.WriteLine("Activated next 1000, count:" + count);\n                        Console.WriteLine("Total " + totalMilli + " ms until 3 am");\n                    }\n                }\n                catch (Exception ex)\n                {\n                    Console.WriteLine("Failed to activate job, because of " + ex.Message);\n                }\n            } while (totalMilli > 0);\n\n'})}),"\n",(0,n.jsx)(t.p,{children:"I experienced a lot of pod restarts during the experiment, but at 3 pm the processor seems to handle the situation correctly and has no problems with so many events."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"timebomb",src:a(74290).Z+"",width:"1820",height:"679"}),"\n",(0,n.jsx)(t.img,{alt:"timebomb-general",src:a(18176).Z+"",width:"1833",height:"652"})]}),"\n",(0,n.jsx)(t.h2,{id:"related-issues",children:"Related issues"}),"\n",(0,n.jsx)(t.h3,{id:"no-worker-name",children:"No worker name"}),"\n",(0,n.jsxs)(t.p,{children:["First I missed the ",(0,n.jsx)(t.code,{children:".WorkerName"})," in the activation command and this broke somehow the activation.\nIn the client I got either timeouts or resource exhausted responses, but in the gateway I saw that the worker name is missing."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Gateway output:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"io.zeebe.gateway.cmd.BrokerRejectionException: Command (ACTIVATE) rejected (INVALID_ARGUMENT): Expected to activate job batch with worker to be present, but it was blank\n\tat io.zeebe.gateway.impl.broker.BrokerRequestManager.handleResponse(BrokerRequestManager.java:185) ~[zeebe-gateway-0.25.0.jar:0.25.0]\n\tat io.zeebe.gateway.impl.broker.BrokerRequestManager.lambda$sendRequestInternal$2(BrokerRequestManager.java:137) ~[zeebe-gateway-0.25.0.jar:0.25.0]\n\tat io.zeebe.util.sched.future.FutureContinuationRunnable.run(FutureContinuationRunnable.java:28) [zeebe-util-0.25.0.jar:0.25.0]\n\tat io.zeebe.util.sched.ActorJob.invoke(ActorJob.java:76) [zeebe-util-0.25.0.jar:0.25.0]\n\tat io.zeebe.util.sched.ActorJob.execute(ActorJob.java:39) [zeebe-util-0.25.0.jar:0.25.0]\n\tat io.zeebe.util.sched.ActorTask.execute(ActorTask.java:122) [zeebe-util-0.25.0.jar:0.25.0]\n\tat io.zeebe.util.sched.ActorThread.executeCurrentTask(ActorThread.java:107) [zeebe-util-0.25.0.jar:0.25.0]\n\tat io.zeebe.util.sched.ActorThread.doWork(ActorThread.java:91) [zeebe-util-0.25.0.jar:0.25.0]\n\tat io.zeebe.util.sched.ActorThread.run(ActorThread.java:204) [zeebe-util-0.25.0.jar:0.25.0]\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Client output:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'Failed to activate job, because of Status(StatusCode="DeadlineExceeded", Detail="Deadline Exceeded", DebugException="Grpc.Core.Internal.CoreErrorDetailException: {"created":"@1605092309.325960242","description":"Error received from peer ipv4:35.205.156.246:443","file":"/var/local/git/grpc/src/core/lib/surface/call.cc","file_line":1062,"grpc_message":"Deadline Exceeded","grpc_status":4}")\n'})}),"\n",(0,n.jsxs)(t.p,{children:["After adding the worker name it works, but begins with lot of resource exhausted. I created a new issue for it ",(0,n.jsx)(t.a,{href:"https://github.com/zeebe-io/zeebe/issues/5812",children:"https://github.com/zeebe-io/zeebe/issues/5812"})," ."]}),"\n",(0,n.jsx)(t.h2,{id:"pod-restarts",children:"Pod restarts"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"preempt",src:a(73085).Z+"",width:"1825",height:"565"})}),"\n",(0,n.jsx)(t.p,{children:"Every 10 min it seems to be a node dying, which causes resource exhausted then."}),"\n",(0,n.jsxs)(t.p,{children:["After looking at the ",(0,n.jsx)(t.a,{href:"https://console.cloud.google.com/logs/viewer?interval=PT1H&authuser=1&organizationId=669107107215&project=camunda-cloud-240911&minLogLevel=0&expandAll=false&timestamp=2020-11-11T14:04:53.000000000Z&customFacets=&limitCustomFacetWidth=true&advancedFilter=jsonPayload.kind%3D%22Event%22%0Aresource.labels.cluster_name%3D%22ultrachaos%22%0AjsonPayload.involvedObject.namespace%3D%2299c029a3-b6ae-4e7b-a2aa-6496adebf94c-zeebe%22%0AjsonPayload.involvedObject.name:%22zeebe%22&scrollTimestamp=2020-11-11T13:49:52.000000000Z&dateRangeEnd=2020-11-11T14:06:47.813Z&dateRangeStart=2020-11-11T13:06:47.813Z",children:"gke events"})," I saw now evidence that this is caused by node preemptions."]}),"\n",(0,n.jsx)(t.p,{children:"I checked the pods directly and saw no heap dumps in the data folder. After describing the pod I can see:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"[zell zeebe-cluster-testbench/ ns:99c029a3-b6ae-4e7b-a2aa-6496adebf94c-zeebe]$ k describe pod zeebe-1\nName:         zeebe-1\nNamespace:    99c029a3-b6ae-4e7b-a2aa-6496adebf94c-zeebe\nPriority:     0\nNode:         gke-ultrachaos-compute-fea23edf-tqbm/10.132.0.58\nStart Time:   Wed, 11 Nov 2020 14:49:52 +0100\nLabels:       app.kubernetes.io/app=zeebe\n              app.kubernetes.io/component=gateway\n              controller-revision-hash=zeebe-66b694fbfc\n              statefulset.kubernetes.io/pod-name=zeebe-1\nAnnotations:  <none>\nStatus:       Running\nIP:           10.56.7.16\nIPs:\n  IP:           10.56.7.16\nControlled By:  StatefulSet/zeebe\nContainers:\n  zeebe:\n    Container ID:   docker://a55fe90d3184bea064aec29d845680241096b0d971d66b05a35495857c5d7427\n    Image:          camunda/zeebe:0.25.0\n    Image ID:       docker-pullable://camunda/zeebe@sha256:1286086e786975837dcbf664daa29d41d2666af4daf4abd3192fff1426804dd6\n    Ports:          9600/TCP, 26500/TCP, 26501/TCP, 26502/TCP, 26503/TCP, 26504/TCP\n    Host Ports:     0/TCP, 0/TCP, 0/TCP, 0/TCP, 0/TCP, 0/TCP\n    State:          Waiting\n      Reason:       CrashLoopBackOff\n    Last State:     Terminated    <=====\n      Reason:       OOMKilled    <====\n      Exit Code:    137   \n      Started:      Wed, 11 Nov 2020 16:06:59 +0100\n      Finished:     Wed, 11 Nov 2020 16:16:19 +0100\n    Ready:          False\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Furthermore we can see the ",(0,n.jsx)(t.code,{children:"JAVA_OPTIONS"}),", which are:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"JAVA_TOOL_OPTIONS:                                -XX:MaxRAMPercentage=50.0 -XX:InitialRAMPercentage=25.0 -XX:+ExitOnOutOfMemoryError -XX:+HeapDumpOnOutOfMemoryError\n"})}),"\n",(0,n.jsx)(t.p,{children:"I was wondering why we not setting any path for the heap dump. @npepinpe mentioned that this is done in the start up script."}),"\n",(0,n.jsx)(t.p,{children:"It is true this is part of the script:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:'[zell zeebe-cluster-testbench/ ns:99c029a3-b6ae-4e7b-a2aa-6496adebf94c-zeebe]$ k describe configmaps zeebe-configmap \nName:         zeebe-configmap\nNamespace:    99c029a3-b6ae-4e7b-a2aa-6496adebf94c-zeebe\nLabels:       cloud.camunda.io/channel=Internal_Dev\n              cloud.camunda.io/clusterPlan=Production_S_v1\n              cloud.camunda.io/clusterPlanType=Production_S\n              cloud.camunda.io/generation=Zeebe_0_25_0\n              cloud.camunda.io/internalSalesPlan=false\n              cloud.camunda.io/orgName=the_org_with_the_big_cluster\n              cloud.camunda.io/salesPlan=Paid\nAnnotations:  <none>\n\nData\n====\nstartup.sh:\n----\n# ...\n# append datestamped heapdump path\nexport JAVA_TOOL_OPTIONS="${JAVA_TOOL_OPTIONS} -XX:HeapDumpPath=/usr/local/zeebe/data/java_started_$(date +%s).hprof"\n\nenv\nexec /usr/local/zeebe/bin/broker\n'})}),"\n",(0,n.jsx)(t.p,{children:"Unfortunately this is not visible outside of this context, which is why I thought it is not set."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"root@zeebe-0:/usr/local/zeebe# java -XX:+UnlockDiagnosticVMOptions -XX:+PrintFlagsFinal -version\nPicked up JAVA_TOOL_OPTIONS: -XX:MaxRAMPercentage=50.0 -XX:InitialRAMPercentage=25.0 -XX:+ExitOnOutOfMemoryError -XX:+HeapDumpOnOutOfMemoryError\n\n#...\n\n    bool HeapDumpBeforeFullGC                     = false                                  {manageable} {default}\n     bool HeapDumpOnOutOfMemoryError               = true                                   {manageable} {environment}\n    ccstr HeapDumpPath                             =                                        {manageable} {default}\n    uintx HeapFirstMaximumCompactionCount          = 3                                         {product} {default}\n\n#...\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"root@zeebe-0:/usr/local/zeebe# env | grep JAVA\nJAVA_HOME=/usr/local/openjdk-11\nJAVA_TOOL_OPTIONS=-XX:MaxRAMPercentage=50.0 -XX:InitialRAMPercentage=25.0 -XX:+ExitOnOutOfMemoryError -XX:+HeapDumpOnOutOfMemoryError\nJAVA_VERSION=11.0.8\nroot@zeebe-0:/usr/local/zeebe# \n\n"})}),"\n",(0,n.jsx)(t.p,{children:"I think we should give the production s cluster plans a bit more memory, currently has 2 gig and java can use only 1 gig. It is currently quite easy to overload the brokers and kill them with a small load."}),"\n",(0,n.jsx)(t.h2,{id:"new-issues",children:"New Issues"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/zeebe-io/zeebe/issues/5812",children:"#5812"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"participants",children:"Participants"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"@zelldon"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},73085:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/preemptions-43f8fecfee26ee1a36ce8c5e1c64800b.png"},18176:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/timeout-bomb-general-2882c1cebcf4e21a03bc95ffb53fbe55.png"},74290:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/timeout-bomb-49bcb43661c399c7467ceee9c8f9d4c8.png"},11151:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>o});var n=a(67294);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);