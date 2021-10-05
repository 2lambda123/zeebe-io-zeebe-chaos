"use strict";(self.webpackChunkzell_chaos=self.webpackChunkzell_chaos||[]).push([[2462],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=c(n),d=r,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||o;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3461:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],i={layout:"posts",title:"Old-Clients",date:new Date("2021-09-23T00:00:00.000Z"),categories:["chaos_experiment","clients"],tags:["availability"],authors:"zell"},l="Chaos Day Summary",c={permalink:"/zeebe-chaos/2021/09/23/Old-Clients",editUrl:"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2021-09-23-Old-Clients/index.md",source:"@site/blog/2021-09-23-Old-Clients/index.md",title:"Old-Clients",description:"It has been awhile since the last post, I'm happy to be back.",date:"2021-09-23T00:00:00.000Z",formattedDate:"September 23, 2021",tags:[{label:"availability",permalink:"/zeebe-chaos/tags/availability"}],readingTime:2.61,truncated:!0,authors:[{name:"Christopher Zell",title:"Chaos Engineer @ Zeebe",url:"https://github.com/zelldon",imageURL:"https://github.com/zelldon.png",key:"zell"}],nextItem:{title:"Slow Network",permalink:"/zeebe-chaos/2021/07/06/Slow-Network"}},u={authorsImageUrls:[void 0]},p=[{value:"Chaos Experiment",id:"chaos-experiment",children:[{value:"Expected",id:"expected",children:[]},{value:"Actual",id:"actual",children:[]},{value:"Result",id:"result",children:[]}]},{value:"Found Bugs",id:"found-bugs",children:[]}],h={toc:p};function d(e){var t=e.components,i=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It has been awhile since the last post, I'm happy to be back."),(0,o.kt)("p",null,"In today's chaos day we want to verify the hypothesis from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe-chaos/issues/34"},"zeebe-chaos#34")," that old\nclients can't disrupt a running cluster."),(0,o.kt)("p",null,"It might happen that after upgrading your Zeebe to the newest shiny version, you might forget to\nupdate some of your workers or starters etc. This should normally not an issue since Zeebe is\nbackwards compatible, client wise since 1.x. But what happens when older clients are used. Old\nclients should not have a negative effect on a running cluster."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TLDR")," Older clients (0.26) have no negative impact on a running cluster (1.2), and clients after\n1.x are still working with the latest version. "),(0,o.kt)("h2",{id:"chaos-experiment"},"Chaos Experiment"),(0,o.kt)("p",null,"We will run a simple setup with, three nodes and three partitions (replication factor 3). The\nversion we use is the latest release candidate (1.2.0). Normally we run a load of 200 process\ninstances per second (pi/s) on our benchmarks. This time we will put a load of 100 pi/s to get\nsomething running and start an old starter (v0.26.x) with the same frequency. Later we will scale\nthe old starter to see whether it makes any effect."),(0,o.kt)("h3",{id:"expected"},"Expected"),(0,o.kt)("p",null,"We expect that we can start and complete the 100 pi/s, since we can normally run 200 pi/s."),(0,o.kt)("h3",{id:"actual"},"Actual"),(0,o.kt)("p",null,"The cluster was first started with starters of the same version, and we saw a stable load of ~100\nprocess instances completed per second. After starting the old starters (with version 0.26.3), we\ncan't observe any difference. "),(0,o.kt)("p",null,"Interesting is even when scaling the starters up to 10 replicas, which means 1000 PI creations per\nsecond, it doesn't seem to make any effect. ",(0,o.kt)("em",{parentName:"p"},"Side note:")," The\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/camunda-cloud/zeebe/tree/develop/benchmarks/project"},"starters")," have been\nmodified, such they only start instances without deploying the model."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"old26-general",src:n(9643).Z})),(0,o.kt)("p",null,"The drops we see in the processing are related to restart's."),(0,o.kt)("p",null,"The gateway and grpc metrics doesn't indicate that more requests are sent. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"old26-grpc",src:n(1983).Z}),"\n",(0,o.kt)("img",{alt:"old26-gateway",src:n(7883).Z})),(0,o.kt)("p",null,"If we take a look in the clients log, we can see that the request are failing because the RPC Method names have been changed between 0.26 and 1.0. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"java.util.concurrent.ExecutionException: io.grpc.StatusRuntimeException: UNIMPLEMENTED: Method not found: gateway_protocol.Gateway/CreateWorkflowInstance\n    ...\nCaused by: io.grpc.StatusRuntimeException: UNIMPLEMENTED: Method not found: gateway_protocol.Gateway/CreateWorkflowInstance\n    ...\n")),(0,o.kt)("p",null,'It seems this kind of "old" requests can be blocked quite early in the request chain to make no effect. '),(0,o.kt)("p",null,"In order to experiment a bit further I created a starter image with version 1.0 to see whether this still works with our newest release candidate 1.2."),(0,o.kt)("p",null,"We can see in the metrics right after starting the starter that the throughput goes up and we can reach our 200 pi/s."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"old10-general",src:n(5021).Z})),(0,o.kt)("p",null,"We run the benchmark overnight, and we haven't seen any issues. Be aware that the throughput is calculated over the 24h which makes is lower than 200."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"general",src:n(7124).Z})),(0,o.kt)("p",null,"Furthermore, taking a look at the resource consumption, especially at the gateway, gives no evidence that something wrong is going on."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"res",src:n(1610).Z})),(0,o.kt)("h3",{id:"result"},"Result"),(0,o.kt)("p",null,"We were able to confirm the hypothesis written in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe-chaos/issues/34"},"zeebe-chaos#34"),", that an old client can't disrupt a running cluster. "),(0,o.kt)("h2",{id:"found-bugs"},"Found Bugs"),(0,o.kt)("p",null,"None this time :)"))}d.isMDXComponent=!0},7124:function(e,t,n){t.Z=n.p+"assets/images/general-67c5d494df6c66211457861139475c6c.png"},5021:function(e,t,n){t.Z=n.p+"assets/images/old10-general-90bb179937d9178c12b16f0cdea22281.png"},7883:function(e,t,n){t.Z=n.p+"assets/images/old26-gateway-dd4afa5333796343795b4d80ad498e6b.png"},9643:function(e,t,n){t.Z=n.p+"assets/images/old26-general-1cbfdf95d7c9b19cad8ca10aa921f34b.png"},1983:function(e,t,n){t.Z=n.p+"assets/images/old26-grpc-b5da2bbcf038492c59dea93f36619e69.png"},1610:function(e,t,n){t.Z=n.p+"assets/images/res-951c069149e3ae14d08a997e6fe974b2.png"}}]);