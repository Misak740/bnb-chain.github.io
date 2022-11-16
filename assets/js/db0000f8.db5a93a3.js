"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[6711],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),l=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),h=l(a),m=i,k=h["".concat(o,".").concat(m)]||h[m]||c[m]||r;return a?n.createElement(k,s(s({ref:t},d),{},{components:a})):n.createElement(k,s({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,s[1]=p;for(var l=2;l<r;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},27688:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>r,contentTitle:()=>s,metadata:()=>p,toc:()=>o,default:()=>d});var n=a(87462),i=(a(67294),a(3905));const r={sidebar_label:"RPC"},s="JSON-RPC Endpoint",p={unversionedId:"rpc",id:"rpc",isDocsHomePage:!1,title:"JSON-RPC Endpoint",description:"BNB Smart Chain",source:"@site/docs/rpc.md",sourceDirName:".",slug:"/rpc",permalink:"/docs/rpc",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/rpc.md",tags:[],version:"current",frontMatter:{sidebar_label:"RPC"},sidebar:"bscSideBar",previous:{title:"Tools",permalink:"/docs/learn/ecosystem"},next:{title:"BSC Mainnet",permalink:"/docs/BSCmainnet"}},o=[{value:"BNB Smart Chain",id:"bnb-smart-chain",children:[{value:"Mainnet (ChainID 0x38, 56 in decimal)",id:"mainnet-chainid-0x38-56-in-decimal",children:[],level:3},{value:"Testnet (ChainID 0x61, 97 in decimal)",id:"testnet-chainid-0x61-97-in-decimal",children:[],level:3},{value:"3rd Party Provider",id:"3rd-party-provider",children:[],level:3},{value:"Start HTTP JSON-RPC",id:"start-http-json-rpc",children:[],level:3},{value:"JSON-RPC methods",id:"json-rpc-methods",children:[],level:3}],level:2},{value:"BNB Beacon Chain",id:"bnb-beacon-chain",children:[{value:"Mainnet",id:"mainnet",children:[],level:3},{value:"Testnet",id:"testnet",children:[],level:3}],level:2}],l={toc:o};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"json-rpc-endpoint"},"JSON-RPC Endpoint"),(0,i.kt)("h2",{id:"bnb-smart-chain"},"BNB Smart Chain"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The rate limit of BSC endpoint on Testnet and Mainnet is 10K/5min."))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can make ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_getLogs")," requests with up to a 5K block range.\nIf you need to pull logs frequently, we recommend using WebSockets to push new logs to you when they are available."))),(0,i.kt)("h3",{id:"mainnet-chainid-0x38-56-in-decimal"},"Mainnet (ChainID 0x38, 56 in decimal)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://bsc-dataseed.binance.org"},"https://bsc-dataseed.binance.org")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://bsc-dataseed1.defibit.io"},"https://bsc-dataseed1.defibit.io")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://bsc-dataseed1.ninicoin.io"},"https://bsc-dataseed1.ninicoin.io")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://bsc.nodereal.io"},"https://bsc.nodereal.io"))),(0,i.kt)("p",null,"You could find more endpoints from ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://chainlist.org/chain/56"},"here")),"."),(0,i.kt)("h3",{id:"testnet-chainid-0x61-97-in-decimal"},"Testnet (ChainID 0x61, 97 in decimal)"),(0,i.kt)("p",null,"BSC RPC Endpoints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://data-seed-prebsc-1-s1.binance.org:8545"},"https://data-seed-prebsc-1-s1.binance.org:8545")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://data-seed-prebsc-2-s1.binance.org:8545"},"https://data-seed-prebsc-2-s1.binance.org:8545")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://data-seed-prebsc-1-s2.binance.org:8545"},"https://data-seed-prebsc-1-s2.binance.org:8545")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://data-seed-prebsc-2-s2.binance.org:8545"},"https://data-seed-prebsc-2-s2.binance.org:8545")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://data-seed-prebsc-1-s3.binance.org:8545"},"https://data-seed-prebsc-1-s3.binance.org:8545")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://data-seed-prebsc-2-s3.binance.org:8545"},"https://data-seed-prebsc-2-s3.binance.org:8545"))),(0,i.kt)("h3",{id:"3rd-party-provider"},"3rd Party Provider"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"NodeReal: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nodereal.io/nodereal/meganode/introduction"},"https://docs.nodereal.io/nodereal/meganode/introduction"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ankr: ",(0,i.kt)("a",{parentName:"p",href:"https://app.ankr.com/api"},"https://app.ankr.com/api"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Chainstack: ",(0,i.kt)("a",{parentName:"p",href:"https://chainstack.com/build-better-with-binance-smart-chain/"},"https://chainstack.com/build-better-with-binance-smart-chain/"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"GetBlock: ",(0,i.kt)("a",{parentName:"p",href:"https://getblock.io/nodes/bsc"},"https://getblock.io/nodes/bsc"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"QuickNode: ",(0,i.kt)("a",{parentName:"p",href:"https://quicknode.com"},"https://quicknode.com"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"BlockVision: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.blockvision.org/blockvision/chain-apis/bnb-chain-api"},"https://docs.blockvision.org/blockvision/chain-apis/bnb-chain-api")))),(0,i.kt)("h3",{id:"start-http-json-rpc"},"Start HTTP JSON-RPC"),(0,i.kt)("p",null,"You can start the HTTP JSON-RPC with the --http flag"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"## mainnet\ngeth attach https://bsc-dataseed.binance.org\n\n## testnet\ngeth attach https://data-seed-prebsc-1-s1.binance.org:8545\n")),(0,i.kt)("h3",{id:"json-rpc-methods"},"JSON-RPC methods"),(0,i.kt)("p",null,"Please refer to this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum/wiki/wiki/JSON-RPC"},"wiki page")," or use Postman: ",(0,i.kt)("a",{parentName:"p",href:"https://documenter.getpostman.com/view/4117254/ethereum-json-rpc/RVu7CT5J?version=latest"},"https://documenter.getpostman.com/view/4117254/ethereum-json-rpc/RVu7CT5J?version=latest")),(0,i.kt)("h2",{id:"bnb-beacon-chain"},"BNB Beacon Chain"),(0,i.kt)("h3",{id:"mainnet"},"Mainnet"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dataseed1.binance.org:443"},"https://dataseed1.binance.org:443")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dataseed2.binance.org:443"},"https://dataseed2.binance.org:443")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dataseed3.binance.org:443"},"https://dataseed3.binance.org:443")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dataseed4.binance.org:443"},"https://dataseed4.binance.org:443")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dataseed1.defibit.io:443"},"https://dataseed1.defibit.io:443")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dataseed2.defibit.io:443"},"https://dataseed2.defibit.io:443")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dataseed3.defibit.io:443"},"https://dataseed3.defibit.io:443")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dataseed4.defibit.io:443"},"https://dataseed4.defibit.io:443")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dataseed1.ninicoin.io:443"},"https://dataseed1.ninicoin.io:443")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dataseed2.ninicoin.io:443"},"https://dataseed2.ninicoin.io:443")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dataseed3.ninicoin.io:443"},"https://dataseed3.ninicoin.io:443")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dataseed4.ninicoin.io:443"},"https://dataseed4.ninicoin.io:443"))),(0,i.kt)("h3",{id:"testnet"},"Testnet"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://data-seed-pre-0-s1.binance.org:443"},"https://data-seed-pre-0-s1.binance.org:443")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://data-seed-pre-1-s1.binance.org:443"},"https://data-seed-pre-1-s1.binance.org:443")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://data-seed-pre-2-s1.binance.org:443"},"https://data-seed-pre-2-s1.binance.org:443")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://data-seed-pre-0-s3.binance.org:443"},"https://data-seed-pre-0-s3.binance.org:443"))))}d.isMDXComponent=!0}}]);