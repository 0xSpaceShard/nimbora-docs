"use strict";(self.webpackChunknimbora_yield_dex=self.webpackChunknimbora_yield_dex||[]).push([[714],{7217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var s=n(4848),r=n(8453);const a={id:"nstUSD",title:"nstUSD Strategy",sidebar_position:3,sidebar_class_name:"hidden"},o=void 0,i={id:"concepts/products/earn/nstUSD",title:"nstUSD Strategy",description:"This strategy allows users to leverage their USDC holdings by minting stUSD, generating yields through RWAs and DeFi assets in Angle Protocol\u2019s reserves.",source:"@site/docs/concepts/products/earn/03-strategy-angle.md",sourceDirName:"concepts/products/earn",slug:"/concepts/products/earn/nstUSD",permalink:"/docs/concepts/products/earn/nstUSD",draft:!1,unlisted:!1,editUrl:"https://github.com/0xSpaceShard/nimbora_yields_l2/docs/concepts/products/earn/03-strategy-angle.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"nstUSD",title:"nstUSD Strategy",sidebar_position:3,sidebar_class_name:"hidden"},sidebar:"strategiesSidebar",previous:{title:"sSTRK  Strategy",permalink:"/docs/concepts/products/earn/sSTRK"},next:{title:"npeETH Strategy",permalink:"/docs/concepts/products/earn/pendle_lp_integration/npeETH"}},c={},d=[{value:"About Angle",id:"about-angle",level:2},{value:"Get Started",id:"get-started",level:2},{value:"Your Earning Starts Immediately!",id:"your-earning-starts-immediately",level:2},{value:"How to request a withdrawal",id:"how-to-request-a-withdrawal",level:2},{value:"Stay Tuned for Upgrades",id:"stay-tuned-for-upgrades",level:3}];function h(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"This strategy allows users to leverage their USDC holdings"})," by minting stUSD, generating yields through RWAs and DeFi assets in Angle Protocol\u2019s reserves."]}),"\n",(0,s.jsx)(t.h2,{id:"about-angle",children:"About Angle"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://www.angle.money/",children:"Angle"})," is a DeFi Protocol specializing in building resilient stablecoin infrastructures. The Protocol\u2019s main products are USDA, the most reliable USD stablecoin, and EURA (formerly agEUR), the most traded Euro stablecoin. Known for its innovative stablecoin mechanisms and reliability, Angle is ranked among the safest DeFi protocols on DeFiSafety. Backed by Andreessen Horowitz (a16z), Angle operates as a Decentralized Autonomous Organization (DAO), ensuring community-driven governance with its veANGLE token used for voting governance proposals. Angle Labs, the main contributor to Angle Protocol, also powers ",(0,s.jsx)(t.a,{href:"https://merkl.xyz/",children:"Merkl"}),", a platform enabling foundations, DAOs, and protocols such as Arbitrum, Uniswap, or Aave to create tailored and efficient on-chain incentive programs to optimize their liquidity and growth."]}),"\n",(0,s.jsx)(t.h2,{id:"get-started",children:"Get Started"}),"\n",(0,s.jsxs)(t.p,{children:["Visit Nimbora dApp via invite link and connect your Starknet wallet (",(0,s.jsx)(t.a,{href:"https://braavos.app/",children:"Braavos"}),"\xa0or\xa0",(0,s.jsx)(t.a,{href:"https://argent.xyz/",children:"ArgentX"}),")."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt",src:n(3444).A+"",width:"623",height:"349"})}),"\n",(0,s.jsx)(t.p,{children:"Enter the amount of ETH you want to deposit, or click on the small buttons below the box (25%, 50%, 75%, 100%) to set a desired percentage of the balance you want to deposit."}),"\n",(0,s.jsx)(t.p,{children:"Enter the amount you want to deposit or click on the buttons to set a desired percentage of your balance you want to deposit."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt",src:n(1585).A+"",width:"1296",height:"535"})}),"\n",(0,s.jsxs)(t.p,{children:['When you\'ve selected the token amount to deposit, click on "deposit" and follow the prompts on your wallet (',(0,s.jsx)(t.a,{href:"https://braavos.app/",children:"Braavos"}),"\xa0or\xa0",(0,s.jsx)(t.a,{href:"https://argent.xyz/",children:"ArgentX"}),") to complete the transaction."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt",src:n(891).A+"",width:"1075",height:"697"})}),"\n",(0,s.jsx)(t.p,{children:"Once the transaction has been accepted on the network, a popup will appear at the bottom right of the screen to let you know."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt",src:n(9257).A+"",width:"361",height:"80"})}),"\n",(0,s.jsx)(t.p,{children:"And that's it, you should be able to see your balance of Nimbora yield token into the portfolio section or directly into your wallet browser."}),"\n",(0,s.jsx)(t.h2,{id:"your-earning-starts-immediately",children:"Your Earning Starts Immediately!"}),"\n",(0,s.jsxs)(t.p,{children:["Your yield comes from several sources - \xa0",(0,s.jsx)(t.strong,{children:"nstUSD  base yield"})," +\xa0",(0,s.jsx)(t.strong,{children:"$STRK"}),"\xa0",(0,s.jsx)(t.strong,{children:"incentives"}),"\xa0+\xa0",(0,s.jsx)(t.strong,{children:"Nimbora"}),"\xa0",(0,s.jsx)(t.strong,{children:"boost."})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Here's an APR breakdown of the nstUSD strategy"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt",src:n(3444).A+"",width:"623",height:"349"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Base"}),": Represents default strategy yield that auto-compounds daily."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Boost"}),": Represents incentives provided by the Nimbora team using the ",(0,s.jsx)(t.a,{href:"https://medium.com/@Nimbora/nimbora-and-starknet-catalyst-program-14cc7f2f1ab5",children:"Starknet Catalyst grant"})," that are claimable every week at the ",(0,s.jsx)(t.a,{href:"https://app.nimbora.io/rewards/",children:"rewards page"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Incentives"}),": Represents incentives provided by the Starknet Foundation as a part of the ",(0,s.jsx)(t.a,{href:"https://medium.com/@Nimbora/introducing-defi-spring-2-0-bigger-bolder-better-364bb96b02d6",children:"DeFi Spring 2.0"})," that are claimable every week at the ",(0,s.jsx)(t.a,{href:"https://app.nimbora.io/rewards/",children:"rewards page"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Ekubo LP"})," Providing Nimbora yield bearing tokens as liquidity on Ekubo is tracked and added to the total claimable STRK amount at the ",(0,s.jsx)(t.a,{href:"https://app.nimbora.io/rewards/",children:"rewards page"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"how-to-request-a-withdrawal",children:"How to request a withdrawal"}),"\n",(0,s.jsx)(t.p,{children:"You can choose between two withdrawal options\u200a-\u200aInstant and Normal."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt",src:n(8957).A+"",width:"1264",height:"669"})}),"\n",(0,s.jsx)(t.p,{children:"Instant withdrawals factor in the price impact and set slippage."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt",src:n(6947).A+"",width:"1270",height:"635"})}),"\n",(0,s.jsx)(t.p,{children:"Normal withdrawals are not synchronous such as deposits and take between 12 and 48 hours to be processed."}),"\n",(0,s.jsx)(t.p,{children:"Once you have selected the withdraw tab, you will need to decide on the amount you want to withdraw. This could be all or a portion of your assets."}),"\n",(0,s.jsxs)(t.p,{children:["Click on the 'withdraw' button and follow the prompts on your wallet (",(0,s.jsx)(t.a,{href:"https://braavos.app/",children:"Braavos"}),"\xa0or\xa0",(0,s.jsx)(t.a,{href:"https://argent.xyz/",children:"ArgentX"}),") to complete the transaction."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt",src:n(2456).A+"",width:"1083",height:"712"})}),"\n",(0,s.jsx)(t.p,{children:"Once the transaction has been accepted on the network, a popup will appear at the bottom right of the screen to let you know."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt",src:n(9570).A+"",width:"384",height:"92"})}),"\n",(0,s.jsx)(t.p,{children:"You can consult all of your recent transactions in the wallet section. Your transaction should be here."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt",src:n(5210).A+"",width:"523",height:"494"})}),"\n",(0,s.jsx)(t.p,{children:"And that's it, you should see your pending request in the navbar."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt",src:n(6641).A+"",width:"521",height:"224"})}),"\n",(0,s.jsx)(t.p,{children:"Nimbora takes over the task of processing this request. This involves preparing your assets in order to be transferred back to your wallet, a process that is handled entirely behind the scenes to ensure a smooth and efficient operation. Once the request is ready to be claimed, Nimbora relayer will handle it and send it directly into your wallet."}),"\n",(0,s.jsx)(t.h3,{id:"stay-tuned-for-upgrades",children:"Stay Tuned for Upgrades"}),"\n",(0,s.jsx)(t.p,{children:"Keep an eye on our updates as we roll out new features and advanced strategies to enhance your earning potential."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.strong,{children:["Join our ",(0,s.jsx)(t.a,{href:"http://discord.gg/nimbora",children:"Discord"})," for alpha and early notifications \ud83d\ude80"]})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://discord.gg/nimbora",children:(0,s.jsx)(t.img,{alt:"Nimbora Discord",src:n(1485).A+"",width:"2096",height:"784"})})}),"\n",(0,s.jsxs)(t.p,{children:["Stay tuned for updates as we continue to bring more 1-click yield strategies to life. Follow ",(0,s.jsx)(t.a,{href:"https://x.com/Nimbora_",children:"Nimbora on X"})," (Twitter) or ",(0,s.jsx)(t.a,{href:"https://medium.com/@Nimbora",children:"Medium"}),"."]}),"\n",(0,s.jsx)(t.h1,{id:"about-nimbora",children:(0,s.jsx)(t.strong,{children:"About Nimbora"})}),"\n",(0,s.jsx)(t.p,{children:"Nimbora is a Starknet-based omnichain 1-click yield strategies platform that enables users to engage with Layer 1 protocols at a fraction of the cost. Discover the best of Ethereum protocols and optimize your DeFi strategies with Nimbora."}),"\n",(0,s.jsxs)(t.p,{children:["\ud83d\udc27\ud83c\udf10\xa0",(0,s.jsx)(t.a,{href:"https://www.nimbora.io/",children:"Website"})]}),"\n",(0,s.jsxs)(t.p,{children:["\ud83d\udc27\ud83d\udc68\u200d\ud83d\udcbb\xa0",(0,s.jsx)(t.a,{href:"https://app.nimbora.io/",children:"DApp"})]}),"\n",(0,s.jsxs)(t.p,{children:["\ud83d\udc27\ud83d\udc26\xa0",(0,s.jsx)(t.a,{href:"https://twitter.com/Nimbora_",children:"Twitter"})]}),"\n",(0,s.jsxs)(t.p,{children:["\ud83d\udc27\ud83d\udc4b\xa0",(0,s.jsx)(t.a,{href:"http://discord.gg/nimbora",children:"Discord"})]}),"\n",(0,s.jsxs)(t.p,{children:["\ud83d\udc27\ud83d\udcbc\xa0",(0,s.jsx)(t.a,{href:"https://www.linkedin.com/company/nimbora/",children:"LinkedIn"})]}),"\n",(0,s.jsxs)(t.p,{children:["\ud83d\udc27\ud83d\udcd6\xa0",(0,s.jsx)(t.a,{href:"https://medium.com/@Nimbora",children:"Medium"})]}),"\n",(0,s.jsxs)(t.p,{children:["\ud83d\udc27\ud83d\uddde\ufe0f\xa0",(0,s.jsx)(t.a,{href:"https://docs.nimbora.io/",children:"Docs"})]}),"\n",(0,s.jsxs)(t.p,{children:["\ud83d\udc27\ud83d\udee1\xa0",(0,s.jsx)(t.a,{href:"https://github.com/0xSpaceShard/nimbora_audit_report_yield_dex/blob/main/Nimbora%20Audit%20Report.pdf",children:"Audit"})]})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1485:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/Discord-86c95212a6fbf0f698a8c9f4c4f83280.png"},1585:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/deposit-a963c42bde833b866def5268671da1e6.png"},9257:(e,t,n)=>{n.d(t,{A:()=>s});const s="data:image/png;base64,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"},891:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/deposit_confrm-c7d6470f28ace2bc78b0803a79a1c646.png"},3444:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/main-55177faa8f3acb3d19a22ecda9be7ac8.png"},5210:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/recent-5de22b374df76207a34c60ce98b86c6e.png"},8957:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/withdraw-88d28424cfa7e92f8917620abca2b8bb.png"},9570:(e,t,n)=>{n.d(t,{A:()=>s});const s="data:image/png;base64,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"},2456:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/withdraw_confirm-5e4503fd06aaf319d4464f21cec90c3f.png"},6947:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/withdraw_normal-61afb241b8de321d0feac699241bc5f7.png"},6641:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/withdraw_pending-4bdebebd4205844e90ad610dd0fe38f3.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var s=n(6540);const r={},a=s.createContext(r);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);