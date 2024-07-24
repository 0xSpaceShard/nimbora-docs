"use strict";(self.webpackChunknimbora_yield_dex=self.webpackChunknimbora_yield_dex||[]).push([[6925],{7439:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var n=t(4848),s=t(8453);const r={id:"pendle",title:"Pendle Strategy",sidebar_position:4,sidebar_class_name:"hidden"},o=void 0,l={id:"concepts/products/earn/pendle",title:"Pendle Strategy",description:'This strategy allow users to earn interest on their tokens from yield trading: Pendle Pools offer a novel way for users to participate in yield trading and earn interest on their tokens by leveraging future yield streams from various DeFi protocols.These pools facilitate the trading of future yield streams derived from underlying DeFi protocols. Users can deposit their tokens into these pools, thereby providing liquidity to the protocol. In return, they receive "Pendle pool tokens" representing their share of the pool.',source:"@site/docs/concepts/products/earn/04-strategy-pendle.md",sourceDirName:"concepts/products/earn",slug:"/concepts/products/earn/pendle",permalink:"/docs/concepts/products/earn/pendle",draft:!1,unlisted:!1,editUrl:"https://github.com/0xSpaceShard/nimbora_yields_l2/docs/concepts/products/earn/04-strategy-pendle.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"pendle",title:"Pendle Strategy",sidebar_position:4,sidebar_class_name:"hidden"},sidebar:"strategiesSidebar",previous:{title:"npfUSDC Strategy",permalink:"/docs/concepts/products/earn/pendle_lp_integration/npfUSDC"},next:{title:"Liquity Strategy",permalink:"/docs/concepts/products/borrow/liquity"}},d={},a=[{value:"Source of yields",id:"source-of-yields",level:3},{value:"Potential Loss",id:"potential-loss",level:3},{value:"What is PENDLE",id:"what-is-pendle",level:3},{value:"Understanding Risks Associated with Pendle",id:"understanding-risks-associated-with-pendle",level:3},{value:"Stay Tuned for Upgrades",id:"stay-tuned-for-upgrades",level:3}];function c(e){const i={a:"a",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"This strategy allow users to earn interest on their tokens from yield trading:"}),' Pendle Pools offer a novel way for users to participate in yield trading and earn interest on their tokens by leveraging future yield streams from various DeFi protocols.These pools facilitate the trading of future yield streams derived from underlying DeFi protocols. Users can deposit their tokens into these pools, thereby providing liquidity to the protocol. In return, they receive "Pendle pool tokens" representing their share of the pool.']}),"\n",(0,n.jsx)(i.p,{children:"This strategy combines multiple steps unto multiple protocol:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"underling is deposited in the pendle LP strategy yield bearing token (SDAI, WSTETH...). It can use a DEX for semi-liquid tokens such as LRT or LST."}),"\n",(0,n.jsx)(i.li,{children:"The yield bearing token is deposited into Pendle standardised yield token"}),"\n",(0,n.jsxs)(i.li,{children:["The SY token is splitted into PT (principal token) and YT (yield token), more details ",(0,n.jsx)(i.a,{href:"https://docs.pendle.finance/ProtocolMechanics/YieldTokenization/Minting",children:"here"})]}),"\n",(0,n.jsx)(i.li,{children:"Those tokens are swapped to get the pool ratio of PT and SY tokens"}),"\n",(0,n.jsx)(i.li,{children:"Once swapped, tokens are deposited into Pendle Pool to provide liquidity"}),"\n",(0,n.jsx)(i.li,{children:"Pool tokens issued are finally sent to a Token locker protocol (PENPIE) to boost $PENDLE rewards"}),"\n",(0,n.jsx)(i.li,{children:"$PENDLE rewards are sold for more underlying and compounded into the strategy"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"alt",src:t(4263).A+"",width:"2150",height:"1054"})}),"\n",(0,n.jsx)(i.h3,{id:"source-of-yields",children:"Source of yields"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Swap fees (from yield trading)"}),"\n",(0,n.jsx)(i.li,{children:"underlying yields: implied + real APR"}),"\n",(0,n.jsx)(i.li,{children:"PENDLE incentives"}),"\n",(0,n.jsx)(i.li,{children:"Potential points depending of the strategy"}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"potential-loss",children:"Potential Loss"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"trading fees when zapping tokens"}),"\n",(0,n.jsx)(i.li,{children:"Impermanent loss (negligeable since correlated tokens)"}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["More about LP profitability ",(0,n.jsx)(i.a,{href:"https://medium.com/pendle/evaluating-performance-of-pendle-liquidity-pools-part-1-f81e6957837d",children:"here"})]}),"\n",(0,n.jsx)(i.h3,{id:"what-is-pendle",children:"What is PENDLE"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Protocol for Yield Tokenization: PENDLE is a protocol that facilitates the tokenization of future yield streams from decentralized finance (DeFi) protocols. It allows users to trade these yield streams in the form of principal tokens (PT) and yield tokens (YT)."}),"\n",(0,n.jsx)(i.li,{children:"Innovative Yield Trading: PENDLE introduces innovative mechanisms such as Pendle Pools, which enable users to trade future yield streams before they are realized. This allows users to speculate on future yield movements and potentially earn profits from them."}),"\n",(0,n.jsx)(i.li,{children:"Splitting of Tokens: PENDLE splits the yield-bearing tokens into principal tokens (PT) and yield tokens (YT). PT represents the principal amount deposited, while YT represents the future yield generated by the deposited assets."}),"\n",(0,n.jsx)(i.li,{children:"Liquidity Provision: Users can provide liquidity to Pendle Pools by depositing their tokens, thereby participating in the tokenization and trading of future yield streams. In return, they receive Pendle tokens representing their share of the pool."}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"understanding-risks-associated-with-pendle",children:"Understanding Risks Associated with Pendle"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Smart Contract Risk"}),":"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Pendle's smart contracts have undergone rigorous audits by six of crypto's most respected firms to ensure their security."}),"\n",(0,n.jsx)(i.li,{children:"All of Pendle's smart contracts are open source, allowing anyone to monitor the codebase and identify potential vulnerabilities."}),"\n",(0,n.jsx)(i.li,{children:"Despite these measures, Pendle, like other DeFi protocols, remains susceptible to smart contract vulnerabilities and malicious attacks."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Interaction with Third-party Protocols"}),":"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Pendle interacts with third-party protocols and contracts, introducing additional risk associated with the security and reliability of these external systems."}),"\n",(0,n.jsx)(i.li,{children:"Pendle explicitly disclaims responsibility for any funds lost due to exploits in third-party contracts, highlighting the importance of due diligence by users when engaging with such protocols."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"stay-tuned-for-upgrades",children:"Stay Tuned for Upgrades"}),"\n",(0,n.jsx)(i.p,{children:"Keep an eye on our updates as we roll out new features and advanced strategies to enhance your earning potential."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsxs)(i.strong,{children:["Join our ",(0,n.jsx)(i.a,{href:"http://discord.gg/nimbora",children:"Discord"})," for alpha and early notifications \ud83d\ude80"]})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://discord.gg/nimbora",children:(0,n.jsx)(i.img,{alt:"Nimbora Discord",src:t(1485).A+"",width:"2096",height:"784"})})}),"\n",(0,n.jsxs)(i.p,{children:["Stay tuned for updates as we continue to bring more 1-click yield strategies to life. Follow ",(0,n.jsx)(i.a,{href:"https://x.com/Nimbora_",children:"Nimbora on X"})," (Twitter) or ",(0,n.jsx)(i.a,{href:"https://medium.com/@Nimbora",children:"Medium"}),"."]}),"\n",(0,n.jsx)(i.h1,{id:"about-nimbora",children:(0,n.jsx)(i.strong,{children:"About Nimbora"})}),"\n",(0,n.jsx)(i.p,{children:"Nimbora is a Starknet-based omnichain 1-click yield strategies platform that enables users to engage with Layer 1 protocols at a fraction of the cost. Discover the best of Ethereum protocols and optimize your DeFi strategies with Nimbora."}),"\n",(0,n.jsxs)(i.p,{children:["\ud83d\udc27\ud83c\udf10\xa0",(0,n.jsx)(i.a,{href:"https://www.nimbora.io/",children:"Website"})]}),"\n",(0,n.jsxs)(i.p,{children:["\ud83d\udc27\ud83d\udc68\u200d\ud83d\udcbb\xa0",(0,n.jsx)(i.a,{href:"https://app.nimbora.io/",children:"DApp"})]}),"\n",(0,n.jsxs)(i.p,{children:["\ud83d\udc27\ud83d\udc26\xa0",(0,n.jsx)(i.a,{href:"https://twitter.com/Nimbora_",children:"Twitter"})]}),"\n",(0,n.jsxs)(i.p,{children:["\ud83d\udc27\ud83d\udc4b\xa0",(0,n.jsx)(i.a,{href:"http://discord.gg/nimbora",children:"Discord"})]}),"\n",(0,n.jsxs)(i.p,{children:["\ud83d\udc27\ud83d\udcbc\xa0",(0,n.jsx)(i.a,{href:"https://www.linkedin.com/company/nimbora/",children:"LinkedIn"})]}),"\n",(0,n.jsxs)(i.p,{children:["\ud83d\udc27\ud83d\udcd6\xa0",(0,n.jsx)(i.a,{href:"https://medium.com/@Nimbora",children:"Medium"})]}),"\n",(0,n.jsxs)(i.p,{children:["\ud83d\udc27\ud83d\uddde\ufe0f\xa0",(0,n.jsx)(i.a,{href:"https://docs.nimbora.io/",children:"Docs"})]}),"\n",(0,n.jsxs)(i.p,{children:["\ud83d\udc27\ud83d\udee1\xa0",(0,n.jsx)(i.a,{href:"https://github.com/0xSpaceShard/nimbora_audit_report_yield_dex/blob/main/Nimbora%20Audit%20Report.pdf",children:"Audit"})]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},4263:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/pendle-9214a72b377e50bac2ddd3d439cfc9b4.png"},1485:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/Discord-86c95212a6fbf0f698a8c9f4c4f83280.png"},8453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>l});var n=t(6540);const s={},r=n.createContext(s);function o(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);