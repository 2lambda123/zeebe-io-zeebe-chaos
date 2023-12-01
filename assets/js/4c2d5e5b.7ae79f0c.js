"use strict";(self.webpackChunkzell_chaos=self.webpackChunkzell_chaos||[]).push([[5041],{92599:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>h});var a=o(85893),n=o(11151);const s={layout:"posts",title:"Recovery (Fail Over) time",date:new Date("2021-10-05T00:00:00.000Z"),categories:["chaos_experiment","fail_over"],tags:["availability"],authors:"zell"},r="Chaos Day Summary",i={permalink:"/zeebe-chaos/2021/10/05/recovery-time",editUrl:"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2021-10-05-recovery-time/index.md",source:"@site/blog/2021-10-05-recovery-time/index.md",title:"Recovery (Fail Over) time",description:'In the last quarter we worked on a new "feature" which is called "building state on followers". In short,',date:"2021-10-05T00:00:00.000Z",formattedDate:"October 5, 2021",tags:[{label:"availability",permalink:"/zeebe-chaos/tags/availability"}],readingTime:4.895,hasTruncateMarker:!0,authors:[{name:"Christopher Zell",title:"Chaos Engineer @ Zeebe",url:"https://github.com/zelldon",imageURL:"https://github.com/zelldon.png",key:"zell"}],frontMatter:{layout:"posts",title:"Recovery (Fail Over) time",date:"2021-10-05T00:00:00.000Z",categories:["chaos_experiment","fail_over"],tags:["availability"],authors:"zell"},unlisted:!1,prevItem:{title:"Throughput on big state",permalink:"/zeebe-chaos/2021/10/29/Throughput-on-big-state"},nextItem:{title:"Old-Clients",permalink:"/zeebe-chaos/2021/09/23/Old-Clients"}},l={authorsImageUrls:[void 0]},h=[];function c(e){const t={a:"a",p:"p",strong:"strong",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:['In the last quarter we worked on a new "feature" which is called "building state on followers". In short,\nit means that the followers apply the events to build there state, which makes regular snapshot\nreplication unnecessary and allows faster role transition between Follower-to-Leader. In this chaos\nday I wanted to experiment a bit with this property, we already did some benchmarks ',(0,a.jsx)(t.a,{href:"https://github.com/camunda-cloud/zeebe/issues/7515",children:"here"}),".\nToday, I want to see how it behaves with larger state (bigger snapshots), since this needed to be\ncopied in previous versions of Zeebe, and the broker had to replay more than with the newest version."]}),"\n",(0,a.jsxs)(t.p,{children:["If you want to now more about build state on followers check out the ",(0,a.jsx)(t.a,{href:"https://github.com/zeebe-io/enhancements/blob/master/ZEP007-build-state-on-followers.md",children:"ZEP"})]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"TL;DR;"})," In our experiment we had almost no downtime, with version 1.2, the new leader was very fast able to pick up the next work (accept new commands)."]})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>i,a:()=>r});var a=o(67294);const n={},s=a.createContext(n);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);