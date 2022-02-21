"use strict";(self.webpackChunkzell_chaos=self.webpackChunkzell_chaos||[]).push([[9945],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,f=m["".concat(l,".").concat(p)]||m[p]||h[p]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8634:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return h},default:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={layout:"posts",title:"Set file immutable",date:new Date("2021-03-30T00:00:00.000Z"),categories:["chaos_experiment","filesystem","immutable"],authors:"zell"},l="Chaos Day Summary",c={permalink:"/zeebe-chaos/2021/03/30/set-file-immutable",editUrl:"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2021-03-30-set-file-immutable/index.md",source:"@site/blog/2021-03-30-set-file-immutable/index.md",title:"Set file immutable",description:"This chaos day was a bit different. Actually I wanted to experiment again with camunda cloud and verify that our high load chaos experiments are now working with the newest cluster plans, see zeebe-cluster-testbench#135.",date:"2021-03-30T00:00:00.000Z",formattedDate:"March 30, 2021",tags:[],readingTime:6.5,truncated:!0,authors:[{name:"Christopher Zell",title:"Chaos Engineer @ Zeebe",url:"https://github.com/zelldon",imageURL:"https://github.com/zelldon.png",key:"zell"}],prevItem:{title:"BPMN meets Chaos Engineering",permalink:"/zeebe-chaos/2021/04/03/bpmn-meets-chaos-engineering"},nextItem:{title:"Camunda Cloud network partition",permalink:"/zeebe-chaos/2021/03/23/camunda-cloud-network-partition"}},u={authorsImageUrls:[void 0]},h=[],m={toc:h};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This chaos day was a bit different. Actually I wanted to experiment again with camunda cloud and verify that our high load chaos experiments are now working with the newest cluster plans, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe-cluster-testbench/issues/135"},"zeebe-cluster-testbench#135"),".\nUnfortunately I found out that our test chaos cluster was in a way broken, that we were not able to create new clusters. Luckily this was fixed at the end of the day, thanks to @immi :) "),(0,o.kt)("p",null,"Because of these circumstances I thought about different things to experiment with, and I remembered that in the ",(0,o.kt)("a",{parentName:"p",href:"/zeebe-chaos/2021/03/23/camunda-cloud-network-partition"},"last chaos day")," we worked with patching running deployments, in order to add more capabilities.\nThis allowed us to create ip routes and experiment with the zeebe deployment distribution. During this I have read the ",(0,o.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man7/capabilities.7.html"},"capabilities list of linux"),", and found out that we can mark files as immutable, which might be interesting for a chaos experiment."),(0,o.kt)("p",null,"In this chaos day I planned to find out how marking a file immutable affects our brokers and I made the hypothesis that: ",(0,o.kt)("em",{parentName:"p"},"If a leader has a write error, which is not recoverable, it will step down and another leader should take over.")," I put this in our hypothesis backlog (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe-chaos/issues/52"},"zeebe-chaos#52"),"). "),(0,o.kt)("p",null,"In order to really run this kind of experiment I need to find out whether marking a file immutable will cause any problems and if not how I can cause write errors such that affects the broker.\nUnfortunately it turned out that immutable files will not cause issues on already opened file channels, but I found some other bugs/issues, which you can read below."),(0,o.kt)("p",null,"In the next chaos days I will search for a way to cause write errors proactively, so we can verify that our system can handle such issues."))}p.isMDXComponent=!0}}]);