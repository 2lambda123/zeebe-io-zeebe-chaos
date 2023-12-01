"use strict";(self.webpackChunkzell_chaos=self.webpackChunkzell_chaos||[]).push([[2620],{49836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=n(85893),i=n(11151);const a={layout:"posts",title:"Continuing SST Partitioning toggle",date:new Date("2023-05-19T00:00:00.000Z"),categories:["chaos_experiment","configuration"],tags:["availability","data"],authors:"zell"},o="Chaos Day Summary",r={permalink:"/zeebe-chaos/2023/05/19/Continuing-SST-Partitioning-toggle",editUrl:"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2023-05-19-Continuing-SST-Partitioning-toggle/index.md",source:"@site/blog/2023-05-19-Continuing-SST-Partitioning-toggle/index.md",title:"Continuing SST Partitioning toggle",description:"Today we want to continue with the experiment from last Chaos day, but this time",date:"2023-05-19T00:00:00.000Z",formattedDate:"May 19, 2023",tags:[{label:"availability",permalink:"/zeebe-chaos/tags/availability"},{label:"data",permalink:"/zeebe-chaos/tags/data"}],readingTime:8.105,hasTruncateMarker:!0,authors:[{name:"Christopher Zell",title:"Chaos Engineer @ Zeebe",url:"https://github.com/zelldon",imageURL:"https://github.com/zelldon.png",key:"zell"}],frontMatter:{layout:"posts",title:"Continuing SST Partitioning toggle",date:"2023-05-19T00:00:00.000Z",categories:["chaos_experiment","configuration"],tags:["availability","data"],authors:"zell"},unlisted:!1,prevItem:{title:"Using Large Multi-Instance",permalink:"/zeebe-chaos/2023/06/02/Using-Large-Multi-Instance"},nextItem:{title:"SST Partitioning toggle",permalink:"/zeebe-chaos/2023/05/15/SST-Partitioning-toggle"}},c={authorsImageUrls:[void 0]},l=[{value:"Chaos Experiment",id:"chaos-experiment",level:2},{value:"Expected",id:"expected",level:3},{value:"Actual",id:"actual",level:3},{value:"First Experiment: Verify Steady state",id:"first-experiment-verify-steady-state",level:4},{value:"First Experiment: Chaos Action",id:"first-experiment-chaos-action",level:4},{value:"First Experiment: Verify Steady state",id:"first-experiment-verify-steady-state-1",level:4},{value:"Second Experiment: Chaos Action",id:"second-experiment-chaos-action",level:4},{value:"Second Experiment: Verify Steady state",id:"second-experiment-verify-steady-state",level:4},{value:"SST Partitioning and compaction",id:"sst-partitioning-and-compaction",level:4},{value:"Conclusion",id:"conclusion",level:2},{value:"Found Bugs",id:"found-bugs",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Today we want to continue with the experiment from ",(0,s.jsx)(t.a,{href:"/zeebe-chaos/2023/05/15/SST-Partitioning-toggle",children:"last Chaos day"}),", but this time\nwith a bit more load. This should make sure that we trigger the compaction of RocksDB and cause the SST partitioning to happen, for real."]}),"\n",(0,s.jsx)(t.p,{children:"The reasons stay the same we want to find out whether it would be possible to enable and disable the flag/configuration without issues."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"TL;DR;"})," Today's, experiments succeeded ","\ud83d\ude80",". We were able to show that even with a higher number of process instances (bigger state) we can easily disable and enable the SST partitioning flag without issues. I also got a confirmation from a RocksDb contributor that our observations are correct, and that we can easily toggle this feature without issues."]}),"\n",(0,s.jsx)(t.h2,{id:"chaos-experiment",children:"Chaos Experiment"}),"\n",(0,s.jsxs)(t.p,{children:["Similar setup to the ",(0,s.jsx)(t.a,{href:"/zeebe-chaos/2023/05/15/SST-Partitioning-toggle#chaos-experiment",children:"last Chaos day"}),".\nExcept this time we will enable Operate as well, in order to verify easily whether all instances have been completed.\nOther than that we use the standard benchmark configuration, without clients."]}),"\n",(0,s.jsx)(t.p,{children:"The verification of the steady state will consist, of checking the readiness and healthiness of the cluster, via zbchaos and metrics. Furthermore, we will verify that we can access operate and that no instances are running. As defined in chaos engineering principles the process of a chaos experiment looks always the same, Verify the steady state, introduce chaos, and verify the steady state."}),"\n",(0,s.jsx)(t.p,{children:"In our first experiment, we will enable the SST partitioning."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"First chaos action"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Deploy a process model (which contains a ",(0,s.jsx)(t.a,{href:"https://github.com/zeebe-io/zeebe-chaos/blob/main/go-chaos/internal/bpmn/one_task.bpmn",children:"simple model"}),")"]}),"\n",(0,s.jsx)(t.li,{children:"Start 1000 process instances (PIs), with a service task"}),"\n",(0,s.jsx)(t.li,{children:"Enable the SST partitioning"}),"\n",(0,s.jsx)(t.li,{children:"Restart the cluster, and await readiness"}),"\n",(0,s.jsx)(t.li,{children:"Complete the jobs (in consequence the PIs)"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"In our second experiment, we will disable the SST partitioning again."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Second chaos action:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Start 1000 process instances (PIs), with a service task"}),"\n",(0,s.jsx)(t.li,{children:"Disable the SST partitioning"}),"\n",(0,s.jsx)(t.li,{children:"Restart the cluster, and await readiness"}),"\n",(0,s.jsx)(t.li,{children:"Complete the jobs (in consequence the PIs)"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"expected",children:"Expected"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"When operating a cluster, I can enable and disable the SST partitioning without an impact on executing existing process instances. Existing PIs should still be executable and completable."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"actual",children:"Actual"}),"\n",(0,s.jsxs)(t.p,{children:["As linked above I used again our ",(0,s.jsx)(t.a,{href:"https://github.com/camunda/zeebe/tree/main/benchmarks/setup",children:"benchmark/setup"})," scripts to set up a cluster."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:'$ diff ../default/values.yaml values.yaml \n40c40\n<   replicas: 3\n---\n>   replicas: 0\n47c47\n<   replicas: 1\n---\n>   replicas: 0\n85a86\n>     zeebe.broker.experimental.rocksdb.enableSstPartitioning: "false"\n96a98,100\n>     identity:\n>       auth:\n>         enabled: false\n326c330\n<     enabled: false\n---\n>     enabled: true\n'})}),"\n",(0,s.jsx)(t.h4,{id:"first-experiment-verify-steady-state",children:"First Experiment: Verify Steady state"}),"\n",(0,s.jsxs)(t.p,{children:["To verify the readiness and run all actions I used the ",(0,s.jsx)(t.a,{href:"https://github.com/zeebe-io/zeebe-chaos/tree/zbchaos-v1.0.0",children:"zbchaos"})," tool."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"$ zbchaos verify readiness\nAll Zeebe nodes are running.\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Looking at the metrics shows that everything looks healthy. The only weird part is the topology panel which seems to be broken.\n",(0,s.jsx)(t.img,{alt:"start",src:n(92531).Z+"",width:"1853",height:"906"})]}),"\n",(0,s.jsxs)(t.p,{children:["When requesting the topology via ",(0,s.jsx)(t.code,{children:"zbchaos"})," we retrieve this:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"$ zbchaos topology\n{1 LEADER -1  10  msg false 1 LEADER -1 2 LEADER -1 1684476531915 false false true false false 30 false -1 benchmark 30  }\nNode      |Partition 1         |Partition 2         |Partition 3\n1         |FOLLOWER (HEALTHY)  |LEADER (HEALTHY)    |FOLLOWER (HEALTHY)\n0         |LEADER (HEALTHY)    |FOLLOWER (HEALTHY)  |LEADER (HEALTHY)\n2         |FOLLOWER (HEALTHY)  |FOLLOWER (HEALTHY)  |FOLLOWER (HEALTHY)\n"})}),"\n",(0,s.jsx)(t.p,{children:"For now, we assume the dashboard has an issue and continue with the experiment."}),"\n",(0,s.jsx)(t.p,{children:"We are able to access operate without issues, and see no instances yet."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"operate",src:n(68665).Z+"",width:"1901",height:"752"})}),"\n",(0,s.jsx)(t.h4,{id:"first-experiment-chaos-action",children:"First Experiment: Chaos Action"}),"\n",(0,s.jsx)(t.p,{children:"After the verification stage, we start with our chaos action, injecting chaos into the system.\nThe first step is to deploy the mentioned simple process model:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"$ zbchaos deploy process -v\nConnecting to zell-chaos\nRunning experiment in self-managed environment.\nPort forward to zell-chaos-zeebe-gateway-7bbdf9fd58-dl97j\nSuccessfully created port forwarding tunnel\nDeploy file bpmn/one_task.bpmn (size: 2526 bytes).\nDeployed process model bpmn/one_task.bpmn successful with key 2251799813685249.\nDeployed given process model , under key 2251799813685249!\n"})}),"\n",(0,s.jsx)(t.p,{children:"This is then as well visible in operate."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"operate-process",src:n(82279).Z+"",width:"1091",height:"503"})}),"\n",(0,s.jsxs)(t.p,{children:["As the next step, we will create 1000 process instances of our simple process model, with one service task.\nFor that, we can ",(0,s.jsx)(t.a,{href:"https://github.com/zeebe-io/zeebe-chaos/tree/zell-chaos-create-count-of-instances",children:"use a new functionality"})," of ",(0,s.jsx)(t.code,{children:"zbchaos"})," I built for this chaos day."]}),"\n",(0,s.jsx)(t.p,{children:"On the first try, I had smaller issues, with timeouts etc."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"Send create process instance command, with BPMN process ID 'benchmark' and version '-1' (-1 means latest) [variables: '', awaitResult: false]\n[299/999] Created process instance with key 6755399441056339 on partition 3.\npanic: Expected to create 999 process instances, but timed out after 30s created 299 instances.\n"})}),"\n",(0,s.jsx)(t.p,{children:"This is the reason why I had to retry the creations in the end the count is not exactly 1000 :)"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"./dist/zbchaos verify instance-count --instanceCount 697 -v --timeoutInSec 300\n...\n[695/697] Created process instance with key 4503599627372489 on partition 2.\nSend create process instance command, with BPMN process ID 'benchmark' and version '-1' (-1 means latest) [variables: '', awaitResult: false]\n[696/697] Created process instance with key 6755399441057737 on partition 3.\nSend create process instance command, with BPMN process ID 'benchmark' and version '-1' (-1 means latest) [variables: '', awaitResult: false]\n[697/697] Created process instance with key 2251799813687255 on partition 1.\nThe steady state was successfully verified!\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"pi",src:n(54168).Z+"",width:"1905",height:"510"})}),"\n",(0,s.jsx)(t.p,{children:"Now we are coming to the interesting part. Enabling SST partitioning."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:'$ diff ../default/values.yaml values.yaml \n85a86\n>     zeebe.broker.experimental.rocksdb.enableSstPartitioning: "true"\n$ make update \nhelm upgrade --namespace zell-chaos zell-chaos zeebe-benchmark/zeebe-benchmark -f values.yaml\n'})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),"\nChanging the configmap doesn't restart pods! We need to delete all Zeebe pods, to apply the configuration."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:'$ k delete pod -l app=camunda-platform\npod "zell-chaos-zeebe-0" deleted\npod "zell-chaos-zeebe-1" deleted\npod "zell-chaos-zeebe-2" deleted\npod "zell-chaos-zeebe-gateway-7bbdf9fd58-8j7d6" deleted\npod "zell-chaos-zeebe-gateway-7bbdf9fd58-dl97j" deleted\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"$ zbchaos verify readiness \nAll Zeebe nodes are running.\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Now starting to complete the previously created jobs, we can use again a new feature in ",(0,s.jsx)(t.code,{children:"zbchaos"})," (",(0,s.jsx)(t.a,{href:"https://github.com/zeebe-io/zeebe-chaos/tree/zell-chaos-create-count-of-instances",children:"which has been added during the chaos day"}),")\nUnfortunately, I missed using the verbose flag."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"$ ./dist/zbchaos verify job-completion --jobCount 1001 --timeoutInSec 1200\nThe steady-state was successfully verified!\n"})}),"\n",(0,s.jsx)(t.h4,{id:"first-experiment-verify-steady-state-1",children:"First Experiment: Verify Steady state"}),"\n",(0,s.jsx)(t.p,{children:"The job completions worked without issues. The metrics are looking good, the topology panel seems to work again as well."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"complete",src:n(34692).Z+"",width:"1845",height:"894"})}),"\n",(0,s.jsx)(t.p,{children:"In operate we can see that there are no longer any running instances and all of them have been completed."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"complete-operate",src:n(75750).Z+"",width:"1894",height:"500"}),"\n",(0,s.jsx)(t.img,{alt:"complete-operate2",src:n(98171).Z+"",width:"1887",height:"793"})]}),"\n",(0,s.jsxs)(t.p,{children:["The first part of the experiment worked as expected ","\u2705"]}),"\n",(0,s.jsx)(t.h4,{id:"second-experiment-chaos-action",children:"Second Experiment: Chaos Action"}),"\n",(0,s.jsx)(t.p,{children:"We are skipping the verification step, due to previous verification, we directly start with creating 1000 process instances."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"$ ./dist/zbchaos verify instance-count --instanceCount 1000 -v --timeoutInSec 300\n\nSend create process instance command, with BPMN process ID 'benchmark' and version '-1' (-1 means latest) [variables: '', awaitResult: false]\n[1000/1000] Successful command sent, got response with key 2251799813690599 on partition 1.\nThe steady-state was successfully verified!\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"second",src:n(32642).Z+"",width:"1890",height:"892"})}),"\n",(0,s.jsx)(t.p,{children:"Disable the SST partitioning flag and update the cluster."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"$ make update \n$ k delete pod -l app=camunda-platform\n$ zbchaos verify readiness\nAll Zeebe nodes are running.\n"})}),"\n",(0,s.jsx)(t.p,{children:"Complete all jobs:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"$ ./dist/zbchaos verify job-completion --jobCount 1000 --timeoutInSec 1200 -v\n[999/1000] Successful command sent, got response with key 6755399441061073 on partition 3.\nSend job activate command, with job type 'benchmark-task'\n[1000/1000] Successful command sent, got response with key 2251799813690604 on partition 1.\nThe steady-state was successfully verified!\n"})}),"\n",(0,s.jsx)(t.h4,{id:"second-experiment-verify-steady-state",children:"Second Experiment: Verify Steady state"}),"\n",(0,s.jsx)(t.p,{children:"Again the experiment succeeded, we were able to show that even with a higher number of process instances we can easily disable and enable the SST partitioning flag."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"verify",src:n(21602).Z+"",width:"1840",height:"892"}),"\n",(0,s.jsx)(t.img,{alt:"op-complete",src:n(76904).Z+"",width:"1087",height:"614"})]}),"\n",(0,s.jsx)(t.p,{children:"In the snapshots at we can see that some more files are used."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"snap",src:n(2638).Z+"",width:"878",height:"850"})}),"\n",(0,s.jsx)(t.p,{children:"But in RocksDb metrics we see no real compaction going on, which is why we will retry the same with a higher amount of data."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"rocks",src:n(973).Z+"",width:"884",height:"422"})}),"\n",(0,s.jsx)(t.h4,{id:"sst-partitioning-and-compaction",children:"SST Partitioning and compaction"}),"\n",(0,s.jsx)(t.p,{children:"I tried to run the experiment again but with more data (~11K instances)."}),"\n",(0,s.jsx)(t.p,{children:"Even when the metrics don't show the compaction, I was able to see in the RocksDB that compacting is happening."}),"\n",(0,s.jsx)(t.p,{children:"Around 11:56 between different loads"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"thirdrun",src:n(29090).Z+"",width:"1849",height:"891"})}),"\n",(0,s.jsx)(t.p,{children:"We see in the metrics of RocksDB that nothing"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"rocks",src:n(73787).Z+"",width:"1860",height:"451"})}),"\n",(0,s.jsx)(t.p,{children:"But when checking the RocksDB logs"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'$ cat data/raft-partition/partitions/1/runtime/LOG.old.1684493206724692 \n...\n\n2023/05/19-09:56:40.652111 140580419004160  Options.sst_partitioner_factory: SstPartitionerFixedPrefixFactory\n\n...\n2023/05/19-09:56:41.354244 140579153618688 (Original Log Time 2023/05/19-09:56:41.354149) EVENT_LOG_v1 {"time_micros": 1684490201354123, "job": 2, "event": "compaction_finished", "compaction_time_micros": 374078, "compaction_time_cpu_micros": 72361, "output_level": 3, "num_output_files": 14, "total_output_size": 6283132, "num_input_records": 69787, "num_output_records": 39118, "num_subcompactions": 1, "output_compression": "NoCompression", "num_single_delete_mismatches": 0, "num_single_delete_fallthrough": 0, "lsm_state": [0, 0, 0, 14]}\n2023/05/19-09:56:41.354763 140579153618688 [le/delete_scheduler.cc:77] Deleted file /usr/local/zeebe/data/raft-partition/partitions/1/runtime/000045.sst immediately, rate_bytes_per_sec 0, total_trash_size 0 max_trash_db_ratio 0.250000\n2023/05/19-09:56:41.354786 140579153618688 EVENT_LOG_v1 {"time_micros": 1684490201354782, "job": 2, "event": "table_file_deletion", "file_number": 45}\n2023/05/19-09:56:41.355217 140579153618688 [le/delete_scheduler.cc:77] Deleted file /usr/local/zeebe/data/raft-partition/partitions/1/runtime/000044.sst immediately, rate_bytes_per_sec 0, total_trash_size 0 max_trash_db_ratio 0.250000\n2023/05/19-09:56:41.355247 140579153618688 EVENT_LOG_v1 {"time_micros": 1684490201355243, "job": 2, "event": "table_file_deletion", "file_number": 44}\n2023/05/19-09:56:41.355765 140579153618688 [le/delete_scheduler.cc:77] Deleted file /usr/local/zeebe/data/raft-partition/partitions/1/runtime/000043.sst immediately, rate_bytes_per_sec 0, total_trash_size 0 max_trash_db_ratio 0.250000\n'})}),"\n",(0,s.jsx)(t.p,{children:"We see several lines which indicate the compaction."}),"\n",(0,s.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(t.p,{children:"We have seen that even when we toggle the SST partitioning, we are able to make progress and our stored data is not impacted. This is a great out come since it means we can easily enable such configuration on existing clusters and gains the performance benefits for larger states as we have seen in previous benchmarks."}),"\n",(0,s.jsxs)(t.p,{children:["I have posted a question related to this topic in the ",(0,s.jsx)(t.a,{href:"https://groups.google.com/g/rocksdb/c/Ys-yZIznZwU",children:"RocksDb google group"})," and I got a private answer which contains the following:"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Partitioner is just a hinter when compaction should split the file. Default compaction is also splitting by file size. So it has no functional effect and you can change configuration anytime."}),"\n",(0,s.jsx)(t.p,{children:"Partitioner does not need to be simple prefix only, but one can use more complicated strategy."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"This confirms our observation and makes it much more trustworthy."}),"\n",(0,s.jsx)(t.h2,{id:"found-bugs",children:"Found Bugs"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Grafana Topology Panel seems to be buggy from time to time"}),"\n",(0,s.jsx)(t.li,{children:"RocksDB compaction panel seems to show no data (might be related to a short time frame)"}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},73787:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/compacting-16d643497e24f39e3aef93cabb91a0b7.png"},34692:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/metrics-complete-6a55f56851581c51bf703a1431d75c3b.png"},75750:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/operate-complete-d4f703e6d9711b157856fd244294999a.png"},98171:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/operate-complete2-9a77531ed33a8b2a74c2d2b4bf5ff090.png"},54168:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/operate-pi-14b1db18f29dfd9c2858179dde92da41.png"},82279:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/operate-process-c2f4b5eac01d3b5334749518b3ed7eed.png"},68665:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/operate-c8609205a0832ffb0852c1c14c527e7e.png"},76904:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/second-exp-operate-complete-fb1b93e473c3b44f74af441a0758c6e0.png"},973:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/second-exp-rocks-ad699b1447a827a6cadc97e38b7e4536.png"},2638:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/second-exp-snap-619bf47a82dce280aed6013c81dde883.png"},21602:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/second-exp-verify-027ddb4d82b084f1da4fb7cf0804cd31.png"},32642:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/second-exp-e3fd7780bec7f168375839276a153572.png"},92531:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/start-bfbabb5034107afa1b8f0a19e81c72eb.png"},29090:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/thirdrun-d169e0524892c8521172f5d181e3c59d.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var s=n(67294);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);