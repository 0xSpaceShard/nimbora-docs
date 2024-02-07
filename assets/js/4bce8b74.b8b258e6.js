"use strict";(self.webpackChunknimbora_yield_dex=self.webpackChunknimbora_yield_dex||[]).push([[836],{8024:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=t(7624),r=t(2172);const i={id:"l1-contracts",title:"L1 Contracts"},o="L1 Contracts",l={id:"contracts/guides/l1-contracts",title:"L1 Contracts",description:"Prerequisites",source:"@site/docs/contracts/guides/01-L1-Contracts.md",sourceDirName:"contracts/guides",slug:"/contracts/guides/l1-contracts",permalink:"/docs/contracts/guides/l1-contracts",draft:!1,unlisted:!1,editUrl:"https://github.com/0xSpaceShard/nimbora_yields_l2/docs/contracts/guides/01-L1-Contracts.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"l1-contracts",title:"L1 Contracts"},sidebar:"tutorialSidebar",next:{title:"L2 Contracts",permalink:"/docs/contracts/guides/l2-contracts"}},a={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation Process",id:"installation-process",level:2},{value:"Compile",id:"compile",level:2},{value:"Testing",id:"testing",level:2},{value:"Running Scripts",id:"running-scripts",level:2},{value:"Deployment with Hardhat-Deploy",id:"deployment-with-hardhat-deploy",level:2},{value:"Environment Setup",id:"environment-setup",level:2},{value:"Building a new strategy",id:"building-a-new-strategy",level:2},{value:"Deploying pooling manager and adding new strategies",id:"deploying-pooling-manager-and-adding-new-strategies",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"l1-contracts",children:"L1 Contracts"}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"Ensure your system meets the following requirements:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Node.js"}),": Version 12 or later. ",(0,s.jsx)(n.a,{href:"https://nodejs.org/",children:"Download Node.js"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Package Manager"}),": Either Yarn or npm. ",(0,s.jsx)(n.a,{href:"https://yarnpkg.com/getting-started/install",children:"Install Yarn"})," | ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/get-npm",children:"Install npm"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"installation-process",children:"Installation Process"}),"\n",(0,s.jsx)(n.p,{children:"Follow these steps to set up the Yield Dex L1 environment:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Install Dependencies"}),": Run the following command in your terminal to install the necessary packages:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"yarn\n"})}),"\n",(0,s.jsx)(n.h2,{id:"compile",children:"Compile"}),"\n",(0,s.jsx)(n.p,{children:"To compile the smart contracts, use the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"yarn hardhat compile\n"})}),"\n",(0,s.jsx)(n.h2,{id:"testing",children:"Testing"}),"\n",(0,s.jsx)(n.p,{children:"Run the tests to verify the correct functioning of the contracts:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"yarn hardhat test\n"})}),"\n",(0,s.jsx)(n.h2,{id:"running-scripts",children:"Running Scripts"}),"\n",(0,s.jsx)(n.p,{children:"To run deployment scripts or any other custom scripts, use:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"yarn hardhat run <script-path> --network <chosen-network>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Scripts are located in the scipts folder."}),"\n",(0,s.jsx)(n.h2,{id:"deployment-with-hardhat-deploy",children:"Deployment with Hardhat-Deploy"}),"\n",(0,s.jsx)(n.p,{children:"For deploying your contracts with Hardhat-Deploy, use the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"yarn hardhat deploy --network <chosen-network>\n"})}),"\n",(0,s.jsx)(n.p,{children:"This command will execute the deployment scripts using Hardhat-Deploy, deploying your contracts to the specified network."}),"\n",(0,s.jsx)(n.h2,{id:"environment-setup",children:"Environment Setup"}),"\n",(0,s.jsx)(n.p,{children:"For deploying your contracts with Hardhat-Deploy, use the following command:"}),"\n",(0,s.jsx)(n.p,{children:"Before running the above commands, make sure to set up your environment variables. Change the .env.example file to .env and update the values file in the root directory of your project and fill it as per the example provided in .env.example :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"ALCHEMY_KEY key=<Your Alchemy Key>\nPRIVATE_KEY=<Your Private Key>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Alchemy API: Your project ID from Infura, used to connect to Ethereum networks.\nPRIVATE_KEY: Your Ethereum private key, used for transactions and contract deployment."}),"\n",(0,s.jsx)(n.h2,{id:"building-a-new-strategy",children:"Building a new strategy"}),"\n",(0,s.jsx)(n.p,{children:"You can build a new strategy building contract inheriting from StrategyBase.sol, you'll need to override virtual methods and add potential additional logic related to the strategy you want to build. 2 built strategies are proposed as exemples savingDai.sol and uniswapV3.sol"}),"\n",(0,s.jsx)(n.h2,{id:"deploying-pooling-manager-and-adding-new-strategies",children:"Deploying pooling manager and adding new strategies"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Fill the scripts/config.ts with deployed pooling manager on L2 and deploy the l1 poolingManager using hardhat-deploy. Add this new deployed address in the config.ts"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"(only for goerli): deploy mock contract for your strategy if it is not deployed on this network like it's done with saving dai(cc deploy/savingDai.ts). Or setup the environment of the strategy if it exists like uniswapV3 where you need to deploy a new pool and add liquidity  (cc scripts/deployUniPool.ts and scripts/initAndAddLiq.ts)"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add the required addresses in the config.ts for your strategy (uniV3Router for exemple)"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Deploy the strategy using hardhat-deploy"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Register the strategy in the pooling Manager running a script (cc scripts/registerStrategies.ts)"}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},2172:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>o});var s=t(1504);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);