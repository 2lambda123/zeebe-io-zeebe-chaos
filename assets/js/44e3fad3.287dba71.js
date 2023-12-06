"use strict";(self.webpackChunkzell_chaos=self.webpackChunkzell_chaos||[]).push([[1501],{53877:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(85893),r=a(11151);const s={layout:"posts",title:"Correlate Message after failover",date:new Date("2020-06-18T00:00:00.000Z"),categories:["chaos_experiment","bpmn"],authors:"zell"},o="Chaos day Summary:",i={permalink:"/zeebe-chaos/2020/06/18/correlate-message-after-failover",editUrl:"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2020-06-18-correlate-message-after-failover/index.md",source:"@site/blog/2020-06-18-correlate-message-after-failover/index.md",title:"Correlate Message after failover",description:"* Documented failure cases for engine and stream processor. I think almost all possible failure cases I can think of we already handle, except problems on reading, which I think can't be handled.",date:"2020-06-18T00:00:00.000Z",formattedDate:"June 18, 2020",tags:[],readingTime:.91,hasTruncateMarker:!0,authors:[{name:"Christopher Kujawa",title:"Chaos Engineer @ Zeebe",url:"https://github.com/zelldon",imageURL:"https://github.com/zelldon.png",key:"zell"}],frontMatter:{layout:"posts",title:"Correlate Message after failover",date:"2020-06-18T00:00:00.000Z",categories:["chaos_experiment","bpmn"],authors:"zell"},unlisted:!1,prevItem:{title:"Gateway Network Partition",permalink:"/zeebe-chaos/2020/06/25/gateway-network-partition"},nextItem:{title:"High CPU load on Standalone Gateway",permalink:"/zeebe-chaos/2020/06/11/high-cpu-gateway"}},l={authorsImageUrls:[void 0]},c=[{value:"Chaos Experiment",id:"chaos-experiment",level:2}];function h(e){const t={a:"a",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Documented failure cases for engine and stream processor. I think almost all possible failure cases I can think of we already handle, except problems on reading, which I think can't be handled."}),"\n",(0,n.jsxs)(t.li,{children:["Checked what the current issue is with the automated chaos experiments. It seems it is a infra problem. You can check the discussion in #infra. It might be affected due to ",(0,n.jsx)(t.a,{href:"https://jira.camunda.com/browse/INFRA-1292",children:"Infra-1292"})]}),"\n",(0,n.jsx)(t.li,{children:"Run a chaos experiment, where we correlate a message after fail over."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"chaos-experiment",children:"Chaos Experiment"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Start our normal setup and deploy a workflow with an intermediate message catch event."}),"\n",(0,n.jsx)(t.li,{children:"Publish a message and kill a random broker."}),"\n",(0,n.jsx)(t.li,{children:"Create a workflow instance and await the result."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["I did this experiment several times and it works without any problems, as far as I can tell. First I was wondering that the message was only correlated to one instance, but this seems to be expected ",(0,n.jsx)(t.a,{href:"https://docs.zeebe.io/reference/message-correlation/message-correlation.html#message-cardinality",children:"message-correlation.html#message-cardinality"})," So learned something new today about our messages ","\ud83d\ude01","."]}),"\n",(0,n.jsx)(t.p,{children:"I prepared already an automatable chaos experiment for that. Have to fine tune it a bit."}),"\n",(0,n.jsx)(t.p,{children:"No pictures today."})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>o});var n=a(67294);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);