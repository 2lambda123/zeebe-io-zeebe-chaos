"use strict";(self.webpackChunkzell_chaos=self.webpackChunkzell_chaos||[]).push([[7272],{86823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(85893),i=n(11151);const s={layout:"posts",title:"Gateway Network Partition",date:new Date("2020-06-25T00:00:00.000Z"),categories:["chaos_experiment","gateway"],authors:"zell"},r="Chaos Day Summary",o={permalink:"/zeebe-chaos/2020/06/25/gateway-network-partition",editUrl:"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2020-06-25-gateway-network-partition/index.md",source:"@site/blog/2020-06-25-gateway-network-partition/index.md",title:"Gateway Network Partition",description:"* Documented failure cases for AsyncSnasphortDirector. Gave me some ideas where it might make sense to reinstall partition. Discussed a bit with @Deepthi",date:"2020-06-25T00:00:00.000Z",formattedDate:"June 25, 2020",tags:[],readingTime:2.34,hasTruncateMarker:!0,authors:[{name:"Christopher Kujawa",title:"Chaos Engineer @ Zeebe",url:"https://github.com/zelldon",imageURL:"https://github.com/zelldon.png",key:"zell"}],frontMatter:{layout:"posts",title:"Gateway Network Partition",date:"2020-06-25T00:00:00.000Z",categories:["chaos_experiment","gateway"],authors:"zell"},unlisted:!1,prevItem:{title:"Extract K8 resources from namespace",permalink:"/zeebe-chaos/2020/07/02/extract-k8-resources"},nextItem:{title:"Correlate Message after failover",permalink:"/zeebe-chaos/2020/06/18/correlate-message-after-failover"}},h={authorsImageUrls:[void 0]},c=[{value:"Chaos experiment:",id:"chaos-experiment",level:2},{value:"Expected during the experiment:",id:"expected-during-the-experiment",level:3},{value:"Observations:",id:"observations",level:3},{value:"Participants",id:"participants",level:2}];function l(e){const t={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Documented failure cases for AsyncSnasphortDirector. Gave me some ideas where it might make sense to reinstall partition. Discussed a bit with @Deepthi"}),"\n",(0,a.jsx)(t.li,{children:"Still our automated chaos experiments are not running. I need some time for that, but I had no time for that today."}),"\n",(0,a.jsx)(t.li,{children:"Run a chaos experiment together with @pihme, where we do a network partition with the gateway."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"chaos-experiment",children:"Chaos experiment:"}),"\n",(0,a.jsx)(t.p,{children:"Actually we already have an network partition experiment with the standalone Gateway, where we completely isolate the gateway and take a look whether it comes back after the network partition. Today we wanted to explore how it behaves when only one node and the gateway has a network partition, so Broker 0 and Gateway can't talk to each other."}),"\n",(0,a.jsx)(t.h3,{id:"expected-during-the-experiment",children:"Expected during the experiment:"}),"\n",(0,a.jsx)(t.p,{children:"the topology stays the same, since gateway can ping indirectly (is discussable whether this is ideal or not)\nwhen Broker 0 is leader for a partition then the processing for that partition stops but other partitions should not be affected\nWe can somehow determine in the metrics that they can't connect to each other\nAfter connecting again the affected partition should recover"}),"\n",(0,a.jsx)(t.h3,{id:"observations",children:"Observations:"}),"\n",(0,a.jsxs)(t.p,{children:["As expected we see no difference in the Topology. All commands which are send to that partition time out. Other partitions haven't been affected ","\ud83d\udc4d"," With the metrics we have we seen that: there is no progress in the partition, the partition is still healthy (which makes sense) and we see a lot of timeouts happening."]}),"\n",(0,a.jsx)(t.p,{children:"Unfortunately we need multiple metrics to correlate somehow that it might be due to connectivity issues. I think we can improve here. For example it is not directly visible that one partition stopped processing. For that @Peter Ihme had a good idea and we will add a new panel, which directly shows the current record processing stats. I think this is also useful for exporting to directly see whether we have currently exporting problems. Check the attached image."}),"\n",(0,a.jsx)(t.p,{children:"What else is missing on the metrics side from my point of view:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"a panel which shows me that all requests to a specific partition currently time out."}),"\n",(0,a.jsxs)(t.li,{children:["metrics for the transport between gateway and broker to better analyze problems like that. Would be nice to have ",(0,a.jsx)(t.a,{href:"https://github.com/zeebe-io/zeebe/issues/4487",children:"#4487"})]}),"\n",(0,a.jsx)(t.li,{children:"Liveness and Health stats of the Gateway in the metrics. I think this is currently not supported?"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"After reconnecting the nodes we saw that the related partition started to process again. Interesting was that it seems that there piled some traffic up and after reconnecting we saw a burst against partition one (partition 2 was disconnected), but this caused no issues."}),"\n",(0,a.jsx)(t.p,{children:"I think was good and interesting experiment again and gave us a bit more insights what else we need."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"feedback",src:n(21506).Z+"",width:"1837",height:"890"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"reduce2",src:n(75013).Z+"",width:"1825",height:"667"})}),"\n",(0,a.jsx)(t.h2,{id:"participants",children:"Participants"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"@pihme"}),"\n",(0,a.jsx)(t.li,{children:"@zelldon"}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},21506:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/feedback-b0105cf21496aacb85b4ded1a34e3b9b.png"},75013:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/reduce2-4f08deb101d3ceaee52e4d64b09e8ddb.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var a=n(67294);const i={},s=a.createContext(i);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);