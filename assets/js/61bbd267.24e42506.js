"use strict";(self.webpackChunkzell_chaos=self.webpackChunkzell_chaos||[]).push([[6133],{52952:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var s=a(85893),n=a(11151);const o={layout:"posts",title:"First Chaos Day!",date:new Date("2020-06-04T00:00:00.000Z"),categories:["chaos_experiment","broker"],authors:"zell"},r="Chaos Day Summary",i={permalink:"/zeebe-chaos/2020/06/04/first-chaos-day",editUrl:"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2020-06-04-first-chaos-day/index.md",source:"@site/blog/2020-06-04-first-chaos-day/index.md",title:"First Chaos Day!",description:"First Chaos day",date:"2020-06-04T00:00:00.000Z",formattedDate:"June 4, 2020",tags:[],readingTime:1.095,hasTruncateMarker:!0,authors:[{name:"Christopher Zell",title:"Chaos Engineer @ Zeebe",url:"https://github.com/zelldon",imageURL:"https://github.com/zelldon.png",key:"zell"}],frontMatter:{layout:"posts",title:"First Chaos Day!",date:"2020-06-04T00:00:00.000Z",categories:["chaos_experiment","broker"],authors:"zell"},unlisted:!1,prevItem:{title:"High CPU load on Standalone Gateway",permalink:"/zeebe-chaos/2020/06/11/high-cpu-gateway"}},l={authorsImageUrls:[void 0]},h=[{value:"Chaos experiment:",id:"chaos-experiment",level:2},{value:"Participants",id:"participants",level:2}];function c(e){const t={a:"a",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["First Chaos day ","\ud83c\udf89"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Documented failure cases for exporter (already some exist, it seemed) gave me a new idea for ZEP"}),"\n",(0,s.jsx)(t.li,{children:"Introduced Peter to our Chaos Repository, discussed a bit about the hypothesis backlog, reopened the Chaos Trello board where we will organize ourselves"}),"\n",(0,s.jsxs)(t.li,{children:["Run a chaos experiment, where we put high CPU load on the Leader ",(0,s.jsx)(t.a,{href:"https://github.com/zeebe-io/zeebe-chaos/issues/6",children:"#6"})]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"chaos-experiment",children:"Chaos experiment:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["We wanted to decrease the blast radius with only one partition, but we found an bug where this seemed not to be possible ",(0,s.jsx)(t.a,{href:"https://github.com/zeebe-io/zeebe/issues/4664",children:"#4664"})]}),"\n",(0,s.jsx)(t.li,{children:"We run the experiment with 2 partitions and put really high CPU load on the Leader (internally in the pod), we expected that this will not impact the complete cluster. That at most we have a leader change because the leader is not able to send heartbeats in time. After removing the cpu load we should be back on our throughput base line, where we start and complete around 70 - 80 workflow instances per second."}),"\n",(0,s.jsx)(t.li,{children:"The results where quite promising we had no leader change at all. The leader was able to send heartbeats in time and the backpressure did a good job and drop more requests. After reducing the cpu load we went back to our steady state."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"img",src:a(32570).Z+"",width:"906",height:"859"})}),"\n",(0,s.jsx)(t.h2,{id:"participants",children:"Participants"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"@pihme"}),"\n",(0,s.jsx)(t.li,{children:"@zelldon"}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},32570:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/result-chaos-e2969de362a91b1b965fe1c02be05202.png"},11151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>r});var s=a(67294);const n={},o=s.createContext(n);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);