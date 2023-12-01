"use strict";(self.webpackChunkzell_chaos=self.webpackChunkzell_chaos||[]).push([[2744],{78222:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var n=s(85893),r=s(11151);const i={layout:"posts",title:"Experiment with Camunda Cloud",date:new Date("2020-08-20T00:00:00.000Z"),categories:["chaos_experiment","cloud"],authors:"zell"},d="Chaos Day Summary",a={permalink:"/zeebe-chaos/2020/08/20/experiment-with-camunda-cloud",editUrl:"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2020-08-20-experiment-with-camunda-cloud/index.md",source:"@site/blog/2020-08-20-experiment-with-camunda-cloud/index.md",title:"Experiment with Camunda Cloud",description:"In order to make our chaos experiments more realistic we have setup a new gke cluster, which is similar to the Camunda Cloud gke cluster.",date:"2020-08-20T00:00:00.000Z",formattedDate:"August 20, 2020",tags:[],readingTime:3.875,hasTruncateMarker:!0,authors:[{name:"Christopher Zell",title:"Chaos Engineer @ Zeebe",url:"https://github.com/zelldon",imageURL:"https://github.com/zelldon.png",key:"zell"}],frontMatter:{layout:"posts",title:"Experiment with Camunda Cloud",date:"2020-08-20T00:00:00.000Z",categories:["chaos_experiment","cloud"],authors:"zell"},unlisted:!1,prevItem:{title:"Play around with ToxiProxy",permalink:"/zeebe-chaos/2020/10/06/toxi-proxy"},nextItem:{title:"Experiment with Low Load",permalink:"/zeebe-chaos/2020/08/06/low-load"}},c={authorsImageUrls:[void 0]},h=[{value:"Configurations of Zeebe Clusters",id:"configurations-of-zeebe-clusters",level:2},{value:"Benchmarks",id:"benchmarks",level:2},{value:"Throughput",id:"throughput",level:3},{value:"Latency",id:"latency",level:3},{value:"Other Observations",id:"other-observations",level:3},{value:"Running automated Chaos experiments",id:"running-automated-chaos-experiments",level:2},{value:"Participants",id:"participants",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"In order to make our chaos experiments more realistic we have setup a new gke cluster, which is similar to the Camunda Cloud gke cluster.\nIt allows us to test and experiment with Zeebe clusters which have the same configuration as Zeebe clusters in the Camunda cloud."}),"\n",(0,n.jsx)(t.p,{children:"As part of the chaos day I run the same benchmark we normally run in our gke with our configuration against the Camunda Cloud Zeebe clusters."}),"\n",(0,n.jsx)(t.h2,{id:"configurations-of-zeebe-clusters",children:"Configurations of Zeebe Clusters"}),"\n",(0,n.jsx)(t.p,{children:"In the following table I want to highlight the different configurations of the different Zeebe Clusters (cluster types)."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Our Default"}),(0,n.jsx)(t.th,{children:"Prod S"}),(0,n.jsx)(t.th,{children:"Prod M"}),(0,n.jsx)(t.th,{children:"Prod L"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Partitions"}),(0,n.jsx)(t.td,{children:"3"}),(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"4"}),(0,n.jsx)(t.td,{children:"8"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Nodes"}),(0,n.jsx)(t.td,{children:"3"}),(0,n.jsx)(t.td,{children:"3"}),(0,n.jsx)(t.td,{children:"3"}),(0,n.jsx)(t.td,{children:"6"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Replication"}),(0,n.jsx)(t.td,{children:"3"}),(0,n.jsx)(t.td,{children:"3"}),(0,n.jsx)(t.td,{children:"3"}),(0,n.jsx)(t.td,{children:"3"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SnapshotPeriod"}),(0,n.jsx)(t.td,{children:"15"}),(0,n.jsx)(t.td,{children:"5"}),(0,n.jsx)(t.td,{children:"5"}),(0,n.jsx)(t.td,{children:"5"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"CPU_THREADS"}),(0,n.jsx)(t.td,{children:"4"}),(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"4"}),(0,n.jsx)(t.td,{children:"4"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"IO_THREADS"}),(0,n.jsx)(t.td,{children:"4"}),(0,n.jsx)(t.td,{children:"2"}),(0,n.jsx)(t.td,{children:"4"}),(0,n.jsx)(t.td,{children:"4"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"CPU LIMIT"}),(0,n.jsx)(t.td,{children:"5"}),(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"4"}),(0,n.jsx)(t.td,{children:"4"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"CPU REQUEST"}),(0,n.jsx)(t.td,{children:"5"}),(0,n.jsx)(t.td,{children:"200m"}),(0,n.jsx)(t.td,{children:"200m"}),(0,n.jsx)(t.td,{children:"200m"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"RAM LIMIT"}),(0,n.jsx)(t.td,{children:"12Gi"}),(0,n.jsx)(t.td,{children:"2Gi"}),(0,n.jsx)(t.td,{children:"8Gi"}),(0,n.jsx)(t.td,{children:"8Gi"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"RAM REQUEST"}),(0,n.jsx)(t.td,{children:"12Gi"}),(0,n.jsx)(t.td,{children:"250Mi"}),(0,n.jsx)(t.td,{children:"250Mi"}),(0,n.jsx)(t.td,{children:"250Mi"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Gateway"}),(0,n.jsx)(t.td,{children:"Standalone"}),(0,n.jsx)(t.td,{children:"Embedded"}),(0,n.jsx)(t.td,{children:"Embedded"}),(0,n.jsx)(t.td,{children:"Embedded"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"benchmarks",children:"Benchmarks"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Our Default"}),(0,n.jsx)(t.th,{children:"Prod S"}),(0,n.jsx)(t.th,{children:"Prod M"}),(0,n.jsx)(t.th,{children:"Prod L"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"General"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.img,{alt:"base",src:s(40128).Z+"",width:"1846",height:"922"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.img,{alt:"prods",src:s(79850).Z+"",width:"1850",height:"638"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.img,{alt:"prods",src:s(85543).Z+"",width:"1839",height:"679"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.img,{alt:"prods",src:s(15985).Z+"",width:"1835",height:"903"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Resources"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.img,{alt:"base",src:s(93502).Z+"",width:"1826",height:"634"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.img,{alt:"prods",src:s(97770).Z+"",width:"1838",height:"679"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.img,{alt:"prods",src:s(46335).Z+"",width:"1835",height:"672"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.img,{alt:"prods",src:s(20145).Z+"",width:"1838",height:"668"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Disk usage"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.img,{alt:"prods",src:s(88148).Z+"",width:"1843",height:"276"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.img,{alt:"prods",src:s(1370).Z+"",width:"1830",height:"277"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.img,{alt:"prods",src:s(63687).Z+"",width:"1834",height:"283"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Latency"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.img,{alt:"base",src:s(69818).Z+"",width:"1853",height:"911"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.img,{alt:"prods",src:s(39523).Z+"",width:"1842",height:"862"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.img,{alt:"prods",src:s(9392).Z+"",width:"1834",height:"852"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.img,{alt:"prods",src:s(34384).Z+"",width:"1829",height:"910"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Working"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.img,{alt:"base",src:s(40128).Z+"",width:"1846",height:"922"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.img,{alt:"prods",src:s(14558).Z+"",width:"1838",height:"681"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.img,{alt:"prods",src:s(87706).Z+"",width:"1839",height:"683"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.img,{alt:"prods",src:s(75327).Z+"",width:"1849",height:"689"})})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["In general we can see that the clusters haven't survived long. This is also visible in our Camunda Cloud status page.\n",(0,n.jsx)(t.img,{alt:"status",src:s(68660).Z+"",width:"1397",height:"523"})]}),"\n",(0,n.jsxs)(t.p,{children:["I think it is kind of related with the preemtable nodes, high load, long restarts and that pods are restarted after 15 minutes, when there are not getting ready.\nOne of the reasons why restarting takes so long is fixed now with ",(0,n.jsx)(t.a,{href:"https://github.com/zeebe-io/zeebe/pull/5189",children:"#5189"})," so I hope that this gets better. But currently it is an issue, since you start replicating a snapshot and reprocess on start up. If this takes longer then 15 min the pod will be restarted because of this configuration: ",(0,n.jsx)(t.code,{children:"Liveness:   http-get http://:9600/ready delay=900s timeout=1s period=15s #success=1 #failure=3"})," after restarting the pod you haven't gained any value you just need to start again the complete procedure. In k8 we can see a high restart count of the pods."]}),"\n",(0,n.jsx)(t.p,{children:"Interesting is if we take a look at the working part of Prod S then we clearly see how often actually a pod is preemted or leader change happens."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"prod-s",src:s(14558).Z+"",width:"1838",height:"681"})}),"\n",(0,n.jsx)(t.p,{children:"It is a known issue that currently the nodes are preemted quite often in Camunda Cloud and they working on a solution to it."}),"\n",(0,n.jsx)(t.h3,{id:"throughput",children:"Throughput"}),"\n",(0,n.jsx)(t.p,{children:"If we take a look at the Working part we can see that we scale based on the partition count (or prod cluster sizes) in Camunda Cloud. For Prod S we reach in avg ~24 workflow instance creation/completions per second. For Prod M we reach in avg ~46 workflow instance creation/completions per second. For Prod L we reach in avg ~99 workflow instance creations and completions. To be fair I run the benchmark on these cluster sizes only with three workers, which have 8 threads an activation count of 120 and they completing an job after 150 ms delay, and an starter which starts 100 workflow instances per second. Normally we use in our benchmarks 12 workers and start 300 workflow instances per second. I tried that with the Prod L cluster, but this failed quite fast after increasing the load. Here we probably need to investigate further. If we take a look at our cluster setup then we reach in avg ~147 workflow instance creations/completions per second."}),"\n",(0,n.jsx)(t.h3,{id:"latency",children:"Latency"}),"\n",(0,n.jsx)(t.p,{children:"If take a look at the latency we can see that in Prod M cluster the latency seems to be a bit problematic, where in Prod S and L it seems similar. In our default cluster we get the best latency. Might be worth to take a look as well."}),"\n",(0,n.jsx)(t.h3,{id:"other-observations",children:"Other Observations"}),"\n",(0,n.jsx)(t.p,{children:"During the benchmark observations I saw that some metrics are missing."}),"\n",(0,n.jsx)(t.p,{children:"For example the Gateway metrics are not shown:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"gw",src:s(7840).Z+"",width:"1821",height:"671"})}),"\n",(0,n.jsx)(t.p,{children:"Furthermore I saw that all container related and pvc related metrics are missing. I was not able to check the IO metrics nor the CPU metrics and other."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"io",src:s(52970).Z+"",width:"1833",height:"682"})}),"\n",(0,n.jsxs)(t.p,{children:["If we want to run more tests and chaos experiments we need to fix these missing metrics before. Opened a new issue for it ",(0,n.jsx)(t.a,{href:"https://github.com/camunda-cloud/monitoring/issues/242",children:"#242"})]}),"\n",(0,n.jsx)(t.h2,{id:"running-automated-chaos-experiments",children:"Running automated Chaos experiments"}),"\n",(0,n.jsx)(t.p,{children:"In order to run automated chaos experiments in our new gke. I had to create a new serviceaccount and rolebindings, such that our Jenkins can access the new Kubernetes cluster and our experiments can delete and create new resources."}),"\n",(0,n.jsx)(t.h2,{id:"participants",children:"Participants"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"@zelldon"}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},69818:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/base-latency-b3584d4828338cc30cd0f98d4e5364b2.png"},93502:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/base-res-6c4945e3aa2f2f1a1b4b45b0196ad365.png"},40128:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/base-73443f959dc96d682767e07346c354b3.png"},7840:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/missing-gw-metrics-8a3189d807658f5c0a1b4c0fd4fdfd72.png"},52970:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/missing-io-bcbcfa26798cbc4d03b1ae9cbc0983d0.png"},63687:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/prod-l-disk-11ab26036642262b3c3d1bd47b3dfa48.png"},15985:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/prod-l-general-7fec281ff6544c737c11c77ae6fa092c.png"},34384:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/prod-l-latency-e73d60cffd48e34d391fdaae755d36c1.png"},20145:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/prod-l-res-eb60dc64e81a2073b7b541367303b2db.png"},75327:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/prod-l-working-8888402c802b3a2200214226c12f9f43.png"},1370:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/prod-m-disk-9d098bd49e1df8c956d53734500382d0.png"},85543:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/prod-m-general-5f960be92707983d4c2125897f2e2bfd.png"},9392:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/prod-m-latency-0acc9fe1f8065a925d6219e539134d0f.png"},46335:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/prod-m-res-761847f9331f508da2fb49a24b4bcb0f.png"},87706:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/prod-m-working-9634d13df175c735233358b629115470.png"},88148:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/prod-s-disk-59ab7c9655bb2a694991d15312831415.png"},79850:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/prod-s-general-cb2523b958125e7fa9b10c7c12b77d73.png"},39523:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/prod-s-latency-e5f8673c8e3f2224087e77ccf7accdf9.png"},97770:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/prod-s-res-e834f5c4d95bffb7c93f080202bc025a.png"},14558:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/prod-s-working-3ca710d13ef5785cdd18a73c333e4a47.png"},68660:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/status-cbabee80ac866c2fed379253c9dc31d7.png"},11151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>d});var n=s(67294);const r={},i=n.createContext(r);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);