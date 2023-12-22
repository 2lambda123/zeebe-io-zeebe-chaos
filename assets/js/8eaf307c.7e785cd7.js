"use strict";(self.webpackChunkzell_chaos=self.webpackChunkzell_chaos||[]).push([[9520],{17316:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=a(85893),s=a(11151);const o={layout:"posts",title:"Dynamic Scaling with Dataloss",date:new Date("2023-12-19T00:00:00.000Z"),categories:["chaos_experiment","bpmn"],tags:["availability"],authors:"ole"},i="Chaos Day Summary",r={permalink:"/zeebe-chaos/2023/12/19/Dynamic-Scaling-with-Dataloss",editUrl:"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2023-12-19-Dynamic-Scaling-with-Dataloss/index.md",source:"@site/blog/2023-12-19-Dynamic-Scaling-with-Dataloss/index.md",title:"Dynamic Scaling with Dataloss",description:"We continue our previous experiments with dynamically scaling by now also testing whether",date:"2023-12-19T00:00:00.000Z",formattedDate:"December 19, 2023",tags:[{label:"availability",permalink:"/zeebe-chaos/tags/availability"}],readingTime:4.425,hasTruncateMarker:!0,authors:[{name:"Ole Sch\xf6nburg",title:"Senior Software Engineer @ Zeebe",url:"https://github.com/oleschoenburg",imageURL:"https://github.com/oleschoenburg.png",key:"ole"}],frontMatter:{layout:"posts",title:"Dynamic Scaling with Dataloss",date:"2023-12-19T00:00:00.000Z",categories:["chaos_experiment","bpmn"],tags:["availability"],authors:"ole"},unlisted:!1,prevItem:{title:"Broker Scaling and Performance",permalink:"/zeebe-chaos/2023/12/20/Broker-scaling-performance"},nextItem:{title:"Dynamically scaling brokers",permalink:"/zeebe-chaos/2023/12/18/Dynamically-scaling-brokers"}},l={authorsImageUrls:[void 0]},c=[];function h(e){const t={a:"a",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["We continue our ",(0,n.jsx)(t.a,{href:"/zeebe-chaos/2023/12/18/Dynamically-scaling-brokers",children:"previous experiments"})," with dynamically scaling by now also testing whether\nthe cluster survives dataloss during the process."]}),"\n",(0,n.jsx)(t.p,{children:"One goal is to verify that we haven't accidentally introduced a single point of failure in the cluster.\nAnother is to ensure that data loss does not corrupt the cluster topology."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"TL;DR;"}),"\nEven with dataloss, the scaling completes successfully and with the expected results.\nWe found that during scaling, a single broker of the previous cluster configuration can become a single point of failure by preventing a partition from electing a leader.\nThis is not exactly a bug, but something that we want to improve."]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>i});var n=a(67294);const s={},o=n.createContext(s);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);