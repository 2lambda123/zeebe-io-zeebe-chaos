"use strict";(self.webpackChunkzell_chaos=self.webpackChunkzell_chaos||[]).push([[12],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),y=s(a),m=r,d=y["".concat(c,".").concat(m)]||y[m]||u[m]||o;return a?n.createElement(d,l(l({ref:t},p),{},{components:a})):n.createElement(d,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},6236:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={layout:"posts",title:"Standalone Gateway in CCSaaS",date:new Date("2022-02-15T00:00:00.000Z"),categories:["chaos_experiment","gateway"],tags:["availability"],authors:"zell"},l="Chaos Day Summary",i={permalink:"/zeebe-chaos/2022/02/15/Standalone-Gateway-in-CCSaaS",editUrl:"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2022-02-15-Standalone-Gateway-in-CCSaaS/index.md",source:"@site/blog/2022-02-15-Standalone-Gateway-in-CCSaaS/index.md",title:"Standalone Gateway in CCSaaS",description:"We recently introduced the Zeebe Standalone Gateway in CCSaaS. Today I wanted to do a first simple",date:"2022-02-15T00:00:00.000Z",formattedDate:"February 15, 2022",tags:[{label:"availability",permalink:"/zeebe-chaos/tags/availability"}],readingTime:3.935,truncated:!0,authors:[{name:"Christopher Zell",title:"Chaos Engineer @ Zeebe",url:"https://github.com/zelldon",imageURL:"https://github.com/zelldon.png",key:"zell"}],nextItem:{title:"High Snapshot Frequency",permalink:"/zeebe-chaos/2022/02/01/High-Snapshot-Frequency"}},c={authorsImageUrls:[void 0]},s=[],p={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We recently introduced the Zeebe Standalone Gateway in CCSaaS. Today I wanted to do a first simple\nchaos experiment with the gateway, where we just restart one gateway. "),(0,r.kt)("p",null,"Ideally in the future we could enable some gateway chaos experiments again, which we currently only support for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe-chaos/tree/master/chaos-workers/chaos-experiments/helm"},"helm"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"TL;DR;")," Our Camunda Cloud clusters can handle gateway restarts without issues."))}u.isMDXComponent=!0}}]);