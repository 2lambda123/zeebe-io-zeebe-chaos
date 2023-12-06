"use strict";(self.webpackChunkzell_chaos=self.webpackChunkzell_chaos||[]).push([[7071],{41580:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=s(85893),n=s(11151);const o={layout:"posts",title:"Extract K8 resources from namespace",date:new Date("2020-07-02T00:00:00.000Z"),categories:["kubernetes"],authors:"zell"},r="Chaos Day Summary:",i={permalink:"/zeebe-chaos/2020/07/02/extract-k8-resources",editUrl:"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2020-07-02-extract-k8-resources/index.md",source:"@site/blog/2020-07-02-extract-k8-resources/index.md",title:"Extract K8 resources from namespace",description:"* Research: Read about DiRT (Disaster Recovery Tests) @ google - gave me same new ideas for more game days",date:"2020-07-02T00:00:00.000Z",formattedDate:"July 2, 2020",tags:[],readingTime:1.02,hasTruncateMarker:!0,authors:[{name:"Christopher Kujawa",title:"Chaos Engineer @ Zeebe",url:"https://github.com/zelldon",imageURL:"https://github.com/zelldon.png",key:"zell"}],frontMatter:{layout:"posts",title:"Extract K8 resources from namespace",date:"2020-07-02T00:00:00.000Z",categories:["kubernetes"],authors:"zell"},unlisted:!1,prevItem:{title:"Experiment with Timers and Huge Variables",permalink:"/zeebe-chaos/2020/07/09/timer-and-huge-variables"},nextItem:{title:"Gateway Network Partition",permalink:"/zeebe-chaos/2020/06/25/gateway-network-partition"}},l={authorsImageUrls:[void 0]},c=[{value:"Participants",id:"participants",level:2}];function u(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Research: Read about DiRT (Disaster Recovery Tests) @ google - gave me same new ideas for more game days"}),"\n",(0,a.jsx)(t.li,{children:"Failure documentation about Log Appender"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Unfortunately I had no time today for new chaos experiment, but I spent with @pihme some time to investigate how we can run the cluster plans in our gke.\nWe did a bit of progress. I'm finally able to create cluster plans in the ultratest and can extract all resource definitions via command line."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"kubectl get pvc,configmap,service,deployment,statefulset,cronjob,storageclasses -o yaml --export | sed -e '/resourceVersion: \"[0-9]\\+\"/d' -e '/uid: [a-z0-9-]\\+/d' -e '/selfLink: [a-z0-9A-Z/]\\+/d' -e '/status:/d' -e '/phase:/d' -e '/creationTimestamp:/d' > s-cluster.yaml\n"})}),"\n",(0,a.jsx)(t.p,{children:"We now need to find a way to successfully deploy it in our cluster - it haven't been successful yet. We thought about using kustomize to adjust some values they use.\nMuch easier would be to just deploy the operator they use in our gke cloud and use the CRD to deploy the cluster plans. I think we need to investigate a bit more here what is the best approach. In the end I would like to run our chaos experiments against clusters which correspond to the real deployed ones."}),"\n",(0,a.jsx)(t.h2,{id:"participants",children:"Participants"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"@pihme"}),"\n",(0,a.jsx)(t.li,{children:"@zelldon"}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>r});var a=s(67294);const n={},o=a.createContext(n);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);