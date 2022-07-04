"use strict";(self.webpackChunkzell_chaos=self.webpackChunkzell_chaos||[]).push([[438],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(a),u=r,g=h["".concat(i,".").concat(u)]||h[u]||d[u]||s;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6821:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const s={layout:"posts",title:"Recovery (Fail Over) time",date:new Date("2021-10-05T00:00:00.000Z"),categories:["chaos_experiment","fail_over"],tags:["availability"],authors:"zell"},o="Chaos Day Summary",l={permalink:"/zeebe-chaos/2021/10/05/recovery-time",editUrl:"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2021-10-05-recovery-time/index.md",source:"@site/blog/2021-10-05-recovery-time/index.md",title:"Recovery (Fail Over) time",description:'In the last quarter we worked on a new "feature" which is called "building state on followers". In short,',date:"2021-10-05T00:00:00.000Z",formattedDate:"October 5, 2021",tags:[{label:"availability",permalink:"/zeebe-chaos/tags/availability"}],readingTime:4.895,truncated:!0,authors:[{name:"Christopher Zell",title:"Chaos Engineer @ Zeebe",url:"https://github.com/zelldon",imageURL:"https://github.com/zelldon.png",key:"zell"}],prevItem:{title:"Throughput on big state",permalink:"/zeebe-chaos/2021/10/29/Throughput-on-big-state"},nextItem:{title:"Old-Clients",permalink:"/zeebe-chaos/2021/09/23/Old-Clients"}},i={authorsImageUrls:[void 0]},c=[{value:"First Chaos Experiment",id:"first-chaos-experiment",children:[{value:"Expected",id:"expected",children:[]},{value:"Actual",id:"actual",children:[]}]},{value:"Second Chaos Experiment",id:"second-chaos-experiment",children:[{value:"Expected",id:"expected-1",children:[]},{value:"Actual",id:"actual-1",children:[]}]},{value:"Running Instances",id:"running-instances",children:[]},{value:"Performance",id:"performance",children:[]}],p={toc:c};function d(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'In the last quarter we worked on a new "feature" which is called "building state on followers". In short,\nit means that the followers apply the events to build there state, which makes regular snapshot\nreplication unnecessary and allows faster role transition between Follower-to-Leader. In this chaos\nday I wanted to experiment a bit with this property, we already did some benchmarks ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/camunda-cloud/zeebe/issues/7515"},"here"),".\nToday, I want to see how it behaves with larger state (bigger snapshots), since this needed to be\ncopied in previous versions of Zeebe, and the broker had to replay more than with the newest version."),(0,r.kt)("p",null,"If you want to now more about build state on followers check out the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/enhancements/blob/master/ZEP007-build-state-on-followers.md"},"ZEP")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"TL;DR;")," In our experiment we had almost no downtime, with version 1.2, the new leader was very fast able to pick up the next work (accept new commands). "),(0,r.kt)("h2",{id:"first-chaos-experiment"},"First Chaos Experiment"),(0,r.kt)("p",null,"We will run two benchmarks one with 1.1 version and one with 1.2, to compare the differences between\nthe versions. We will run three brokers, with one partition and replication factor three. "),(0,r.kt)("p",null,"In order to build up state we run the ",(0,r.kt)("inlineCode",{parentName:"p"},"starter")," with a ",(0,r.kt)("inlineCode",{parentName:"p"},"durationLimit"),", example cfg:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"            value: >-\n              -Dapp.brokerUrl=zell-chaos-12-zeebe-gateway:26500\n              -Dapp.starter.rate=100\n              -Dapp.starter.durationLimit=1000\n              -Dzeebe.client.requestTimeout=62000\n              -XX:+HeapDumpOnOutOfMemoryError\n")),(0,r.kt)("p",null,'This means that we run a rate of 100 PI/s creations over 1000 seconds. We expect at the end around\n100.000 PI, which should be enough to simulate a "big state". '),(0,r.kt)("p",null,"After executing the starters we can see in the metrics the running instances:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"instances",src:a(8709).Z})),(0,r.kt)("p",null,"And that the snapshot is around 600 to 700 MB."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snapshot",src:a(8629).Z})),(0,r.kt)("h3",{id:"expected"},"Expected"),(0,r.kt)("p",null,"We expect that if we restart the current leader that a new leader is fast (under seconds) able to\ntake over and continues the work. The version 1.2 should perform here much better than 1.1."),(0,r.kt)("h3",{id:"actual"},"Actual"),(0,r.kt)("p",null,"Just normal bootstrap takes some time, on version 1.1:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"base-start-up",src:a(6799).Z})),(0,r.kt)("p",null,"For version 1.2:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"12-start-up",src:a(6310).Z})),(0,r.kt)("p",null,"After running the starters for a certain duration and restarting the leader we can see that\nthe processor recovery takes by ",(0,r.kt)("em",{parentName:"p"},"factor 10")," longer on version 1.1. Unfortunately, we have not the\nleader transition metric in that version to compare against."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Version")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"1.1")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"1.2")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Recovery"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{target:"_blank",href:a(7841).Z},(0,r.kt)("img",{alt:"base-recovery",src:a(3171).Z}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{target:"_blank",href:a(3861).Z},(0,r.kt)("img",{alt:"12-recovery",src:a(9597).Z})))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"General"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{target:"_blank",href:a(6152).Z},(0,r.kt)("img",{alt:"base-recovery-general",src:a(4499).Z}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{target:"_blank",href:a(6518).Z},(0,r.kt)("img",{alt:"12-recovery-general",src:a(8523).Z})))))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Sorry for the small pictures")),(0,r.kt)("p",null,'In general what we have seen is that it is not so easy to compare if there is no longer load on the\nsystem, which is the reason I did a second experiment with: A) "big state" and B) steady load.'),(0,r.kt)("h2",{id:"second-chaos-experiment"},"Second Chaos Experiment"),(0,r.kt)("p",null,'Similar setup to the first experiment, but additionally after the "big state" is reached a steady\nload is put on the system. One starter with a rate of 100 PI/s and one worker completing some jobs.'),(0,r.kt)("p",null,"With that setup we want to verify how it affects the system if now a leader change happens."),(0,r.kt)("h3",{id:"expected-1"},"Expected"),(0,r.kt)("p",null,"Similar to above expect that if we restart the current leader that a new leader is fast\n(under seconds) able to take over and continues the work. The version 1.2 should perform here much\nbetter than 1.1."),(0,r.kt)("h3",{id:"actual-1"},"Actual"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Version")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"1.1")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"1.2")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Recovery"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{target:"_blank",href:a(5528).Z},(0,r.kt)("img",{alt:"base-general-state-and-throughput-recover-time.png",src:a(6773).Z}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{target:"_blank",href:a(432).Z},(0,r.kt)("img",{alt:"12-general-state-and-throughput-recover-time.png",src:a(7042).Z})))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"General"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{target:"_blank",href:a(3766).Z},(0,r.kt)("img",{alt:"base-general-state-and-throughput-recover-general.png",src:a(6148).Z}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{target:"_blank",href:a(4609).Z},(0,r.kt)("img",{alt:"12-general-state-and-throughput-recover-general.png",src:a(9692).Z})))))),(0,r.kt)("p",null,"After running the experiment again, this time with load, we can see that the version 1.1 took almost\n2 minutes! The newest Zeebe version (1.2), with building state on followers, took ~80 milliseconds!"),(0,r.kt)("p",null,"We can see this much better also in the processing and throughput metrics on version 1.1 we have ~2\nminutes gap."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"base-general-state-and-throughput-recover-general-zoom.png",src:a(9361).Z})),(0,r.kt)("p",null,"The exporters can recover a bit faster than the processing, but we are for a while not able to accept\nany commands."),(0,r.kt)("p",null,"In version 1.2 on the other hand we are able to almost immediately continue with the processing, some\nmetrics are not even able to show a gap in between, like the current events."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"12-general-state-and-throughput-recover-general-zoom.png",src:a(8806).Z})),(0,r.kt)("h1",{id:"result"},"Result"),(0,r.kt)("p",null,"In general, we were able to show that the new approach of building state on followers, gives us an\nexcellent benefit in transitioning between Follower and Leader. Furthermore, it allows us to handle\nmuch larger state, since this doesn't need to be replicated on a regular basis."),(0,r.kt)("h1",{id:"found-bugs"},"Found Bugs"),(0,r.kt)("h2",{id:"running-instances"},"Running Instances"),(0,r.kt)("p",null,"When experimenting with the clusters, building the state and deploying the steady load I\naccidentally deployed to many workers. This caused to complete all existing running instances. The\nissues here is that on the new leader the metric is zero, which results in a negative metric. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"broken-metric",src:a(8785).Z})),(0,r.kt)("p",null,"More problematic is actually that if you than build state again, you might reach the zero and if you\nobserve the cluster you can't be sure what the actual count of instances are. This makes the metric\nkind of useless."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"broken-metric",src:a(6438).Z})),(0,r.kt)("h2",{id:"performance"},"Performance"),(0,r.kt)("p",null,"During the experimenting it looked like that the performance of 1.2 degraded compared to 1.1. At the\nend I had on each benchmark one starter with 100 PI/s and one worker with capacity 12."),(0,r.kt)("p",null,"With version 1.1 it looked like we reached ~100 PI/s created/completed\n",(0,r.kt)("img",{alt:"base-general-state-and-throughput-recovery-general-perf.png",src:a(4691).Z})),(0,r.kt)("p",null,"With version 1.2 we just reached ~30, which means it reduced by factor 3.\n",(0,r.kt)("img",{alt:"12-general-state-and-throughput-recovery-general-perf.png",src:a(2446).Z})),(0,r.kt)("p",null,"I think we need to verify whether this is really the case."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Update:")),(0,r.kt)("p",null,"I run again a benchmark for both versions, with one worker and one starter. It showed no significant\ndifference on throughput."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Version")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"1.1")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"1.2")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Performance"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{target:"_blank",href:a(1842).Z},(0,r.kt)("img",{alt:"perf-11",src:a(2806).Z}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{target:"_blank",href:a(8053).Z},(0,r.kt)("img",{alt:"perf-12",src:a(8654).Z})))))),(0,r.kt)("p",null,"My current assumption is that it was related to the previous build up state and switching between\ndifferent worker configurations etc. Let us see whether we can observe this again."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Update 2:")),(0,r.kt)("p",null,"The second benchmark failed several days again, without any intervention. I investigated that issue further and it seem to be related to frequent install requests, which are sent by the leader. See for more information the related issue ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/camunda-cloud/zeebe/issues/7955"},"https://github.com/camunda-cloud/zeebe/issues/7955")))}d.isMDXComponent=!0},4609:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/12-general-state-and-throughput-recovery-general-803fd268a252c919fb75fd5a0368a6a7.png"},432:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/12-general-state-and-throughput-recovery-time-25934f696f3d76a60017fd5c85dda9ea.png"},6518:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/12-recovery-general-fa5b6920c1d994b36be40ee7130c86b0.png"},3861:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/12-recovery-fadf67de59709ef23de1048730aa1fa6.png"},3766:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/base-general-state-and-throughput-recover-general-494ebfac74f239ed6ab1e40c424e6719.png"},5528:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/base-general-state-and-throughput-recover-time-b9c20296a6c02ab22b64a90c8e5b0f3a.png"},6152:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/base-recovery-general-71b7de7df76b17ee89efd539b6a3b5b3.png"},7841:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/base-recovery-bee7a028446f8d3ee578efdcfb0ce458.png"},1842:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/perf-11-a3343c029716f6f663f5b3d93db133bc.png"},8053:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/perf-12-92bc1dfd1a0442252e1541a3bd41b310.png"},2446:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/12-general-state-and-throughput-recovery-general-perf-2e3b08a10dd42bd106818643de200518.png"},8806:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/12-general-state-and-throughput-recovery-general-zoom-cbb1fd991e637f0f84eded0bcb33ba3f.png"},9692:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/12-general-state-and-throughput-recovery-general-803fd268a252c919fb75fd5a0368a6a7.png"},7042:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/12-general-state-and-throughput-recovery-time-25934f696f3d76a60017fd5c85dda9ea.png"},8523:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/12-recovery-general-fa5b6920c1d994b36be40ee7130c86b0.png"},9597:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/12-recovery-fadf67de59709ef23de1048730aa1fa6.png"},6310:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/12-start-up-04e2050bd718b765993f07dc097b7678.png"},9361:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/base-general-state-and-throughput-recover-general-zoom-346e51e9a7d1c8fd37a995dcf13ec030.png"},6148:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/base-general-state-and-throughput-recover-general-494ebfac74f239ed6ab1e40c424e6719.png"},6773:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/base-general-state-and-throughput-recover-time-b9c20296a6c02ab22b64a90c8e5b0f3a.png"},4691:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/base-general-state-and-throughput-recovery-general-perf-cfb3b2c8bfa21e6c6499cda6b58d19f0.png"},4499:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/base-recovery-general-71b7de7df76b17ee89efd539b6a3b5b3.png"},3171:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/base-recovery-bee7a028446f8d3ee578efdcfb0ce458.png"},6799:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/base-start-up-990e2a69500f27068362d59e86bedbdc.png"},6438:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/broken-metric-zero-5d8e95304f288e82921bf536402882d5.png"},8785:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/broken-metric-11b08dba5d36a8392efda2c2ebe5580d.png"},8709:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/instances-8b991c2d040baa3627ded5a001ef43d1.png"},2806:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/perf-11-a3343c029716f6f663f5b3d93db133bc.png"},8654:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/perf-12-92bc1dfd1a0442252e1541a3bd41b310.png"},8629:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/snapshot-73e2affb2bb52e3c38343994b6b7bf7f.png"}}]);