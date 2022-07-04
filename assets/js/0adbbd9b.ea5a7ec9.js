"use strict";(self.webpackChunkzell_chaos=self.webpackChunkzell_chaos||[]).push([[2646],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=s.createContext({}),l=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return s.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,m=d["".concat(c,".").concat(u)]||d[u]||h[u]||r;return n?s.createElement(m,o(o({ref:t},p),{},{components:n})):s.createElement(m,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<r;l++)o[l]=n[l];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7654:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=n(7462),a=(n(7294),n(3905));const r={layout:"posts",title:"Full Disk Recovery",date:new Date("2021-06-08T00:00:00.000Z"),categories:["chaos_experiment","broker","disk"],tags:["availability"],authors:"zell"},o="Chaos Day Summary",i={permalink:"/zeebe-chaos/2021/06/08/Full-Disk",editUrl:"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2021-06-08-Full-Disk/index.md",source:"@site/blog/2021-06-08-Full-Disk/index.md",title:"Full Disk Recovery",description:"On this chaos day we wanted to experiment with OOD recovery and ELS connection issues. This is related to the following issues from our hypothesis backlog: zeebe-chaos#32 and zeebe-chaos#14. This time @Nico joined me.",date:"2021-06-08T00:00:00.000Z",formattedDate:"June 8, 2021",tags:[{label:"availability",permalink:"/zeebe-chaos/tags/availability"}],readingTime:7.125,truncated:!0,authors:[{name:"Christopher Zell",title:"Chaos Engineer @ Zeebe",url:"https://github.com/zelldon",imageURL:"https://github.com/zelldon.png",key:"zell"}],prevItem:{title:"Slow Network",permalink:"/zeebe-chaos/2021/07/06/Slow-Network"},nextItem:{title:"Time travel Experiment",permalink:"/zeebe-chaos/2021/05/25/Reset-Clock"}},c={authorsImageUrls:[void 0]},l=[{value:"Chaos Experiment",id:"chaos-experiment",children:[{value:"Expected",id:"expected",children:[]},{value:"Actual",id:"actual",children:[]},{value:"Result",id:"result",children:[]},{value:"Possible Improvements",id:"possible-improvements",children:[]}]}],p={toc:l};function h(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,s.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"On this chaos day we wanted to experiment with OOD recovery and ELS connection issues. This is related to the following issues from our hypothesis backlog: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe-chaos/issues/32"},"zeebe-chaos#32")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe-chaos/issues/14"},"zeebe-chaos#14"),". This time ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/korthout"},"@Nico")," joined me."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"TL;DR")," The experiment was successful \ud83d\udcaa and we found several things in the dashboard which we can improve :)"),(0,a.kt)("h2",{id:"chaos-experiment"},"Chaos Experiment"),(0,a.kt)("p",null,"With this experiment we want to verify that Zeebe can recover after OOD, which was caused by not exporting to ELS. For that we want to disconnect Zeebe and ELS first and see how it behaves. Afterwards we connect the services again and expect a recovery of the system."),(0,a.kt)("p",null,"As usual, we have set up a normal benchmark cluster with three nodes, three partitions and replication factor three. We run 200 PI/s and 12 workers against that cluster."),(0,a.kt)("h3",{id:"expected"},"Expected"),(0,a.kt)("p",null,"We expect the following properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"at the beginning the system is stable (we can start instances without issues)"),(0,a.kt)("li",{parentName:"ul"},"after disconnecting ELS we start to fill the disk, since we can't export (which means we can't compact)"),(0,a.kt)("li",{parentName:"ul"},"after reaching the disk limits, Zeebe doesn't accept any commands anymore"),(0,a.kt)("li",{parentName:"ul"},"after connecting ELS, Zeebe should start to export again (compacting should be possible again)"),(0,a.kt)("li",{parentName:"ul"},"after come below the limit, Zeebe should accept commands again")),(0,a.kt)("h4",{id:"network-disconnect-to-els"},"Network disconnect to ELS"),(0,a.kt)("p",null,"In order to disconnect the Brokers with ELS, we wanted to reuse one of our network disconnect scripts, e.g. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-experiments/scripts/disconnect-leaders.sh"},"disconnect-leaders.sh"),". This resolves the IP's of the brokers and creates an unreachable route via the ",(0,a.kt)("inlineCode",{parentName:"p"},"ip")," tool at the given brokers."),(0,a.kt)("p",null,"We copied that and adjusted it to our needs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'#!/bin/bash\nset -exuo pipefail\n\nsource utils.sh\n\npartition=1\nnamespace=$(getNamespace)\nelasticName="elasticsearch-master"\n\nbroker0=$(getBroker 0)\nbroker2=$(getBroker 2)\nbroker1=$(getBroker 1)\n\nelastic0Ip=$(kubectl get pod "$elasticName-0" -n "$namespace" --template="{{.status.podIP}}")\nelastic1Ip=$(kubectl get pod "$elasticName-1" -n "$namespace" --template="{{.status.podIP}}")\nelastic2Ip=$(kubectl get pod "$elasticName-2" -n "$namespace" --template="{{.status.podIP}}")\n\n\n# we put all into one function because we need to make sure that even after preemption the \n# dependency is installed\nfunction disconnect() {\n toChangedPod="$1"\n targetIp="$2"\n\n # update to have access to ip\n kubectl exec -n "$namespace" "$toChangedPod" -- apt update\n kubectl exec -n "$namespace" "$toChangedPod" -- apt install -y iproute2\n kubectl exec "$toChangedPod" -n "$namespace" -- ip route add unreachable "$targetIp"\n\n}\n\nretryUntilSuccess disconnect "$broker0" "$elastic0Ip"\nretryUntilSuccess disconnect "$broker0" "$elastic1Ip"\nretryUntilSuccess disconnect "$broker0" "$elastic2Ip"\n\n\nretryUntilSuccess disconnect "$broker1" "$elastic0Ip"\nretryUntilSuccess disconnect "$broker1" "$elastic1Ip"\nretryUntilSuccess disconnect "$broker1" "$elastic2Ip"\n\nretryUntilSuccess disconnect "$broker2" "$elastic0Ip"\nretryUntilSuccess disconnect "$broker2" "$elastic1Ip"\nretryUntilSuccess disconnect "$broker2" "$elastic2Ip"\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Small note in order to run this against the benchmark cluster you need to set the following environment variables:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"export NAMESPACE=$(kubens -c) # the namespace where the resources are located\nexport CHAOS_SETUP=helm # indicates that the installation is done via helm, necessary since we use different labels in the helm charts and in CC.\n")),(0,a.kt)("p",null,"Running the script above didn't work as expected. We still saw records being exported. The issue was that we need to use the service IP instead of the IP's of the elastic search pods. The Broker uses only the service to connect with ELS. In order to get the IP we can use this ",(0,a.kt)("inlineCode",{parentName:"p"},'kubectl get services elasticsearch-master --template "{{.spec.clusterIP}}"'),". "),(0,a.kt)("p",null,"The service will take care of the request routing, which means we just need to block one IP. This helps to simplify the disconnect script."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'#!/bin/bash\nset -exuo pipefail\n\nsource utils.sh\n\npartition=1\nnamespace=$(getNamespace)\nelasticName="elasticsearch-master"\n\nbroker0=$(getBroker 0)\nbroker2=$(getBroker 2)\nbroker1=$(getBroker 1)\n\nelasticServiceIp=$(kubectl get services elasticsearch-master --template "{{.spec.clusterIP}}")\n\n# we put all into one function because we need to make sure that even after preemption the \n# dependency is installed\nfunction disconnect() {\n toChangedPod="$1"\n targetIp="$2"\n\n # update to have access to ip\n kubectl exec -n "$namespace" "$toChangedPod" -- apt update\n kubectl exec -n "$namespace" "$toChangedPod" -- apt install -y iproute2\n kubectl exec "$toChangedPod" -n "$namespace" -- ip route add unreachable "$targetIp"\n\n}\n\nretryUntilSuccess disconnect "$broker0" "$elasticServiceIp"\nretryUntilSuccess disconnect "$broker1" "$elasticServiceIp"\nretryUntilSuccess disconnect "$broker2" "$elasticServiceIp"\n')),(0,a.kt)("h3",{id:"actual"},"Actual"),(0,a.kt)("p",null,"In this section we will describe how we experienced the chaos experiment and what we observed. "),(0,a.kt)("h4",{id:"first-try"},"First Try"),(0,a.kt)("p",null,"We run the disconnect script and were able to observe that the exporting stopped. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"elastic-disconnect",src:n(9607).Z})),(0,a.kt)("p",null,"As expected we were no longer able to compact, which cause an increasing of log segments."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"increase-segments",src:n(7510).Z})),(0,a.kt)("p",null,"We realized that our current disk size might be too big (it would take a while until we fill it), so we decided to setup a new benchmark with smaller size and different watermarks."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},' # ...\n    env:\n    - name: ZEEBE_BROKER_DATA_DISKUSAGECOMMANDWATERMARK\n      value: "0.6"\n    - name: ZEEBE_BROKER_DATA_DISKUSAGEREPLICATIONWATERMARK\n      value: "0.8"\n\n\n# PVC\npvcAccessMode: ["ReadWriteOnce"]\npvcSize: 16Gi\npvcStorageClassName: ssd\n')),(0,a.kt)("p",null,"We thought that we might have different performance, because of such a smaller disk size, but this was not the case. We were able to reach the same level, might be worth to think about reducing the disk sizes more in our benchmarks."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"base",src:n(1292).Z})),(0,a.kt)("h4",{id:"second-try"},"Second Try"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"base1",src:n(3487).Z})),(0,a.kt)("h5",{id:"disconnecting"},"Disconnecting"),(0,a.kt)("p",null,"After running our disconnect script we can immediately see that the exporting is stopping."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"drop-base",src:n(8551).Z})),(0,a.kt)("p",null,"Interesting is the elastic section where we see one of our new panels in actions which shows the failure rate. There are two dots, which show the 100% failure rate."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"drop-elastic",src:n(7663).Z})),(0,a.kt)("p",null,"After reaching our disk watermark we can see that the processing stops, and we no longer accept commands."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"drop-base-2",src:n(4006).Z})),(0,a.kt)("p",null,"The cluster turns to unhealthy, which is expected."),(0,a.kt)("p",null,"Interesting is that we have no metrics at all on the gateway side after reaching the watermark."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"drop-gw",src:n(147).Z})),(0,a.kt)("p",null,"We were able to verify that snapshots are still taken, but no compaction."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"drop-snapshot",src:n(3651).Z})),(0,a.kt)("p",null,"No segments are deleted during this time."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"drop-segments",src:n(1316).Z})),(0,a.kt)("p",null,"If we take a look at the processing section we can see that the exporters lag way behind, which of course makes sense."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"drop-processing",src:n(2039).Z})),(0,a.kt)("h5",{id:"connecting"},"Connecting"),(0,a.kt)("p",null,"Luckily we were able to reuse on of our already written reconnect scripts for this experiment, see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-experiments/scripts/connect-leaders.sh"},"connect-leaders.sh"),"."),(0,a.kt)("p",null,"After removing the ip route (connecting the Brokers with ELS again) we can see that it immediately starts to export again."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"connect-base",src:n(1921).Z})),(0,a.kt)("p",null,"When we went under the disk watermarks the processing started again and we accepted new commands."),(0,a.kt)("h3",{id:"result"},"Result"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"connect-base2",src:n(3612).Z})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The experiment was successful, our system was able to recover after an elastic network outage and handled it properly.")," \u2705 \ud83d\udcaa"),(0,a.kt)("p",null,"We noted several issues with the Dashboard, during the chaos experiment observation. For example the Brokers, which went OOD, never went back to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Healthy")," state again."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"connect-healthy",src:n(5800).Z})),(0,a.kt)("p",null,"Furthermore, the not exported panel seems to be broken, depending on the selected time frame."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"connect-not-exported",src:n(9184).Z})),(0,a.kt)("p",null,"There have been also other issues with the panels and sections which we should take a look at. I have listed them below."),(0,a.kt)("h3",{id:"possible-improvements"},"Possible Improvements"),(0,a.kt)("p",null,"We observed several issues with the grafana dashboard which I wrote down here. I will create issues or PR's to resolve them."),(0,a.kt)("h4",{id:"general-metric-section"},"General Metric Section"),(0,a.kt)("p",null,"If we take a look at the screenshot where we reach our disk watermarks, and the processing stops, the backpressure metrics are not correctly updated. We would expect that the backpressure shows 100%, since all requests are rejected."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"drop-base-2",src:n(4006).Z})),(0,a.kt)("p",null,"After the cluster actually becomes healthy again (it accepts new commands) it is not shown as healthy in the panels. The metrics seems not to be updated."),(0,a.kt)("p",null,"Another possible improvement would be to make it more visible that the exporting stopped. One idea is to split the processing into exporting and processing, so having two graphs might help."),(0,a.kt)("h4",{id:"processing-section"},"Processing Section"),(0,a.kt)("p",null,"Depending on the time frame the panel ",(0,a.kt)("inlineCode",{parentName:"p"},"Number of records not exported"),", seems to show quite high values."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"connect-not-exported",src:n(9184).Z})),(0,a.kt)("p",null,"If we take a look at other metrics, this doesn't make any sense. If we had such a backlog we wouldn't expect to compact to one segment for example. Furthemore the tables on the right side show numbers which are quite close to each other."),(0,a.kt)("h4",{id:"elastic-metrics-section"},"Elastic Metrics Section"),(0,a.kt)("p",null,"We probably can improve the failure panel, such that it shows a graph, and the limit is not set to 130%."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"drop-elastic",src:n(7663).Z})),(0,a.kt)("h4",{id:"grpc-metric-section"},"GRPC Metric Section"),(0,a.kt)("p",null,"The panel ",(0,a.kt)("inlineCode",{parentName:"p"},"gRPC requests")," should have an dec ordering on the tooltip and should be renamed to ",(0,a.kt)("inlineCode",{parentName:"p"},"Total gRPC requests")," it was a bit confusing to us."),(0,a.kt)("h4",{id:"throughput-section"},"Throughput Section"),(0,a.kt)("p",null,"The StreamProcessor vs Exporter panel has no data."),(0,a.kt)("h4",{id:"snapshot-section"},"Snapshot Section"),(0,a.kt)("p",null,"We saw that snapshots are created, but the Snapshot replication panel show no data. It seem to be broken (again?)."),(0,a.kt)("h4",{id:"resources-section"},"Resources Section"),(0,a.kt)("p",null,"The JVM panel has the legend on the right side, which makes it hard to see the metrics if you have multiple windows open on one screen."))}h.isMDXComponent=!0},9607:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/elastic-disconnect-5638a32fadfab9b778b02fe14a1d3ed7.png"},7510:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/increase-segments-bd8431b8424f7c0b8fb0d44307c2ab42.png"},1292:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/next-try-base-12b9f5871392bd43fe1f31224479aa6d.png"},3487:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/next-try-base1-649226bc28407a654bad7078dca639a0.png"},1921:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/next-try-connect-base-dfe3501b990f198861825cec2fb00735.png"},3612:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/next-try-connect-base2-375310b94ccc02fe3333b76954351a44.png"},5800:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/next-try-connect-healthy-124040b24b536d608e5c1d94eebabbc6.png"},9184:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/next-try-connect-not-exported-afa9d7092c5a219305b92e807e874d06.png"},4006:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/next-try-drop-base-2-908ab8f573d0460900504da7b122c5e9.png"},8551:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/next-try-drop-base-4fe3db248fb58bb7fdfef0b08e8b8cd1.png"},7663:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/next-try-drop-elastic-section-3e81b323923abc8ed78de26765ad9cfe.png"},147:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/next-try-drop-gw-a0e7f885194b47559bb07c6ad46942d0.png"},2039:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/next-try-drop-processing-4dc3f1fafd42d2e6560cde27e53a3aa2.png"},1316:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/next-try-drop-segments-3d49aaadb3d3455c25a920281a6c9595.png"},3651:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/next-try-drop-snapshot-d38bd5b1657f7b5a4fa763b26ebba239.png"}}]);