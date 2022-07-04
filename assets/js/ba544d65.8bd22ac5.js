"use strict";(self.webpackChunkzell_chaos=self.webpackChunkzell_chaos||[]).push([[5048],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),b=o,f=u["".concat(s,".").concat(b)]||u[b]||m[b]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5616:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={layout:"posts",title:"Message Correlation after Failover",date:new Date("2020-11-24T00:00:00.000Z"),categories:["chaos_experiment","broker","bpmn"],tags:["availability"],authors:"zell"},i="Chaos Day Summary",l={permalink:"/zeebe-chaos/2020/11/24/message-correlation-after-failover",editUrl:"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2020-11-24-message-correlation-after-failover/index.md",source:"@site/blog/2020-11-24-message-correlation-after-failover/index.md",title:"Message Correlation after Failover",description:"Today I wanted to finally implement an experiment which I postponed for long time, see #24.",date:"2020-11-24T00:00:00.000Z",formattedDate:"November 24, 2020",tags:[{label:"availability",permalink:"/zeebe-chaos/tags/availability"}],readingTime:3.38,truncated:!0,authors:[{name:"Christopher Zell",title:"Chaos Engineer @ Zeebe",url:"https://github.com/zelldon",imageURL:"https://github.com/zelldon.png",key:"zell"}],prevItem:{title:"Disconnect Leader and one Follower",permalink:"/zeebe-chaos/2021/01/07/disconnect-leader-and-follower"},nextItem:{title:"Many Job Timeouts",permalink:"/zeebe-chaos/2020/11/11/job-timeouts"}},s={authorsImageUrls:[void 0]},c=[],p={toc:c};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Today I wanted to finally implement an experiment which I postponed for long time, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe-chaos/issues/24"},"#24"),".\nThe problem was that previous we were not able to determine on which partition the message was published, so we were not able to assert that it was published on the correct partition. With this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe/issues/4794"},"#4794")," it is now possible, which was btw an community contribution. \ud83c\udf89"))}m.isMDXComponent=!0}}]);