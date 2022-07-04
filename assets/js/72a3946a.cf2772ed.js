"use strict";(self.webpackChunkzell_chaos=self.webpackChunkzell_chaos||[]).push([[1668],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),m=l(a),u=n,d=m["".concat(c,".").concat(u)]||m[u]||p[u]||o;return a?r.createElement(d,s(s({ref:t},h),{},{components:a})):r.createElement(d,s({ref:t},h))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4740:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const o={layout:"posts",title:"Time travel Experiment",date:new Date("2021-05-25T00:00:00.000Z"),categories:["chaos_experiment","broker","time"],tags:["data"],authors:"zell"},s="Chaos Day Summary",i={permalink:"/zeebe-chaos/2021/05/25/Reset-Clock",editUrl:"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2021-05-25-Reset-Clock/index.md",source:"@site/blog/2021-05-25-Reset-Clock/index.md",title:"Time travel Experiment",description:"Recently we run a Game day where a lot of messages with high TTL have been stored in the state. This was based on an earlier incident, which we had seen in production. One suggested approach to resolve that incident was to increase the time, such that all messages are removed from the state. This and the fact that summer and winter time shifts can cause in other systems evil bugs, we wanted to find out how our system can handle time shifts. Phil joined me as participant and observer. There was a related issue which covers this topic as well, zeebe-chaos#3.",date:"2021-05-25T00:00:00.000Z",formattedDate:"May 25, 2021",tags:[{label:"data",permalink:"/zeebe-chaos/tags/data"}],readingTime:8.205,truncated:!0,authors:[{name:"Christopher Zell",title:"Chaos Engineer @ Zeebe",url:"https://github.com/zelldon",imageURL:"https://github.com/zelldon.png",key:"zell"}],prevItem:{title:"Full Disk Recovery",permalink:"/zeebe-chaos/2021/06/08/Full-Disk"},nextItem:{title:"Corrupted Snapshot Experiment Investigation",permalink:"/zeebe-chaos/2021/04/29/Corrupted-Snapshot"}},c={authorsImageUrls:[void 0]},l=[],h={toc:l};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://confluence.camunda.com/display/ZEEBE/Game+Day+18.05.2021"},"Recently we run a Game day")," where a lot of messages with high TTL have been stored in the state. This was based on an earlier incident, which we had seen in production. One suggested approach to resolve that incident was to increase the time, such that all messages are removed from the state. This and the fact that summer and winter time shifts can cause in other systems evil bugs, we wanted to find out how our system can handle time shifts. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/saig0"},"Phil")," joined me as participant and observer. There was a related issue which covers this topic as well, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe-chaos/issues/3"},"zeebe-chaos#3"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"TL;DR;")," Zeebe is able to handle time shifts back and forth, without observable issues. Operate seems to dislike it."))}p.isMDXComponent=!0}}]);