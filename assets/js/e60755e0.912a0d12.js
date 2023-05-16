"use strict";(self.webpackChunkzell_chaos=self.webpackChunkzell_chaos||[]).push([[950],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return n?a.createElement(m,i(i({ref:t},h),{},{components:n})):a.createElement(m,i({ref:t},h))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1640:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={layout:"posts",title:"Investigate failing Chaos Tests",date:new Date("2020-11-03T00:00:00.000Z"),categories:["investigation"],tags:["tests"],authors:"zell"},i="Chaos Day Summary",s={permalink:"/zeebe-chaos/2020/11/03/investigate-failing-tests",editUrl:"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2020-11-03-investigate-failing-tests/index.md",source:"@site/blog/2020-11-03-investigate-failing-tests/index.md",title:"Investigate failing Chaos Tests",description:"Today as part of the Chaos Day I wanted to investigate why our current Chaos Tests are failing and why our targeting cluster has been broken by them,",date:"2020-11-03T00:00:00.000Z",formattedDate:"November 3, 2020",tags:[{label:"tests",permalink:"/zeebe-chaos/tags/tests"}],readingTime:4.57,hasTruncateMarker:!0,authors:[{name:"Christopher Zell",title:"Chaos Engineer @ Zeebe",url:"https://github.com/zelldon",imageURL:"https://github.com/zelldon.png",key:"zell"}],frontMatter:{layout:"posts",title:"Investigate failing Chaos Tests",date:"2020-11-03T00:00:00.000Z",categories:["investigation"],tags:["tests"],authors:"zell"},prevItem:{title:"Many Job Timeouts",permalink:"/zeebe-chaos/2020/11/11/job-timeouts"},nextItem:{title:"Non-graceful Shutdown Broker",permalink:"/zeebe-chaos/2020/10/20/non-graceful-shutdown"}},l={authorsImageUrls:[void 0]},c=[{value:"Investigation",id:"investigation",level:2},{value:"Reproducing Chaos",id:"reproducing-chaos",level:3},{value:"Notes",id:"notes",level:3},{value:"New Issues",id:"new-issues",level:2},{value:"Participants",id:"participants",level:2}],h={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Today as part of the Chaos Day I wanted to investigate why our current Chaos Tests are failing and why our targeting cluster has been broken by them,\nsee the related issue ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe/issues/5688"},"#5688"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"TL;DR")),(0,r.kt)("p",null,"We found three new bugs regarding the reprocessing detection and deployment distribution, but still were not able to reproduce the real issue."),(0,r.kt)("h2",{id:"investigation"},"Investigation"),(0,r.kt)("p",null,"I started already yesterday with the investigation and found out that two brokers (",(0,r.kt)("inlineCode",{parentName:"p"},"Broker-0")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Broker-2"),") are failing to restart on partition three, but ",(0,r.kt)("inlineCode",{parentName:"p"},"Broker-0")," is able to start the processing on partition three. See this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe/issues/5688#issuecomment-720401612"},"comment")," for more information. Note that partition three is receiving deployment from partition one via deployment distribution."),(0,r.kt)("p",null,"Together with @saig0 I looked at the code and we found out that reprocessing can be a bit problematic in some situations regarding the ",(0,r.kt)("inlineCode",{parentName:"p"},"WorkflowPersistenceCache"),", see related ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe/issues/5688#issuecomment-721021464"},"comment"),"."),(0,r.kt)("p",null,"The cache is used in the ",(0,r.kt)("inlineCode",{parentName:"p"},"DeploymentCreateProcessor")," to verify that the deployment is new and to add it to the state. If this deployment with the same key already exists (in-memory) then the processor rejects the ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE")," command.\nNow we can have situations which might be problematic. Say we have two of the ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE")," commands on normal processing, this can happen when the first partition re-distributes the deployment. When the first one is processed we create a follow up event (",(0,r.kt)("inlineCode",{parentName:"p"},"CREATED"),"), on the second ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE")," we will write a rejection, since it is already in-memory. If a leader change happens, then it is crucial where the snapshot was taken. If the snapshot position is ",(0,r.kt)("strong",{parentName:"p"},"AFTER")," the first ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE")," this means that we will handle the second ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE")," as the first one, which means we will generate on reprocessing a ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE")," but on the log is a rejection written. This is because the in-memory state doesn't reflect the real state. Opened an issue for this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe/issues/5753"},"#5753"),"."),(0,r.kt)("p",null,"The bug which we found was not the real issue we currently have with the broken cluster, since we have two nodes which have the ",(0,r.kt)("strong",{parentName:"p"},"same")," snapshot, but on one Broker it fails and another it doesn't. To really understand what the issue is we need the related log, so we need to reproduce this issue."),(0,r.kt)("h3",{id:"reproducing-chaos"},"Reproducing Chaos"),(0,r.kt)("p",null,"I created a benchmark with the Zeebe version ",(0,r.kt)("inlineCode",{parentName:"p"},"0.24.4"),". Check ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe/tree/develop/benchmarks/setup"},"this")," for how to setup a benchmark. I realized that creating a benchmark for an earlier version is currently not working because we set the ",(0,r.kt)("inlineCode",{parentName:"p"},"useMMap")," flag in the ",(0,r.kt)("inlineCode",{parentName:"p"},"zeebe-values.yaml")," file. After removing that it works without problems."),(0,r.kt)("p",null,"To run all experiments in a loop I used in the ",(0,r.kt)("inlineCode",{parentName:"p"},"chaos-experiments/kubernetes")," folder"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," while [ $? -eq 0 ]; do for ex in */experiment.json; do chaos run $ex; done; done\n\n")),(0,r.kt)("p",null,"During running the experiments I found a bug in our chaos experiments, where it seems that some experiments are not executed correctly, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe-chaos/issues/43"},"#43"),"."),(0,r.kt)("p",null,"It took a while, but at some point the experiments start to fail. Interesting is that if you look at the pods all seem to be ready, but in the metrics we can see that one partition is unhealthy (Partition one this time).\nChecking the logs I found this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'io.zeebe.engine.processor.InconsistentReprocessingException: Reprocessing issue detected! Restore the data from a backup and follow the recommended upgrade procedure. [cause: "The key of the record on the log stream doesn\'t match to the record from reprocessing.", log-stream-record: {"partitionId":1,"value":{"errorMessage":"","type":"benchmark-task","errorCode":"","variables":{},"worker":"benchmark-worker","deadline":1604403149010,"bpmnProcessId":"benchmark","workflowKey":2251799813685250,"customHeaders":{},"retries":3,"elementId":"task","elementInstanceKey":2251799813688892,"workflowDefinitionVersion":1,"workflowInstanceKey":2251799813688864},"sourceRecordPosition":8054,"timestamp":1604403162815,"position":9274,"valueType":"JOB","intent":"TIME_OUT","recordType":"COMMAND","rejectionReason":"","rejectionType":"NULL_VAL","key":2251799813688902}, reprocessing-record: {key=2251799813688825, sourceRecordPosition=8054, intent=DeploymentIntent:DISTRIBUTED, recordType=EVENT}]\n    at io.zeebe.engine.processor.ReProcessingStateMachine.lambda$verifyRecordMatchesToReprocessing$12(ReProcessingStateMachine.java:400) ~[zeebe-workflow-engine-0.24.4.jar:0.24.4]\n    at java.util.Optional.ifPresent(Unknown Source) ~[?:?]\n    at io.zeebe.engine.processor.ReProcessingStateMachine.verifyRecordMatchesToReprocessing(ReProcessingStateMachine.java:394) ~[zeebe-workflow-engine-0.24.4.jar:0.24.4]\n    at io.zeebe.engine.processor.ReProcessingStateMachine.reprocessEvent(ReProcessingStateMachine.java:258) ~[zeebe-workflow-engine-0.24.4.jar:0.24.4]\n    at io.zeebe.engine.processor.ReProcessingStateMachine.reprocessNextEvent(ReProcessingStateMachine.java:226) ~[zeebe-workflow-engine-0.24.4.jar:0.24.4]\n    at io.zeebe.util.sched.ActorJob.invoke(ActorJob.java:73) [zeebe-util-0.24.4.jar:0.24.4]\n    at io.zeebe.util.sched.ActorJob.execute(ActorJob.java:39) [zeebe-util-0.24.4.jar:0.24.4]\n    at io.zeebe.util.sched.ActorTask.execute(ActorTask.java:118) [zeebe-util-0.24.4.jar:0.24.4]\n    at io.zeebe.util.sched.ActorThread.executeCurrentTask(ActorThread.java:107) [zeebe-util-0.24.4.jar:0.24.4]\n    at io.zeebe.util.sched.ActorThread.doWork(ActorThread.java:91) [zeebe-util-0.24.4.jar:0.24.4]\n    at io.zeebe.util.sched.ActorThread.run(ActorThread.java:204) [zeebe-util-0.24.4.jar:0.24.4]\n')),(0,r.kt)("p",null,"I think this is caused by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe/issues/3124"},"#3124"),", because if the distribution succeeds we want to write a ",(0,r.kt)("inlineCode",{parentName:"p"},"DISTRUBITED")," event on the log, with the stream writer from the context. This can happen concurrently with our reprocessing.\nMy assumption was that this is caused by a race condition, which might get fixed when we restart the pod. I restarted the ",(0,r.kt)("inlineCode",{parentName:"p"},"Broker-2"),", which was leader for partition 3 and ",(0,r.kt)("inlineCode",{parentName:"p"},"Broker-1")," took over and started the partition successfully."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2020-11-03 14:54:32.916 CET Broker-1-StreamProcessor-1 Processor finished reprocessing at event position 18711\n")),(0,r.kt)("p",null,"I started the chaos experiments again. They are running now for a while."),(0,r.kt)("p",null,"Together with @npepinpe I discussed the open issues. We found another problematic bug with the in-memory state of the workflow cache. If on reprocessing an error/exception happens, then we retry the processing of this record, endless.\nBefore we retry we normally rollback the current transaction to discard all changes in the state. This doesn't apply for the in-memory state of the workflow cache, so this can lead to our specific scenario. We checked the log but found no\nindication that on reprocessing another exception happen, which caused an retry. In anyway we need to fix the cache to avoid the bugs we have described. We concluded that we need the log of the failing cluster to really understand what was happening. We will try to fix the bugs above soon as possible and in parallel run the experiments endless until they fail again."),(0,r.kt)("h3",{id:"notes"},"Notes"),(0,r.kt)("p",null,"To investigate the disks I prepared the follwing commands, which I can use to download the state of the brokers to my local machine."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl exec zell-chaos-0244-zeebe-2 -- tar -cf data.tar.gz data/ # compress the data dir\nkubectl cp zell-chaos-0244-zeebe-2:/usr/local/zeebe/data.tar.gz broker-2/data.tar.gz # download the tarball\ncd broker-2/\ntar -xvf broker-2-data.tar.gz\n\n")),(0,r.kt)("h2",{id:"new-issues"},"New Issues"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Gateway experiments are not executed ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/zeebe-io/zeebe-chaos/issues/43"},"#43")),(0,r.kt)("li",{parentName:"ul"},"Deployment Reprocessing inconsistencies ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/zeebe-io/zeebe/issues/5753"},"#5753"))),(0,r.kt)("h2",{id:"participants"},"Participants"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"@saig0"),(0,r.kt)("li",{parentName:"ul"},"@npepinpe"),(0,r.kt)("li",{parentName:"ul"},"@zelldon")))}u.isMDXComponent=!0}}]);