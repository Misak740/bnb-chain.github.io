"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[9430],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(n),s=o,k=p["".concat(c,".").concat(s)]||p[s]||h[s]||l;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var d=2;d<l;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},25233:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>a,metadata:()=>i,toc:()=>c,default:()=>u});var r=n(87462),o=(n(67294),n(3905));const l={sidebar_label:"Local BNB Smart Chain Network",hide_table_of_contents:!1,sidebar_position:2},a="Local BNB Smart Chain Network",i={unversionedId:"local",id:"local",isDocsHomePage:!1,title:"Local BNB Smart Chain Network",description:"See also//github.com/ethereum/go-ethereum/wiki/Private-network",source:"@site/docs/local.md",sourceDirName:".",slug:"/local",permalink:"/docs/local",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/local.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Local BNB Smart Chain Network",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"Download Blockchain Snapshot",permalink:"/docs/validator/snapshot"},next:{title:"Upgrading Geth",permalink:"/docs/validator/upgrade-fullnode"}},c=[{value:"Setting Up Your BSC Node(s)",id:"setting-up-your-bsc-nodes",children:[{value:"Pre-Requisites",id:"pre-requisites",children:[{value:"Install Geth",id:"install-geth",children:[],level:4},{value:"Create /projects Symbolic Link",id:"create-projects-symbolic-link",children:[],level:4}],level:3},{value:"Create local_ethereum_blockchain folder",id:"create-local_ethereum_blockchain-folder",children:[],level:3},{value:"Create the Genesis Block Config",id:"create-the-genesis-block-config",children:[],level:3},{value:"Initialize an Ethereum Node",id:"initialize-an-ethereum-node",children:[],level:3},{value:"Start the Ethereum Node",id:"start-the-ethereum-node",children:[],level:3},{value:"Initialize Another Ethereum Node",id:"initialize-another-ethereum-node",children:[],level:3},{value:"Start the 2nd Ethereum Node",id:"start-the-2nd-ethereum-node",children:[],level:3},{value:"Connect One Node to the Other",id:"connect-one-node-to-the-other",children:[],level:3}],level:2},{value:"Useful geth Commands",id:"useful-geth-commands",children:[{value:"Node info",id:"node-info",children:[],level:3},{value:"Peers",id:"peers",children:[],level:3},{value:"Create an Account",id:"create-an-account",children:[],level:3},{value:"Unlock Account",id:"unlock-account",children:[],level:3},{value:"Start Mining",id:"start-mining",children:[],level:3},{value:"Stop Mining",id:"stop-mining",children:[],level:3},{value:"Current Block Number",id:"current-block-number",children:[],level:3},{value:"Details of Current Block",id:"details-of-current-block",children:[],level:3},{value:"Which Node had Mined the Last Block",id:"which-node-had-mined-the-last-block",children:[],level:3},{value:"Account Balance in Ether",id:"account-balance-in-ether",children:[],level:3},{value:"Transfer Ether Between Accounts",id:"transfer-ether-between-accounts",children:[],level:3},{value:"Exit",id:"exit",children:[],level:3}],level:2},{value:"Connect to Other Nodes on Your Network",id:"connect-to-other-nodes-on-your-network",children:[],level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"local-bnb-smart-chain-network"},"Local BNB Smart Chain Network"),(0,o.kt)("p",null,"See also : ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ethereum/go-ethereum/wiki/Private-network"},"https://github.com/ethereum/go-ethereum/wiki/Private-network")),(0,o.kt)("h2",{id:"setting-up-your-bsc-nodes"},"Setting Up Your BSC Node(s)"),(0,o.kt)("h3",{id:"pre-requisites"},"Pre-Requisites"),(0,o.kt)("h4",{id:"install-geth"},"Install Geth"),(0,o.kt)("p",null,"Review the guide ",(0,o.kt)("a",{parentName:"p",href:"/docs/validator/fullnode"},"here")),(0,o.kt)("h4",{id:"create-projects-symbolic-link"},"Create /projects Symbolic Link"),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"/projects")," symbolic link\n",(0,o.kt)("em",{parentName:"p"},'(Note:  This step is simply so "/projects" can be used in all other commands, instead you could use full paths, or set an env var)')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ mkdir <my projects folder>\n$ sudo ln -s <my projects folder> /projects\n")),(0,o.kt)("h3",{id:"create-local_ethereum_blockchain-folder"},"Create local","_","ethereum","_","blockchain folder"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ mkdir /projects/local_ethereum_blockchain\n")),(0,o.kt)("h3",{id:"create-the-genesis-block-config"},"Create the Genesis Block Config"),(0,o.kt)("p",null,"Create this file :  ",(0,o.kt)("inlineCode",{parentName:"p"},"/projects/local_ethereum_blockchain/genesis.json")),(0,o.kt)("p",null,"With the following contents :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n     "config": {\n       "chainId": 1000,\n       "homesteadBlock": 0,\n       "eip155Block": 0,\n       "eip158Block": 0\n                },\n     "nonce": "0x0000000000000061",\n     "timestamp": "0x0",\n     "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",\n     "gasLimit": "0x8000000",\n     "difficulty": "0x100",\n     "mixhash": "0x0000000000000000000000000000000000000000000000000000000000000000",\n     "coinbase": "0x3333333333333333333333333333333333333333",\n     "alloc": {}\n}\n')),(0,o.kt)("p",null,"(",(0,o.kt)("a",{parentName:"p",href:"https://ethereum.stackexchange.com/a/2377/2040"},"info about the genesis file"),")"),(0,o.kt)("h3",{id:"initialize-an-ethereum-node"},"Initialize an Ethereum Node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ geth --datadir /projects/local_ethereum_blockchain/node1 init /projects/local_ethereum_blockchain/genesis.json\n")),(0,o.kt)("h3",{id:"start-the-ethereum-node"},"Start the Ethereum Node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ geth --datadir /projects/local_ethereum_blockchain/node1 --networkid 1000 console\n")),(0,o.kt)("h3",{id:"initialize-another-ethereum-node"},"Initialize Another Ethereum Node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ geth --datadir /projects/local_ethereum_blockchain/node-2 init /projects/local_ethereum_blockchain/genesis.json\n")),(0,o.kt)("h3",{id:"start-the-2nd-ethereum-node"},"Start the 2nd Ethereum Node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ geth --datadir /projects/local_ethereum_blockchain/node-2 --port 30304 --nodiscover --networkid 1000 console\n")),(0,o.kt)("h3",{id:"connect-one-node-to-the-other"},"Connect One Node to the Other"),(0,o.kt)("p",null,"In one geth console :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> admin.nodeInfo.enode\n")),(0,o.kt)("p",null,"In the other console :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> admin.addPeer( <the enode value from the first console> )\n")),(0,o.kt)("h2",{id:"useful-geth-commands"},"Useful geth Commands"),(0,o.kt)("h3",{id:"node-info"},"Node info"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> admin.nodeInfo\n")),(0,o.kt)("h3",{id:"peers"},"Peers"),(0,o.kt)("p",null,"Show peers"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> admin.peers\n")),(0,o.kt)("p",null,"How many peers ?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> admin.peers.length\n")),(0,o.kt)("h3",{id:"create-an-account"},"Create an Account"),(0,o.kt)("p",null,"You need an account to do be able to do things like mining"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> personal.newAccount()\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"And make sure you remember/save the password!")),(0,o.kt)("h3",{id:"unlock-account"},"Unlock Account"),(0,o.kt)("p",null,"Neccessary before some actions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> personal.unlockAccount( eth.accounts[0] )\n")),(0,o.kt)("h3",{id:"start-mining"},"Start Mining"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> miner.start(1)\n")),(0,o.kt)("p",null,"The first block may take a while to mine, allow a few minutes"),(0,o.kt)("h3",{id:"stop-mining"},"Stop Mining"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> miner.stop()\n")),(0,o.kt)("h3",{id:"current-block-number"},"Current Block Number"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> eth.blockNumber\n")),(0,o.kt)("h3",{id:"details-of-current-block"},"Details of Current Block"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> eth.getBlock( eth.blockNumber )\n")),(0,o.kt)("h3",{id:"which-node-had-mined-the-last-block"},"Which Node had Mined the Last Block"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> eth.getBlock(eth.blockNumber).miner\n")),(0,o.kt)("h3",{id:"account-balance-in-ether"},"Account Balance in Ether"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> web3.fromWei(eth.getBalance(eth.accounts[0]))\n")),(0,o.kt)("h3",{id:"transfer-ether-between-accounts"},"Transfer Ether Between Accounts"),(0,o.kt)("p",null,"First get the account numbers by doing"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"> eth.accounts")),(0,o.kt)("p",null,"Then unlock the account you are sending from"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"> personal.unlockAccount( <from account> )")),(0,o.kt)("p",null,"eg."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"> personal.unlockAccount(eth.accounts[0])")),(0,o.kt)("p",null,"Finally transfer 1 ether"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'> eth.sendTransaction({from: "<from account>", to: "<to account>", value: web3.toWei(1, "ether")})\n')),(0,o.kt)("h3",{id:"exit"},"Exit"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> exit\n")),(0,o.kt)("p",null,"(This will also stop the node from running if it was started using ",(0,o.kt)("inlineCode",{parentName:"p"},"$ geth console")," (as opposed to ",(0,o.kt)("inlineCode",{parentName:"p"},"$ geth attach"),"))"),(0,o.kt)("h2",{id:"connect-to-other-nodes-on-your-network"},"Connect to Other Nodes on Your Network"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Get the IP of the node : ",(0,o.kt)("inlineCode",{parentName:"p"},"$ ifconfig|grep netmask|awk '{print $2}'"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Get the enode of the node : ",(0,o.kt)("inlineCode",{parentName:"p"},"> admin.nodeInfo.enode"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"REPLACE ",(0,o.kt)("inlineCode",{parentName:"p"},"[::]")," in the enode string with the ",(0,o.kt)("inlineCode",{parentName:"p"},"[<ip address>]"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On your console ",(0,o.kt)("inlineCode",{parentName:"p"},"> admin.addPeer(< the enode string with the ip address in it>)")))))}u.isMDXComponent=!0}}]);