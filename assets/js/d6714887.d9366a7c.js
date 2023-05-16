"use strict";(self.webpackChunkzell_chaos=self.webpackChunkzell_chaos||[]).push([[1650],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),f=r,h=u["".concat(s,".").concat(f)]||u[f]||m[f]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},3957:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={layout:"posts",title:"SST Partitioning toggle",date:new Date("2023-05-15T00:00:00.000Z"),categories:["chaos_experiment","configuration"],tags:["availability","data"],authors:"zell"},o="Chaos Day Summary",l={permalink:"/zeebe-chaos/2023/05/15/SST-Partitioning-toggle",editUrl:"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2023-05-15-SST-Partitioning-toggle/index.md",source:"@site/blog/2023-05-15-SST-Partitioning-toggle/index.md",title:"SST Partitioning toggle",description:"On this chaos day I wanted to experiment with a new experimental feature we have released recently. The enablement of the partitioning of the SST files in RocksDB. This is an experimental feature from RocksDb, which we made available now for our users as well, since we have seen great benefits in performance, especially with larger runtime data.",date:"2023-05-15T00:00:00.000Z",formattedDate:"May 15, 2023",tags:[{label:"availability",permalink:"/zeebe-chaos/tags/availability"},{label:"data",permalink:"/zeebe-chaos/tags/data"}],readingTime:6.695,hasTruncateMarker:!0,authors:[{name:"Christopher Zell",title:"Chaos Engineer @ Zeebe",url:"https://github.com/zelldon",imageURL:"https://github.com/zelldon.png",key:"zell"}],frontMatter:{layout:"posts",title:"SST Partitioning toggle",date:"2023-05-15T00:00:00.000Z",categories:["chaos_experiment","configuration"],tags:["availability","data"],authors:"zell"},nextItem:{title:"Gateway Termination",permalink:"/zeebe-chaos/2023/04/06/gateway-termination"}},s={authorsImageUrls:[void 0]},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"On this chaos day I wanted to experiment with a new experimental feature we have released recently. The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/camunda/zeebe/pull/12483"},"enablement of the partitioning of the SST files in RocksDB"),". This is an experimental feature from RocksDb, which we made available now for our users as well, since we have seen great benefits in performance, especially with larger runtime data."),(0,r.kt)("p",null,"I wanted to experiment a bit with the SST partitioning and find out whether it would be possible to enable and disable the flag/configuration without issues."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"TL;DR;")," The first experiment was successful, it looks like we can enable and disable the partitioning without impacting the execution of one existing PI. We need to experiment a bit more with larger data sets to force RocksDB compaction, to be fully sure."))}m.isMDXComponent=!0}}]);