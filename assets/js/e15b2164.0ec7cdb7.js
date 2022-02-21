"use strict";(self.webpackChunkzell_chaos=self.webpackChunkzell_chaos||[]).push([[1833],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9694:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],i={layout:"posts",title:"Extract K8 resources from namespace",date:new Date("2020-07-02T00:00:00.000Z"),categories:["kubernetes"],authors:"zell"},c="Chaos Day Summary:",l={permalink:"/zeebe-chaos/2020/07/02/extract-k8-resources",editUrl:"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2020-07-02-extract-k8-resources/index.md",source:"@site/blog/2020-07-02-extract-k8-resources/index.md",title:"Extract K8 resources from namespace",description:"* Research: Read about DiRT (Disaster Recovery Tests) @ google - gave me same new ideas for more game days",date:"2020-07-02T00:00:00.000Z",formattedDate:"July 2, 2020",tags:[],readingTime:1.02,truncated:!0,authors:[{name:"Christopher Zell",title:"Chaos Engineer @ Zeebe",url:"https://github.com/zelldon",imageURL:"https://github.com/zelldon.png",key:"zell"}],prevItem:{title:"Experiment with Timers and Huge Variables",permalink:"/zeebe-chaos/2020/07/09/timer-and-huge-variables"},nextItem:{title:"Gateway Network Partition",permalink:"/zeebe-chaos/2020/06/25/gateway-network-partition"}},u={authorsImageUrls:[void 0]},p=[],m={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Research: Read about DiRT (Disaster Recovery Tests) @ google - gave me same new ideas for more game days"),(0,a.kt)("li",{parentName:"ul"},"Failure documentation about Log Appender")),(0,a.kt)("p",null,"Unfortunately I had no time today for new chaos experiment, but I spent with @pihme some time to investigate how we can run the cluster plans in our gke.\nWe did a bit of progress. I'm finally able to create cluster plans in the ultratest and can extract all resource definitions via command line."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pvc,configmap,service,deployment,statefulset,cronjob,storageclasses -o yaml --export | sed -e '/resourceVersion: \"[0-9]\\+\"/d' -e '/uid: [a-z0-9-]\\+/d' -e '/selfLink: [a-z0-9A-Z/]\\+/d' -e '/status:/d' -e '/phase:/d' -e '/creationTimestamp:/d' > s-cluster.yaml\n")),(0,a.kt)("p",null,"We now need to find a way to successfully deploy it in our cluster - it haven't been successful yet. We thought about using kustomize to adjust some values they use.\nMuch easier would be to just deploy the operator they use in our gke cloud and use the CRD to deploy the cluster plans. I think we need to investigate a bit more here what is the best approach. In the end I would like to run our chaos experiments against clusters which correspond to the real deployed ones."))}d.isMDXComponent=!0}}]);