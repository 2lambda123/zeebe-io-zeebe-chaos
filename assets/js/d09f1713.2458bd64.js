"use strict";(self.webpackChunkzell_chaos=self.webpackChunkzell_chaos||[]).push([[2657],{23016:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=o(85893),a=o(11151);const r={layout:"posts",title:"Disconnect Leader and one Follower",date:new Date("2021-01-07T00:00:00.000Z"),categories:["chaos_experiment","broker","bpmn"],tags:["availability"],authors:"zell"},s="Chaos Day Summary",i={permalink:"/zeebe-chaos/2021/01/07/disconnect-leader-and-follower",editUrl:"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2021-01-07-disconnect-leader-and-follower/index.md",source:"@site/blog/2021-01-07-disconnect-leader-and-follower/index.md",title:"Disconnect Leader and one Follower",description:"Happy new year everyone",date:"2021-01-07T00:00:00.000Z",formattedDate:"January 7, 2021",tags:[{label:"availability",permalink:"/zeebe-chaos/tags/availability"}],readingTime:7.64,hasTruncateMarker:!0,authors:[{name:"Christopher Kujawa",title:"Chaos Engineer @ Zeebe",url:"https://github.com/zelldon",imageURL:"https://github.com/zelldon.png",key:"zell"}],frontMatter:{layout:"posts",title:"Disconnect Leader and one Follower",date:"2021-01-07T00:00:00.000Z",categories:["chaos_experiment","broker","bpmn"],tags:["availability"],authors:"zell"},unlisted:!1,prevItem:{title:"Network partitions",permalink:"/zeebe-chaos/2021/01/19/network-partition"},nextItem:{title:"Message Correlation after Failover",permalink:"/zeebe-chaos/2020/11/24/message-correlation-after-failover"}},l={authorsImageUrls:[void 0]},c=[];function d(e){const t={a:"a",code:"code",p:"p",strong:"strong",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Happy new year everyone ","\ud83c\udf89"]}),"\n",(0,n.jsxs)(t.p,{children:["This time I wanted to verify the following hypothesis ",(0,n.jsx)(t.code,{children:"Disconnecting Leader and one Follower should not make cluster disruptive"})," (",(0,n.jsx)(t.a,{href:"https://github.com/zeebe-io/zeebe-chaos/issues/45",children:"#45"}),").\nBut in order to do that we need to extract the Leader and Follower node for a partition from the Topology. Luckily in December we got an ",(0,n.jsx)(t.a,{href:"https://github.com/zeebe-io/zeebe/pull/5943",children:"external contribution"})," which allows us to print ",(0,n.jsx)(t.code,{children:"zbctl status"})," as json.\nThis gives us now more possibilities, since we can extract values much better out of it."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"TL;DR"})," The experiment was successful ","\ud83d\udc4d"]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>i,a:()=>s});var n=o(67294);const a={},r=n.createContext(a);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);