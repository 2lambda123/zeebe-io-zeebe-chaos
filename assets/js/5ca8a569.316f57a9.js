"use strict";(self.webpackChunkzell_chaos=self.webpackChunkzell_chaos||[]).push([[764],{12562:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=t(85893),a=t(11151);const r={layout:"posts",title:"Play around with ToxiProxy",date:new Date("2020-10-06T00:00:00.000Z"),categories:["chaos_experiment","toxiProxy"],tags:["tools"],authors:"zell"},o="Chaos Day Summary",i={permalink:"/zeebe-chaos/2020/10/06/toxi-proxy",editUrl:"https://github.com/zeebe-io/zeebe-chaos/blob/master/chaos-days/blog/2020-10-06-toxi-proxy/index.md",source:"@site/blog/2020-10-06-toxi-proxy/index.md",title:"Play around with ToxiProxy",description:"First chaos day since my parental leave.",date:"2020-10-06T00:00:00.000Z",formattedDate:"October 6, 2020",tags:[{label:"tools",permalink:"/zeebe-chaos/tags/tools"}],readingTime:3.275,hasTruncateMarker:!0,authors:[{name:"Christopher Kujawa",title:"Chaos Engineer @ Zeebe",url:"https://github.com/zelldon",imageURL:"https://github.com/zelldon.png",key:"zell"}],frontMatter:{layout:"posts",title:"Play around with ToxiProxy",date:"2020-10-06T00:00:00.000Z",categories:["chaos_experiment","toxiProxy"],tags:["tools"],authors:"zell"},unlisted:!1,prevItem:{title:"Multiple Leader Changes",permalink:"/zeebe-chaos/2020/10/13/multiple-leader-changes"},nextItem:{title:"Experiment with Camunda Cloud",permalink:"/zeebe-chaos/2020/08/20/experiment-with-camunda-cloud"}},l={authorsImageUrls:[void 0]},c=[{value:"Run ToxiProxy",id:"run-toxiproxy",level:2},{value:"Slice packages",id:"slice-packages",level:3},{value:"Chaos Experiment",id:"chaos-experiment",level:2},{value:"No Leader change on high load",id:"no-leader-change-on-high-load",level:3},{value:"Time reset",id:"time-reset",level:3},{value:"Participants",id:"participants",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["First chaos day since my parental leave ","\ud83c\udf89","."]}),"\n",(0,s.jsxs)(n.p,{children:["Today I wanted to play a bit with ",(0,s.jsx)(n.a,{href:"https://github.com/Shopify/toxiproxy",children:"ToxiProxy"}),". Toxiproxy is a framework for simulating network conditions and ideal to do some chaos on the network."]}),"\n",(0,s.jsx)(n.h2,{id:"run-toxiproxy",children:"Run ToxiProxy"}),"\n",(0,s.jsxs)(n.p,{children:["Download from the ",(0,s.jsx)(n.a,{href:"https://github.com/Shopify/toxiproxy/releases",children:"release page"})," the latest version (server and cli)."]}),"\n",(0,s.jsx)(n.p,{children:"Start a broker via docker."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"docker pull camunda/zeebe:SNAPSHOT\ndocker run -p 26500:26500 camunda/zeebe:SNAPSHOT\n"})}),"\n",(0,s.jsx)(n.p,{children:"Start the toxi proxy server."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"./toxiproxy-server-linux-amd64 start\n"})}),"\n",(0,s.jsx)(n.p,{children:"Create a proxy for zeebe"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"./toxiproxy-cli-linux-amd64 create zeebe-proxy -l localhost:26379 -u localhost:26500\nCreated new proxy zeebe-proxy\n"})}),"\n",(0,s.jsx)(n.p,{children:"You should see something in the toxy proxy server log:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"INFO[0031] Started proxy                                 name=zeebe-proxy proxy=127.0.0.1:26379 upstream=localhost:26500\n"})}),"\n",(0,s.jsx)(n.p,{children:"Try zbctl to request the topology."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"./zbctl --address localhost:26379 status --insecure\n\nCluster size: 1\nPartitions count: 1\nReplication factor: 1\nGateway version: 0.25.0-SNAPSHOT\nBrokers:\n  Broker 0 - 172.17.0.2:26501\n    Version: 0.25.0-SNAPSHOT\n    Partition 1 : Leader\n"})}),"\n",(0,s.jsx)(n.p,{children:"In the toxy proxy server log it should be shown as:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"INFO[0149] Accepted client                               client=127.0.0.1:41510 name=zeebe-proxy proxy=127.0.0.1:26379 upstream=localhost:26500\nWARN[0149] Source terminated                             bytes=245 err=read tcp 127.0.0.1:56178->127.0.0.1:26500: use of closed network connection name=zeebe-proxy\n"})}),"\n",(0,s.jsx)(n.p,{children:"Add latency to requests"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"$ ./toxiproxy-cli-linux-amd64 toxic add -t latency -a latency=5000 zeebe-proxy\nAdded downstream latency toxic 'latency_downstream' on proxy 'zeebe-proxy'\n"})}),"\n",(0,s.jsx)(n.p,{children:"Running zbctl again:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:" ./zbctl --address localhost:26379 status --insecure\nError: rpc error: code = DeadlineExceeded desc = context deadline exceeded\n"})}),"\n",(0,s.jsx)(n.p,{children:"Updating existing toxy:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"./toxiproxy-cli-linux-amd64 toxic update -n latency_downstream -t latency -a latency=500 zeebe-proxy\n"})}),"\n",(0,s.jsx)(n.p,{children:"Running zbctl again:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"time ./zbctl --address localhost:26379 status --insecure\nCluster size: 1\nPartitions count: 1\nReplication factor: 1\nGateway version: 0.25.0-SNAPSHOT\nBrokers:\n  Broker 0 - 172.17.0.2:26501\n    Version: 0.25.0-SNAPSHOT\n    Partition 1 : Leader\n\nreal\t0m1.045s\nuser\t0m0.012s\nsys\t0m0.021s\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"Inspect existing toxics:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"$ ./toxiproxy-cli-linux-amd64 inspect zeebe-proxy\nName: zeebe-proxy\tListen: 127.0.0.1:26379\tUpstream: localhost:26500\n======================================================================\nUpstream toxics:\nProxy has no Upstream toxics enabled.\n\nDownstream toxics:\nlatency_downstream:\ttype=latency\tstream=downstream\ttoxicity=1.00\tattributes=[\tjitter=0\tlatency=500\t]\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"With toxicity we can change whether it should be applied on all requests or only on some. It is possible to add the latency instead of downstream to upstream. There also other things we can inject, like slicing and delaying packages, dropping packages and limiting the bandwith."}),"\n",(0,s.jsx)(n.p,{children:"Possible new experiments:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"introduce latency between one follower and leader - if only one follower experience delays we expect that no election is started"}),"\n",(0,s.jsx)(n.li,{children:"introduce latency betweem gw and broker - see whether command timeout"}),"\n",(0,s.jsx)(n.li,{children:"slice packages - drop packages, but not every packages - expect that command is send correctly since requests are retried"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"slice-packages",children:"Slice packages"}),"\n",(0,s.jsx)(n.p,{children:"Slices packages after 128 bytes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"./toxiproxy-cli-linux-amd64 toxic add zeebe-proxy -t slicer -a average_size=128\n"})}),"\n",(0,s.jsx)(n.p,{children:"Publish message seem to work:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'$ time ./zbctl --address localhost:26379 publish message failing --insecure --correlationKey key --variables "{}"\n{\n  "key": 2251799813685253\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"After limiting it to 32 bytes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"$ ./toxiproxy-cli-linux-amd64 toxic update -n slicer_downstream -a average_size=32 zeebe-proxy\nUpdated toxic 'slicer_downstream' on proxy 'zeebe-proxy'\n"})}),"\n",(0,s.jsx)(n.p,{children:"The publish message seem to not work as expected."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'$ time ./zbctl --address localhost:26379 publish message failing --insecure --correlationKey key --variables "{}"\nnull\n\nreal\t0m0.039s\nuser\t0m0.007s\nsys\t0m0.023s\n'})}),"\n",(0,s.jsx)(n.p,{children:"Actually I would expect here an error instead of just returning null."}),"\n",(0,s.jsx)(n.h2,{id:"chaos-experiment",children:"Chaos Experiment"}),"\n",(0,s.jsx)(n.h3,{id:"no-leader-change-on-high-load",children:"No Leader change on high load"}),"\n",(0,s.jsx)(n.p,{children:"Peter volunteered for automating a new chaos experiment, where we put high load on a broker and expect that we have no leader change. This was previous an issue, since the leaders were not able to send heartbeats in time. Related issue #7."}),"\n",(0,s.jsx)(n.h3,{id:"time-reset",children:"Time reset"}),"\n",(0,s.jsxs)(n.p,{children:["I wanted to work on the clock reset ",(0,s.jsx)(n.a,{href:"https://github.com/zeebe-io/zeebe-chaos/issues/3",children:"#3"}),".\nThis seems to be not easily possible in kubernetes or at least with our current images, since we need for that root privilges."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"root@zell-time-reset-zeebe-0:/usr/local/zeebe# date -s $(date +%Y-%m-%dT%H:%M:%S)\ndate: cannot set date: Operation not permitted\nTue Oct  6 11:51:19 UTC 2020\n"})}),"\n",(0,s.jsxs)(n.p,{children:["It seems that chaos mesh supports something like that for kubernetes maybe worth to look at\n",(0,s.jsx)(n.a,{href:"https://pingcap.com/blog/simulating-clock-skew-in-k8s-without-affecting-other-containers-on-node",children:"https://pingcap.com/blog/simulating-clock-skew-in-k8s-without-affecting-other-containers-on-node"})]}),"\n",(0,s.jsx)(n.h2,{id:"participants",children:"Participants"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"@pihme"}),"\n",(0,s.jsx)(n.li,{children:"@zelldon"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var s=t(67294);const a={},r=s.createContext(a);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);