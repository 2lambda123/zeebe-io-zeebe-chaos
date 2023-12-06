"use strict";(self.webpackChunkzell_chaos=self.webpackChunkzell_chaos||[]).push([[1961],{10865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=n(85893),i=n(11151);const o={layout:"posts",title:"Bring Deployment distribution experiment back",date:new Date("2022-08-02T00:00:00.000Z"),categories:["chaos_experiment","bpmn","deployment"],tags:["availability"],authors:"zell"},s="Chaos Day Summary",r={permalink:"/zeebe-chaos/2022/08/02/deployment-distribution",editUrl:"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2022-08-02-deployment-distribution/index.md",source:"@site/blog/2022-08-02-deployment-distribution/index.md",title:"Bring Deployment distribution experiment back",description:"We encountered recently a severe bug zeebe#9877 and I was wondering why we haven't spotted it earlier, since we have chaos experiments for it. I realized two things:",date:"2022-08-02T00:00:00.000Z",formattedDate:"August 2, 2022",tags:[{label:"availability",permalink:"/zeebe-chaos/tags/availability"}],readingTime:9.62,hasTruncateMarker:!0,authors:[{name:"Christopher Kujawa",title:"Chaos Engineer @ Zeebe",url:"https://github.com/zelldon",imageURL:"https://github.com/zelldon.png",key:"zell"}],frontMatter:{layout:"posts",title:"Bring Deployment distribution experiment back",date:"2022-08-02T00:00:00.000Z",categories:["chaos_experiment","bpmn","deployment"],tags:["availability"],authors:"zell"},unlisted:!1,prevItem:{title:"Message Correlation after Network Partition",permalink:"/zeebe-chaos/2022/08/31/Message-Correlation-after-Network-Partition"},nextItem:{title:"Standalone Gateway in CCSaaS",permalink:"/zeebe-chaos/2022/02/15/Standalone-Gateway-in-CCSaaS"}},l={authorsImageUrls:[void 0]},c=[];function h(e){const t={a:"a",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["We encountered recently a severe bug ",(0,a.jsx)(t.a,{href:"https://github.com/camunda/zeebe/issues/9877",children:"zeebe#9877"})," and I was wondering why we haven't spotted it earlier, since we have chaos experiments for it. I realized two things:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"The experiments only check for parts of it (BPMN resource only). The production code has changed, and a new feature has been added (DMN) but the experiments/tests haven't been adjusted."}),"\n",(0,a.jsxs)(t.li,{children:["More importantly we disabled the automated execution of the deployment distribution experiment because it was flaky due to a missing standalone gateway in Camunda Cloud SaaS ",(0,a.jsx)(t.a,{href:"https://github.com/zeebe-io/zeebe-chaos/issues/61",children:"zeebe-io/zeebe-chaos#61"}),". This is no longer the case, see ",(0,a.jsx)(t.a,{href:"/zeebe-chaos/2022/02/15/Standalone-Gateway-in-CCSaaS",children:"Standalone Gateway in CCSaaS"})]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"On this chaos day I want to bring the automation of this chaos experiment back to life. If I have still time I want to enhance the experiment."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"TL;DR;"})," The experiment still worked, and our deployment distribution is still resilient against network partitions. It also works with DMN resources. I can enable the experiment again, and we can close ",(0,a.jsx)(t.a,{href:"https://github.com/zeebe-io/zeebe-chaos/issues/61",children:"zeebe-io/zeebe-chaos#61"}),". Unfortunately, we were not able to reproduce ",(0,a.jsx)(t.a,{href:"https://github.com/camunda/zeebe/issues/9877",children:"zeebe#9877"})," but we did some good preparation work for it."]})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var a=n(67294);const i={},o=a.createContext(i);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);