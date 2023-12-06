"use strict";(self.webpackChunkzell_chaos=self.webpackChunkzell_chaos||[]).push([[7289],{45562:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(85893),s=a(11151);const r={layout:"posts",title:"Standalone Gateway in CCSaaS",date:new Date("2022-02-15T00:00:00.000Z"),categories:["chaos_experiment","gateway"],tags:["availability"],authors:"zell"},i="Chaos Day Summary",o={permalink:"/zeebe-chaos/2022/02/15/Standalone-Gateway-in-CCSaaS",editUrl:"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2022-02-15-Standalone-Gateway-in-CCSaaS/index.md",source:"@site/blog/2022-02-15-Standalone-Gateway-in-CCSaaS/index.md",title:"Standalone Gateway in CCSaaS",description:"We recently introduced the Zeebe Standalone Gateway in CCSaaS. Today I wanted to do a first simple",date:"2022-02-15T00:00:00.000Z",formattedDate:"February 15, 2022",tags:[{label:"availability",permalink:"/zeebe-chaos/tags/availability"}],readingTime:3.935,hasTruncateMarker:!0,authors:[{name:"Christopher Kujawa",title:"Chaos Engineer @ Zeebe",url:"https://github.com/zelldon",imageURL:"https://github.com/zelldon.png",key:"zell"}],frontMatter:{layout:"posts",title:"Standalone Gateway in CCSaaS",date:"2022-02-15T00:00:00.000Z",categories:["chaos_experiment","gateway"],tags:["availability"],authors:"zell"},unlisted:!1,prevItem:{title:"Bring Deployment distribution experiment back",permalink:"/zeebe-chaos/2022/08/02/deployment-distribution"},nextItem:{title:"High Snapshot Frequency",permalink:"/zeebe-chaos/2022/02/01/High-Snapshot-Frequency"}},l={authorsImageUrls:[void 0]},c=[{value:"Chaos Experiment",id:"chaos-experiment",level:2},{value:"Expected",id:"expected",level:3},{value:"Actual",id:"actual",level:3},{value:"Result",id:"result",level:2},{value:"Found Issues",id:"found-issues",level:2},{value:"Optimize resources",id:"optimize-resources",level:3},{value:"Gateway metrics",id:"gateway-metrics",level:3},{value:"Gateway Anti-affinity",id:"gateway-anti-affinity",level:3}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"We recently introduced the Zeebe Standalone Gateway in CCSaaS. Today I wanted to do a first simple\nchaos experiment with the gateway, where we just restart one gateway."}),"\n",(0,n.jsxs)(t.p,{children:["Ideally in the future we could enable some gateway chaos experiments again, which we currently only support for ",(0,n.jsx)(t.a,{href:"https://github.com/zeebe-io/zeebe-chaos/tree/master/chaos-workers/chaos-experiments/helm",children:"helm"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"TL;DR;"})," Our Camunda Cloud clusters can handle gateway restarts without issues."]}),"\n",(0,n.jsx)(t.h2,{id:"chaos-experiment",children:"Chaos Experiment"}),"\n",(0,n.jsx)(t.p,{children:"This experiment is a simple restart / kill pod experiment. We want to verify that our cluster\ncan still make progress even if a gateway is restarted / killed in between. Currently, we are running two gateway replicas in the CCSaaS."}),"\n",(0,n.jsxs)(t.p,{children:["In order to start with our experiment we created a new CCSaaS cluster with a ",(0,n.jsx)(t.code,{children:"Production - S"})," plan, and the latest version (1.3.4).\nTo run some load on the cluster we used the cloud benchmark deployments, which you can find ",(0,n.jsx)(t.a,{href:"https://github.com/camunda-cloud/zeebe/tree/main/benchmarks/setup/cloud-default",children:"here"}),".\nThe load was rather low with ~ 100 PI/s."]}),"\n",(0,n.jsx)(t.h3,{id:"expected",children:"Expected"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Hypothesis: When restarting / killing a zeebe standalone gateway we expect only a small\nimpact on current requests, new requests should be routed to the right gateway and the cluster can\nmake progress."})}),"\n",(0,n.jsx)(t.h3,{id:"actual",children:"Actual"}),"\n",(0,n.jsx)(t.p,{children:"After creating the cluster and starting the benchmark we checked the current resource usage, to find a cluster which does most of the work. It looks like that the requests are well distributed."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"[zell zell-chaos/ cluster: ultrachaos ns:448f5091-8d15-4c01-a0ee-202437c09d83-zeebe]$ k top pod\nNAME                                                     CPU(cores)   MEMORY(bytes)   \n...      \nzeebe-gateway-6c9f95b557-f2zbf                           294m         407Mi           \nzeebe-gateway-6c9f95b557-gk57z                           202m         396Mi\n"})}),"\n",(0,n.jsxs)(t.p,{children:["We deleted the first pod ",(0,n.jsx)(t.code,{children:"zeebe-gateway-6c9f95b557-f2zbf"})," and observed the metrics."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'[zell zell-chaos/ cluster: ultrachaos ns:448f5091-8d15-4c01-a0ee-202437c09d83-zeebe]$ k delete pod zeebe-gateway-6c9f95b557-f2zbf\npod "zeebe-gateway-6c9f95b557-f2zbf" deleted\n'})}),"\n",(0,n.jsx)(t.p,{children:"We can see that a new gateway pod is created quite fast."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"[zell zell-chaos/ cluster: ultrachaos ns:448f5091-8d15-4c01-a0ee-202437c09d83-zeebe]$ kgpo\nNAME                                                     READY   STATUS             RESTARTS   AGE\n...\nzeebe-gateway-6c9f95b557-flgz6                           0/1     Running            0          16s\nzeebe-gateway-6c9f95b557-gk57z                           1/1     Running            0          156m\n"})}),"\n",(0,n.jsx)(t.p,{children:"As expected we see no high impact due to the restart."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:a(97168).Z+"",width:"1834",height:"682"})}),"\n",(0,n.jsx)(t.p,{children:"Just out of interest I deleted all gateway pods:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'$ k delete pod -l app.kubernetes.io/component=standalone-gateway\npod "zeebe-gateway-6c9f95b557-flgz6" deleted\npod "zeebe-gateway-6c9f95b557-gk57z" deleted\n'})}),"\n",(0,n.jsx)(t.p,{children:"We can see that the throughput goes almost directly down, but recovers again. It took ~4 min until we\nreached the normal state (normal throughput of 100 PI/s) again. But we can also see that it is only a short period\nof time, where nothing happens."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:a(34190).Z+"",width:"1828",height:"685"})}),"\n",(0,n.jsx)(t.p,{children:"Ideally we would define some anti-affinity on the gateway pods, to reduce the risk of losing all gateways at once."}),"\n",(0,n.jsx)(t.h2,{id:"result",children:"Result"}),"\n",(0,n.jsx)(t.p,{children:"We were able to verify and proof our hypothesis."}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Hypothesis: When restarting / killing a zeebe standalone gateway we expect only a small\nimpact on current requests, new requests should be routed to the right gateway and the cluster can\nmake progress."})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"As we saw above the resources were almost equally used, which is in our normal zeebe benchmarks not the case.\nIn the benchmarks we use the helm charts and there is no ingress controller enabled,\nso we have no good load balancing of the incoming requests."}),"\n",(0,n.jsx)(t.p,{children:"The benefit of the standalone gateway now stands out: losing one is not too problematic than one broker with an embedded gateway,\nsince a broker takes longer to restart and is likely to be an leader for a partition, which will then also cause a leader change.\nFurthermore, we can scale the gateways independently."}),"\n",(0,n.jsx)(t.h2,{id:"found-issues",children:"Found Issues"}),"\n",(0,n.jsx)(t.h3,{id:"optimize-resources",children:"Optimize resources"}),"\n",(0,n.jsx)(t.p,{children:"During experiment with the CCSaaS cluster I observed that the Optimize importer was crashlooping due to this load (PI 100/s)."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"[zell zell-chaos/ cluster: ultrachaos ns:448f5091-8d15-4c01-a0ee-202437c09d83-zeebe]$ kgpo\nNAME                                                     READY   STATUS             RESTARTS   AGE\n...\noptimize-deployment-importer-archiver-65679b6449-pb7kz   0/1     CrashLoopBackOff   5          128m\n...\n"})}),"\n",(0,n.jsx)(t.p,{children:"Checking the pod shows:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"    State:          Waiting\n      Reason:       CrashLoopBackOff\n    Last State:     Terminated\n      Reason:       Error\n      Exit Code:    3\n      Started:      Tue, 15 Feb 2022 14:25:36 +0100\n      Finished:     Tue, 15 Feb 2022 14:26:33 +0100\n    Ready:          False\n"})}),"\n",(0,n.jsx)(t.p,{children:"Checking the logs we can see that it runs continuously out of memory."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'\nZell\ufffc  13 minutes ago\n13:32:48.493 [ZeebeImportScheduler-1] WARN  org.elasticsearch.client.RestClient - request [POST http://elasticsearch:9200/zeebe-record-process-instance/_search?routing=2&typed_keys=true&max_concurrent_shard_requests=5&ignore_unavailable=false&expand_wildcards=open&allow_no_indices=true&ignore_throttled=true&request_cache=false&search_type=query_then_fetch&batched_reduce_size=512&ccs_minimize_roundtrips=true] returned 1 warnings: [299 Elasticsearch-7.16.2-2b937c44140b6559905130a8650c64dbd0879cfb "[ignore_throttled] parameter is deprecated because frozen indices have been deprecated. Consider cold or frozen tiers in place of frozen indices."]\n13:32:49.104 [ImportJobExecutor-pool-ZeebeProcessInstanceImportService-0] WARN  org.elasticsearch.client.RestClient - request [HEAD http://elasticsearch:9200/optimize-process-instance-benchmark?ignore_throttled=false&ignore_unavailable=false&expand_wildcards=open%2Cclosed&allow_no_indices=false] returned 1 warnings: [299 Elasticsearch-7.16.2-2b937c44140b6559905130a8650c64dbd0879cfb "[ignore_throttled] parameter is deprecated because frozen indices have been deprecated. Consider cold or frozen tiers in place of frozen indices."]\njava.lang.OutOfMemoryError: Java heap space\nDumping heap to java_pid8.hprof ...\nHeap dump file created [611503401 bytes in 1.070 secs]\nTerminating due to java.lang.OutOfMemoryError: Java heap space\n'})}),"\n",(0,n.jsx)(t.h3,{id:"gateway-metrics",children:"Gateway metrics"}),"\n",(0,n.jsx)(t.p,{children:"It looks like that in our latest ccsm helm charts, we no longer export the gateway metrics which we should fix."}),"\n",(0,n.jsx)(t.h3,{id:"gateway-anti-affinity",children:"Gateway Anti-affinity"}),"\n",(0,n.jsx)(t.p,{children:"Currently, we have no anti-affinity defined for the gateway, which could cause on preemption to take down all gateways."})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},97168:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/restart-5fbac0a50fb69d699a0721209d956d9d.png"},34190:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/restart2-a5fd3b37472ebf79e5edac7f1ed513e5.png"},11151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>i});var n=a(67294);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);