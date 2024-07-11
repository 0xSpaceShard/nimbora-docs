"use strict";(self.webpackChunknimbora_yield_dex=self.webpackChunknimbora_yield_dex||[]).push([[3349],{9542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=n(4848),s=n(8453);const o={id:"npfUSDC",title:"npfUSDC Strategy",sidebar_position:3,sidebar_class_name:"hidden"},r=void 0,a={id:"concepts/products/earn/pendle_lp_integration/npfUSDC",title:"npfUSDC Strategy",description:"Pendle LP strategy, earn with USDC",source:"@site/docs/concepts/products/earn/pendle_lp_integration/03-flux_usdc.md",sourceDirName:"concepts/products/earn/pendle_lp_integration",slug:"/concepts/products/earn/pendle_lp_integration/npfUSDC",permalink:"/docs/concepts/products/earn/pendle_lp_integration/npfUSDC",draft:!1,unlisted:!1,editUrl:"https://github.com/0xSpaceShard/nimbora_yields_l2/docs/concepts/products/earn/pendle_lp_integration/03-flux_usdc.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"npfUSDC",title:"npfUSDC Strategy",sidebar_position:3,sidebar_class_name:"hidden"},sidebar:"strategiesSidebar",previous:{title:"nppETH Strategy",permalink:"/docs/concepts/products/earn/pendle_lp_integration/nppETH"},next:{title:"sSTRK  Strategy",permalink:"/docs/concepts/products/earn/sSTRK"}},l={},d=[{value:"Get Started",id:"get-started",level:2},{value:"Your Earning Starts Immediately",id:"your-earning-starts-immediately",level:2},{value:"How to Withdraw",id:"how-to-withdraw",level:2},{value:"What is FLUX",id:"what-is-flux",level:3},{value:"Understanding Risks Associated with Flux",id:"understanding-risks-associated-with-flux",level:3},{value:"Stay Tuned for Upgrades",id:"stay-tuned-for-upgrades",level:3}];function c(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Pendle LP strategy, earn with USDC"})}),"\n",(0,i.jsx)(t.p,{children:"FUSDC is an interest-bearing token received when depositing USDC into Flux Finance's lending pools. FUSDC represents a user's deposited USDC plus accrued interest. Users earn interest on their deposited USDC in the form of FUSDC, which grows over time based on the interest rate offered by the lending pool."}),"\n",(0,i.jsxs)(t.h2,{id:"get-started",children:["Get Started",(0,i.jsx)(t.a,{href:"https://docs.nimbora.io/docs/concepts/products/earn/pendle_lp_integration/npfUSDC#get-started"})]}),"\n",(0,i.jsxs)(t.p,{children:["Visit Nimbora dApp via invite link and connect your Starknet wallet (",(0,i.jsx)(t.a,{href:"https://braavos.app/",children:"Braavos"}),"\xa0or\xa0",(0,i.jsx)(t.a,{href:"https://argent.xyz/",children:"ArgentX"}),")."]}),"\n",(0,i.jsx)(t.p,{children:"Enter the amount of USDC you want to deposit, or click on the small buttons below the box (25%, 50%, 75%, 100%) to set a desired percentage of the balance you want to deposit."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Untitled",src:n(4810).A+"",width:"486",height:"329"})}),"\n",(0,i.jsxs)(t.p,{children:['When you\'ve selected the token amount to deposit, click on "Deposit" button.\n',(0,i.jsx)(t.img,{alt:"Untitled",src:n(8559).A+"",width:"1301",height:"516"})]}),"\n",(0,i.jsxs)(t.p,{children:["Follow the prompts on your wallet (",(0,i.jsx)(t.a,{href:"https://braavos.app/",children:"Braavos"}),"\xa0or\xa0",(0,i.jsx)(t.a,{href:"https://argent.xyz/",children:"ArgentX"}),") to complete the transaction.\n",(0,i.jsx)(t.img,{alt:"Untitled",src:n(8442).A+"",width:"986",height:"715"})]}),"\n",(0,i.jsxs)(t.p,{children:["Once the transaction has been accepted on the network, a popup will appear at the bottom left of the screen to let you know.\n",(0,i.jsx)(t.img,{alt:"Untitled",src:n(615).A+"",width:"344",height:"91"})]}),"\n",(0,i.jsx)(t.p,{children:"As a result, you will receive npfUSDC, which is Liquid Restaking Token (LRT). And that's it, you should be able to see your balance of Nimbora Yield Token in the portfolio section or directly into your wallet browser."}),"\n",(0,i.jsxs)(t.h2,{id:"your-earning-starts-immediately",children:["Your Earning Starts Immediately",(0,i.jsx)(t.img,{src:"https://docs.nimbora.io/docs/concepts/products/earn/pendle_lp_integration/npfUSDC#your-earning-starts-immediately",alt:""})]}),"\n",(0,i.jsxs)(t.p,{children:["Your yield comes from several sources - \xa0",(0,i.jsx)(t.strong,{children:"npfUSDC base yield"}),"\xa0+\xa0",(0,i.jsx)(t.strong,{children:"$STRK"}),"\xa0",(0,i.jsx)(t.strong,{children:"incentives"}),"\xa0+\xa0",(0,i.jsx)(t.strong,{children:"Nimbora"}),"\xa0",(0,i.jsx)(t.strong,{children:"boost."})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Untitled",src:n(4810).A+"",width:"486",height:"329"})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Base"}),": Represents default strategy yield that auto-compounds daily."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Boost"}),": Represents incentives provided by the Nimbora team using the\xa0",(0,i.jsx)(t.a,{href:"https://medium.com/@Nimbora/nimbora-and-starknet-catalyst-program-14cc7f2f1ab5",children:"Starknet Catalyst grant"})," that are claimable every two weeks."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Incentives"}),": Represents incentives provided by the Starknet Foundation as a part of the ",(0,i.jsx)(t.a,{href:"https://medium.com/@Nimbora/introducing-defi-spring-2-0-bigger-bolder-better-364bb96b02d6",children:"DeFi Spring 2.0"})," that are claimable every two weeks."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"With this strategy you are also earning Nimbora points.\nRemember, holding Nimbora yield-bearing tokens gets points based on your balance. The more and longer you hold, the more points you accumulate."}),"\n",(0,i.jsxs)(t.p,{children:["You can always check your leaderboard position and Nimbora points breakdown by clicking on \u2018Points\u2019 section in the upper left corner at app.nimbora.io\n",(0,i.jsx)(t.img,{alt:"Untitled",src:n(7044).A+"",width:"1628",height:"710"})]}),"\n",(0,i.jsxs)(t.h2,{id:"how-to-withdraw",children:["How to Withdraw",(0,i.jsx)(t.a,{href:"https://docs.nimbora.io/docs/concepts/products/earn/pendle_lp_integration/npfUSDC#how-to-withdraw"})]}),"\n",(0,i.jsx)(t.p,{children:"Withdrawal are not synchronous such as deposits.  Withdrawals take between 12 and 48 hours to be processed. A fast withdrawal option should arrive later on."}),"\n",(0,i.jsx)(t.p,{children:"First, you need to decide on the amount you want to withdraw. This could be all or a portion of your assets."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Untitled",src:n(9459).A+"",width:"1310",height:"516"})}),"\n",(0,i.jsxs)(t.p,{children:["Once you've made up your mind, locate and click on the 'withdraw' button and follow the prompts on your wallet (",(0,i.jsx)(t.a,{href:"https://braavos.app/",children:"Braavos"}),"\xa0or\xa0",(0,i.jsx)(t.a,{href:"https://argent.xyz/",children:"ArgentX"}),") to complete the transaction."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Untitled",src:n(41).A+"",width:"975",height:"718"})}),"\n",(0,i.jsx)(t.p,{children:"Once the transaction has been accepted on the network, a popup will appear at the bottom right of the screen to let you know."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Untitled",src:n(6427).A+"",width:"324",height:"88"})}),"\n",(0,i.jsx)(t.p,{children:"You can consult all of your recent transactions in the wallet section. Your transaction should be here."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Untitled",src:n(8400).A+"",width:"474",height:"444"})}),"\n",(0,i.jsx)(t.p,{children:"Nimbora takes over the task of processing this request. This involves preparing your assets in order to be transferred back to your wallet, a process that is handled entirely behind the scenes to ensure a smooth and efficient operation. Once the request is ready to be claimed, Nimbora relayer will handle it and send it directly into your wallet."}),"\n",(0,i.jsx)(t.h3,{id:"what-is-flux",children:"What is FLUX"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Decentralized Lending and Borrowing: Flux Protocol, developed by the Ondo Finance team, facilitates decentralized lending and borrowing. It allows users to lend their assets to earn interest or borrow assets against collateral in a peer-to-pool (P2Pool) model."}),"\n",(0,i.jsx)(t.li,{children:"Support for Permissionless and Permissioned Tokens: Flux Protocol supports both permissionless tokens (e.g., USDC) and permissioned tokens (e.g., OUSG), with permissions enforced on a per-asset basis. This flexibility accommodates various token types and use cases within the protocol."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"understanding-risks-associated-with-flux",children:"Understanding Risks Associated with Flux"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Smart Contract Risk"}),": Flux operates on smart contracts, which are lines of code stored on the blockchain. While these smart contracts are designed to execute transactions autonomously, they are not immune to bugs or vulnerabilities. If there is a flaw in the smart contract's code, it could be exploited by malicious actors, potentially resulting in the loss of funds for lenders."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Oracle Risk"}),": Flux relies on oracles to fetch external data, such as asset prices, to determine variables like interest rates and collateralization ratios. However, if these oracles provide inaccurate or manipulated data, it could lead to incorrect loan liquidations or interest rate adjustments, potentially causing losses for lenders."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Market Risk"}),": The cryptocurrency and DeFi markets are highly volatile. The value of assets used as collateral for loans can fluctuate rapidly, and borrowers may struggle to repay their loans if the value of their collateral drops significantly. In such cases, lenders may face losses if they cannot recover the full value of the loan."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Liquidity Risk"}),": Flux relies on liquidity pools to match lenders with borrowers. If there is insufficient liquidity in the pools, lenders may not be able to withdraw their funds in a timely manner or at the desired exchange rate. Additionally, sudden spikes in demand for loans or withdrawals could lead to slippage or delays in transactions."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Counterparty Risk"}),": While Flux is designed to be decentralized, there is still some counterparty risk associated with lending and borrowing. If a borrower defaults on their loan, lenders may not be able to recover their full principal and interest payments, especially if there are not enough liquidated assets to cover the debt."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Regulatory Risk"}),": The regulatory environment surrounding DeFi and cryptocurrencies is still evolving, and there is uncertainty regarding how regulators will treat these platforms in the future. Changes in regulations or enforcement actions could have a significant impact on the operation of Flux and the value of assets held within the protocol."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"stay-tuned-for-upgrades",children:"Stay Tuned for Upgrades"}),"\n",(0,i.jsx)(t.p,{children:"Keep an eye on our updates as we roll out new features and advanced strategies to enhance your earning potential."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.strong,{children:["Join our ",(0,i.jsx)(t.a,{href:"http://discord.gg/nimbora",children:"Discord"})," for alpha and early notifications \ud83d\ude80"]})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://discord.gg/nimbora",children:(0,i.jsx)(t.img,{alt:"Nimbora Discord",src:n(1485).A+"",width:"2096",height:"784"})})}),"\n",(0,i.jsxs)(t.p,{children:["Stay tuned for updates as we continue to bring more 1-click yield strategies to life. Follow ",(0,i.jsx)(t.a,{href:"https://x.com/Nimbora_",children:"Nimbora on X"})," (Twitter) or ",(0,i.jsx)(t.a,{href:"https://medium.com/@Nimbora",children:"Medium"}),"."]}),"\n",(0,i.jsx)(t.h1,{id:"about-nimbora",children:(0,i.jsx)(t.strong,{children:"About Nimbora"})}),"\n",(0,i.jsx)(t.p,{children:"Nimbora is a Starknet-based omnichain 1-click yield strategies platform that enables users to engage with Layer 1 protocols at a fraction of the cost. Discover the best of Ethereum protocols and optimize your DeFi strategies with Nimbora."}),"\n",(0,i.jsxs)(t.p,{children:["\ud83d\udc27\ud83c\udf10\xa0",(0,i.jsx)(t.a,{href:"https://www.nimbora.io/",children:"Website"})]}),"\n",(0,i.jsxs)(t.p,{children:["\ud83d\udc27\ud83d\udc68\u200d\ud83d\udcbb\xa0",(0,i.jsx)(t.a,{href:"https://app.nimbora.io/",children:"DApp"})]}),"\n",(0,i.jsxs)(t.p,{children:["\ud83d\udc27\ud83d\udc26\xa0",(0,i.jsx)(t.a,{href:"https://twitter.com/Nimbora_",children:"Twitter"})]}),"\n",(0,i.jsxs)(t.p,{children:["\ud83d\udc27\ud83d\udc4b\xa0",(0,i.jsx)(t.a,{href:"http://discord.gg/nimbora",children:"Discord"})]}),"\n",(0,i.jsxs)(t.p,{children:["\ud83d\udc27\ud83d\udcbc\xa0",(0,i.jsx)(t.a,{href:"https://www.linkedin.com/company/nimbora/",children:"LinkedIn"})]}),"\n",(0,i.jsxs)(t.p,{children:["\ud83d\udc27\ud83d\udcd6\xa0",(0,i.jsx)(t.a,{href:"https://medium.com/@Nimbora",children:"Medium"})]}),"\n",(0,i.jsxs)(t.p,{children:["\ud83d\udc27\ud83d\uddde\ufe0f\xa0",(0,i.jsx)(t.a,{href:"https://docs.nimbora.io/",children:"Docs"})]}),"\n",(0,i.jsxs)(t.p,{children:["\ud83d\udc27\ud83d\udee1\xa0",(0,i.jsx)(t.a,{href:"https://github.com/0xSpaceShard/nimbora_audit_report_yield_dex/blob/main/Nimbora%20Audit%20Report.pdf",children:"Audit"})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1485:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/Discord-86c95212a6fbf0f698a8c9f4c4f83280.png"},8559:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/deposit-513938ed9e5ac1824179fb935ad51cbd.png"},615:(e,t,n)=>{n.d(t,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVgAAABbCAIAAAC57QoNAAAgAElEQVR4Ae19eVBbybkvTl4qlVTl1fvnVk29W5XkZupd22SWzJb4cTMv8UwcT8jciQPBdgZMbGJwMGZmAIORjW2B8Qa22YzYhMHImMXYMqsYPPICaASIVRjEIgmDzC4JgSTE0ZHOeRYt2j2SAIE9DOPpU5TdOqeX7/t196+//rrPaRcaXxgBjMB3GAETSU8MUy7fYQSw6hgBjIAVAUwEuClgBDACNCYC3AgwAhgBTAS4DWAEMAI0JgLcCDACGAFMBLgNYAQwAjQmAtwIMAIYAUwEuA1gBDACFgTwqgFuBxgBjAAmAtwGMAIYAWwR4DaAEcAI4KkBbgMYAYyABQHsI8DtACOAEcBEgNsARgAjgC0C3AYwAhgBPDXAbQAjgBGwIIB9BLgdYAQwApgIcBvACHxLENAo6YdCarG/x1LqWfTAFsGzoIfTYgTWCIHM4yaPnxuX/pvVWoVRjVJfFJpXJBkmghXBhSNjBL4BBKRiyuPnxjP/NHV+ubxFMDZI+W8hPX5unFavQFSniECn0zU1NQkXrvb2dr1ev4JCnmtUo9Go0+mea5bPPzOVStXV1WUymdCsdTpdR0cHQRDgJkmSIpEoIyODxWLV1tYaDAYYWaVSLYBt+b+rq8toNMKnMGA2m3t6etLS0gIDAxMSEoRCIcwcxoEBvV5fUVHBZrPHxsbgze9CAFXcpgqA+gRBdHR0oI1KqVTeuHGDxWLl5eUpFAqKslrdJpOpq6sLVk1jY+PExAR8ioKp1WorKiqioqLCwsIKCwtHR0fRpysNf1ll9vi5UVC5/CA/Nkjtn2eBmoLlI6NiOEUEMpls9+7dCQkJrPmLwWBs2bLl6tWrSzQ7tIznGJ6bm4uKitq3b59Go6FpWiQSMRgMtAs5LEuv1ycnJw8ODto/nZqaio+Pd5u/4uPjp6amYJypqSkWi7V161Y3N7eYmJiRkRHwiKIogUDw8ccf/+xnP/v4448FAoF9U3AomEwmO3TokFptIWqVShUSEnLs2LHa2tr6+vrExMS9e/fK5XJQhEgk8vT0TE5OZs1fwcHB27Ztq6ysNJuf1u7U1FRUVNSePXsqKyuFQiGfzw8ODvbz84OZgKzAvwRBxMbGnj9/XigUqlQq9NHqwiRJZmdni8Vi++RL4FNVVeWDXBcuXJibmxOLxcg9azAnJ8c+51XcsVEcrQKYm1qtPnTokEwmo2maoigej+fh4VFcXCwUCisrK319fXNzc0mSpGnaYDAwGIwTJ06w5q/4+Pjt27eHh4dPTEzA3CiKun///vbt2xMTE+vr64VCIZvN3r59O4fDAZnAmM4HBBVOEcHYIOX3ttHzP4wrZQFnVw3s4ZuYmAgJCUlPT7cZ9JzXbdUxBwcHe3p6QN9z2N9scqYoKjs7+4MPPgA1jT7V6/XHjx+/fv26Yf7Kzs5mMBjA2HlCLidPniwpKSFJ0mw219XVBQcHgy7U0NBw4MABuVxuNpv7+vr8/PwEAgGa7WIMhcKYm5sbFxcHWwZFUbdu3QoLCwOl2+sllUp9fX3LyspAQXq9PioqKjU1FeVis9l869Ytb29v+/FHrVaHhoY+fvzYRs5V/6ypqXF1dRWJRPY5LIYPRVHJyclCoVC9cM3MzFAUZTQaF25Y/lcqlTExMfX19fY5r+KOjeJoFcDcUCIYHh7ev3+/RCKBTycmJvbv3w/kAUSAak0QRE5OTmBgIKTXhoaGXbt29fT0wBxomh4dHd2/f//169ftxww02mJhZ4gAssC9m09Hi8UytL/vrEUAhzKYhUKh2LdvX29vL7hjNpvFYjGbzbYxhB4/ftzf308QhFAozMjIqKio0GoXfBrzKbVaLZ/PZ7FYfD4fnXFQFCWTyfLy8thsdnt7O+wzIENgPHM4HH9//9raWqFQuFgrb2hoiI6O9vf3tycCsVh87Nix2dlZoIJGowkKCgKjnEQiCQ0NnZmZAY+MRmNMTIxIJAKBxsZGcJ+maR6PFxMTY2O62/dkmqZhKwTticvlwkxomh4bGwsMDBwYGFiMRzo6Ovz8/MbHx2marqmpCQsLs0GSpmmSJOPi4rKysmCDIwiitbX1zp07/v7+d+7cgUCZzeb+/v68+Usmk8H4YFJDkuTIyEhFRQVqMENp+/v7jx49evDgQbRLoEA5xMdgMMTFxS1WTTDzoaGhyMhIYPHBm6DS9Xo9n8/PyMhAJ0FQYND8bty4oVQqaZp2qDisApgzTdMoEYhEoj179gCrDcbJz89PTU2FFoGN1sDoKCwspGkaNKHa2lqYFgYkEsmePXuGhobgHecDyxLBsMxqC6yOBVZvEQAjKjk5OT8/n6ZpvV4fHR2dkpIyMDBQX1/v7+9fVlYG2haXyz116tTp06fZbDawgXft2gX7ZGNjo4eHh/0jiqIKCwtjY2N7enr6+/tTUlJOnToFpgBcLjcpKUkul7NYrBMnTkATurW11R5ZhULBYDB6e3uh7YfGsXE36HS68PBwQAQymQyaAKAFHD16tLW1laIonU4HWYmm6dra2pUSARgbk5OT0XxQwRzyCKCP2tpaQEY8Hg9NAsNtbW0MBgNSmE6nu3btWkJCgqenJ5jctba2gvoKDg7m8/nA+k1PTwfCiESiyMjIwsJCX1/fK1eu2BOBRqM5evSoWCxmMBg2XQK0isXwUavVUVFRNj0cig0DhfMX/AkCXC43LCyMyWRWVlbW1NT4+fmxWCwocFhY2KVLl4ApzmazPTw8GhsbHSq+LBHIZDIfH5/+/n4bAcBPe4sA3BeJRKGhoTqdTiwWBwUFOdQR8CCfz3eY89I3bYhgcpi69IlJ0Wf1XCj6qX1vWRYU7t9ajS0Ail69RUDTNJfLPX/+vMlkKiwszM7OhqPK6OjooUOHAPlxuVw3N7eGhgZQHkVRt2/fjo6OJghifHw8ICCgs7MToiAQCCIiIrRarUajiYyMhG4tgiCio6NBVwdEAJI47DAwN71eHxMT09HRgVI+fGofAFYAqEWSJNPS0jIyMrRarcFguHXrVkxMDGqwgORgBLbvkw4FQ1vh4OCgj4+Pn5/fzZs3h4aGnDEoaJpOSkrKz89Xq9UHDhxAzVd7XWzuqNVqBoMBB7rCwsLz58/DaYVer2cwGGAcE4lEb775ZmFhoUOSArDU1NQs1iVsykXxkclkTCaTy+Uemr+qq6uhADCVUqk8fPiw/bDJ5XJ3794NpzxDQ0P79++H1pOrq+vt27dh82toaAgODgb1aKM4WgWwULR5mEwmDofz7rvvxsfHi0QijUYDs13MIgC23oEDB8bGxmCPgJk/l4Cg0uIj+LLK2s8f9VCevzDufdOo6KcU/dTeNy0sAG2BicfUpWCTcnRl2wqelQiioqImJycPHz4slUqhzhRFJSQklJeXA7Kw8eepVKpDhw4NDAzU1NQAHoEJ4Zis1WpDQkLq6upgNeh0OtBbnCQCYFOA9oHWNCzLJgBYAxIWTdMKheLgwYPu7u47duzYtWtXV1cXFAambWhocEgQyxIBaFVCofD8+fM7duxwdXU9fPiwQqEAOTtMDoggNTXVGXWghCCA9oeZmZnQ0FAbHoF2jUgk8vX1hTNem3xqa2vT0tJIknSSCFB8Wltbt23bduvWLZVKNTAwEBMTc+LECRtHL4/Hu3jxor3jyaaDzc7OHjlyBNgj9gLPzs4yGAwwbKCKo7MzVC8bPCmKGhkZyc/PDwoKcnNz2759e2lpKeCsxbSWyWS+vr4DAwNo40SLeMawjUVA07SgwmzhgjcsdOD5C2Pt7ae2gH1kZ0p/JiIAcye1Wr1v377du3ejvt+tW7fm5uYCIkhKSkJFMRgMwMzmcrlgZoE+TUpKAgwilUoDAgLc3d2joqLKysrgaIZivViHoWkabYI2NY0WB8JgoENHlf7+/tDQULjQMDExceTIEZQmaJru7++PiIiYnJy0z9ChYA6HI5BWq9VmZGT4+PgAF4DD5CaT6fz58+Xl5TqdLiQkBJ2HowLMzMy0t7fbDLZof1Cr1eHh4dDaAmllMtlnn32m0WgcFg3ioPou1iVQSdD4NE1PTk5CpqNpWqvVhoWFoZMLvV4fGRnZ3t6OZgLCaKXbjMwOBYatCFXcSSJASzebzR0dHT4+PsAFsJjWEokEzAieLAMfOXIEep3QrCiK6unpWdZFgiaBYYd9u77cwgWevzDWlz9lAcARTq41wvyfyUeg1+vDw8Pr6+ttHLNo7oAIEhIS0LFUp9MxGAyJRMLlcoEPBiYBbR31tYB5V2JioqenJ1gYQ9uEw0ZA0/T4+Livr29sbCxr/kpISPjwww/Pnj3rcIZGkmRubi4Y6KAkqampJSUl8CdN042NjVFRUXNzc+CmXC7/9NNPF5tMOhRMKpUGBQWp1eqJiYmioiIbV59KpfL29oajnI0ZBZQKCAjo7e2lKCpr/kJRhaLyeDz7tGh/UKvVwcHBwK6GqSQSCYPB0Ol0DiUHbqCwsDAGg8Gav5KTkz09PU+cOFFaWmozrwF5Lo0PiJOUlIR6TNvb2yMjI+3nX/bDCdohRSKRTd9DWxGq+GJEoFKpgoKCgN+Kz+ej3ATkLCkpAZCi5YJH4N/CwkJgyAwNDfn7+9tPbYAfMTAw0D5zNJ/Fwg6JgKbplntUyz3bKcBikRfLHNxfpUUApvrAcQ0m8KiGFEXl5+dXVlaCKgwICEDdJ0NDQ8HBwePj42KxOCwsDLq1QFt/shg+NDQkl8srKyuhiQjmGqDROEMENjug7ty54+3tzeVy7fstUOT48eM27S8pKcmeCGAHm5ycDAoKsjEQUKB7e3v9/Pzg1gPwCK4vqFSq/fv32wx9KpVq3759wFVp3xtJkmSxWHDFcTGfFljrQpkUFI32B+BrvHfvHipwYWEhWGuwLxpEA054uJemtrbW39+fw+HY75sCg78NPqAGUcEIgmAymfCOyWS6ePGivbcFlI5Wur1F8Je//AXtexqNJjQ0FKxnoYqDBubv7//w4UNU9/b29uDgYNAOuVwuk8m0sadKSkqAP9ghEfT39/v4+ICplslkSk1NtXcDg+Xh0NBQG/ZHxVgivKK+vaLIsNAVEwFYWGKxWL6+vnDvikgkCgoKgkZyT09PUFAQcO1wuVwvL68nS/QA3Ccu5WPHjgHPIlh3gY/0en1CQgLYmzA+Ph4cHAwXYw0GA5PJBGu5aJuQyWSBgYHDw8NQH4cBdGpAEMS5c+dCQkJAlTQ0NKCSw+QikejAgQPQkJuammIwGGAZH+w+QOcRMBUMANVOnjwJGJCiqPb29l27dgG6BOwTEBAAJTcYDJcvX4ZzZrQ3Go1GMKMOCQmBU3e476W2thbsMqIoqrOz0w9xp0NhwAoZ6izs6OjYu3cvoEUg2/79+0FtokWjOdiEbbrEk4XJ7du3d3V1Advh+PHj9viARgJahdlsBjugoEa9vb0BAQFgZmRT1rIWgYeHx5kzZ8ACB0EQqampsbGxoL3ZEAHYVHLw4EGI/ODgoJ+fH9ygMTk5GRAQAPaPgEUQiUQCKw7VmqIojUZz584dDw8PHo8HrTOwVez06dNQNb1ez2azPT097cche00d3llR315RZFics0TwwQcf/Gzh2rlzJ4fDQYdQsJls586d3t7eXl5egYGB0HfI5XITExPBVjxvb++tW7ey2WzoItLpdBcvXty+fbu3tzfYfQXJuKury9/f/+DBgwwGw9PTMz8/H/ixUSIgSZLD4WzZsmXHjh0tLS1QK5uADRHExsYGBQVptdrh4eGdO3cuqGX9H/ZVgUCwe/7y9vb28PAoKysDAuTm5tokgZYCWi5QbcuWLbt373Z3d//oo4/QPYgkSZaVlbm7u3t5ee3evXvLli1xcXFwX6NIJIJFuLq6+vr6VlVVQWRAKaDnBwQEuLm5AWC9vLzq6urQ3YdQHvv+0NzcvHPnTi8vrx07dgQEBMD6Wh0R1NTU/P73vwdEsBg+FEU9ePAAqOzu7h4aGgotpqUnO8sSAYPBaG5uDgwM9Pb2fv/998+dOweRtFEc7C8A6wJA961bt5aWlqJLJCMjI4cPH37//fd9fHyAtLDiABHAqtm6deupU6dQxwcAHPR8Nze3HTt2eHl5vfPOO3FxcZAXYKU4HwBbjG18AYslryu1LDEIF5YYFotmc98pIrBJs9hPiqJmZmZsVp5hvzWbzU+WoB3OJ41Go0ajQSsDFqHT6TQajcPGDeMYDAawRw3eeY4BnU73LJkbDAa1Wr2ECs4ouLQ6Op3uiZtmFUI6rK+ly3r2p6AZwJHg2TOEzAXUcTJnsJ1xsVYHtmZpNBonc3OoBUmSGo1GrVY7bPMOkyx2E7x0FP7fpFiw6EtH4PVksYA6/KHljSOp2NZ3sFjm4P7zJAKHJUEicPgU38QIPCMCkAieMZ/1nPzJS08nvS3d28k/prflzYgVXZgIVgQXjrzuEPguEAEAfekPk8APlmgsG6xXfH3tRLBiiXACjABGYM0RwESw5pDjAjEC6w8BTATrr06wRBiBNUcAE8GaQ44LxAisPwQwEay/OsESYQTWHAFMBGsOOS4QI7D+EMBEsP7qBEuEEVhzBDARrDnkuECMwPpDABPB+qsTLBFGYM0RwESw5pDjAjEC6w8BTATrr06wRBiBNUdglURgMJor2lQRBfI/X+h8/WjzpvCm1482u8eLIwrk5W1Kg/Er305ac6W+UuCs0VzWqgwvkLvHd/7qaPOmiKZfWUTtPHxdWtaqnF1Pon5FbvwDI7CGCKyYCAiSSueP/OZk68bwpsX+fnOyNZ0/QpArexHyuWttMJov3xl++0TLYnJuDG9652Tr5TvD64q5njsOOEOMwLIIrIwI+sZm3S90LtGv0EfuFzr7xqxnhywrx3OP0PVYv+1cByrPEuFt5zq6Hn9jpzk+d91xhhiBlSKwAiIQyWfeino6um6KaPJmSV5liGAHeyVS9DGre1PEU0vhragWkdx6WNBKJXuW+PW9mtePNkPBNkeIDub2o3deYzQH5vRtRkR9/Whzfd/0sxSK02IEvr0IOEsEfWOzKAsE5fbJJyyn9/4pXgz7m3u85UhM6dhsQHYvvPlWVMsa2wUPFbrXEBaILJRPTFuOEv5T3FNR/zQv6qiGCM2XQVFfO9r8ULHez1n+9jY1LPl6RsApIiBICs4IXI80FQgtx+9NzBjPlQ+5HnlqEbgeEaXUPJ7SW76Okls7Ck0D9wuda+Yv0M+Z/rAwI3glUlTdYTn5Vz5hYBTJoTwbw5s2RTSduj04rLacUF7aooRa/OFsh37uK2eZr+fK+/bK1t3dfe3aNeb8VVBQsOqven57EVhvkjtFBOn8EThsljRZToDmdajeOm6dJnx4obO8VQkn5FuYrfe6LYeLXxOMw1TpfOuZ4l+3/pd4Clgov8sixvUvx1+JtLKVR+LDjkEdtGJeP9rMbbYcT1LZroKpLlZZjxv6ukX9zub/+eefM5nM1NRUHo9XVlaWlJTEZDLtT5T+zuLzjSi+PBEYjGa4RnCk0HKGfEWbEh1dP8mznBj5z6we2Jdcj4judKqfHOrw2TUpuPmbk60r9cwPDg7Cz6U7Cc2MwfTmghfjTNkgTdNX68agVBvDmz7l2Iq6KbypsMFCbSdvDoCYbxxrnjFgo8BJyFccrb+/n8lk3r9/H6Y0m808Hi86OnpiwlIR+PpGEFieCMrblKCHvMZonpwxKlRzvzpm9cO9fbylok1pNFmWCWdmyYy7I5Ag3oxqGZkiRqYIOBpXtFmsdOev2NjYTZs2NTU1OZ/kRuMEEPXt4y0zBlPf6Cy0+X8X2976SPvkI5A0TZvMVFW7Cj76ZaRIPmFQ68g3FvQCVo/z5eKYziOQk5MDzsKDScbnr7S0tJs3b8KbNgE+n19UVGRzs729nc1ma7XaoqKiL774wubpt+4nh8NZ4pP8X7c6yxNBRIEc9K7wAos5cOyGdeTcGN50u1lpJKmoGwMfp3bn1o7NP7VG3hjedLxkwGIUcKxGQcR8cuf1MRqNvr6+mzZtamtrczLVJ3n9QNSTNx+h9sjG8Ka7XVO6OZM3S/LOiZYYruXpufIhEHljeFPINcsJroxiq/Cfcp4e6Opk0TiaMwiYzeZTp07ZnxDV2NjI5/MvX768WCaDg4MsFgueVgCiFRcXC4VCkiRramrQM7UXy2Sd31/vRADdhGDwh7b3xvAmhWqu67EOdKdN4U3p/OHgha64MbzpragW0kTdbpkEEf584enx505WidFo/Pvf/+7q6upkNUM34Z2HagNhRpc2Faq5nhE97Plnywb3s58ubbzKED2ZAfE6rJ6CP563LH/g6+tAIDo6Ghzrhmbe3NwsEAji4+PRm2jYZDLl5uaiA+bY2Fhqaio4yrWvr0+ptH67FxzNVlZW1tXVZZ6/ent7p6etC8PT09Pd3d3wKD00ISiOJMnu7u66urru7m540IZi/lKr1Q8ePBAIBOjRPlBIm3LBOYuPHlmGHHApFAqZTEYQRFdX19zc3MDAQFVVVWtrKzy3BiUCg8HQ1tYmEAikUik81AOIQRCEWCwG+ur1eoFAUFFRAU+yBPkTBDEyMuLwNLoFcWz/X94igMvvvaN62O1Bj3og0ZgpKuPuiG+65L9i2mA3g4Gux3rJsLX7vX602bZwJ37Pzc397W9/e+WVV5zhAtjzZROG9kEtFOMJK5W3WRpKVbvqEk/hj1AAjNM+qO0fmwU/X1uVqE5og6PQycnJpaWlKBCzs7ODg4McDsf+aGw0mlAozMvLg31YKBQWFxeDCLALjY+Ps1is+/fvj46OlpeXX7lyRafT3b59Gx70yOPx4uLiAH1otdqsrCz0nCKlUslisYqLixsbG4uLi1NSUsARbDweLzs7+9q1a0KhkMvlJicnQ94BAjgsd3x8PDMzE+QwPj6enp4+MjKiVqtZLNbNmzdv377d2Nh4/fr1zMxMcCYQ1EIulycmJpaXlwuFwqtXr2ZlZYEIPB6voKAgNTU1NzdXLpdLpdLLly83NTUNDw8XFBQUFRWRJAnyLykpSUlJqa6uhiyDIukwvDwRbFrYSjw+bazr1cCeszG8aeuZ9roejcls3UosHtJ9+NV9h3W9mvFpAiTZFL7MbL+zs/Ogo+vAgQNvvPHGyy+/vOw8EHooJqYJG1FfZYjS+CN6wvoSxJzR7JsuQXWp69VMTButokYsI6pDKPFNZxAQCoVMJhOOYCBJd3c3k8lcehFxamoqIyMD9GGCIK5cuQItC9iFSkpK0NWH4uLiBw8eSCQSDodjMpkIgsjLy7ty5YpQKLRseJFKc3Nz0a5y48aNqqoqqMW9e/cA1/B4vMzMTBDTZDJdvXrVxnXlsFyappuamnJycnQ6XVFREZgQqdXq+Ph49FTu0tJScPIi0AKohs6ebty4AeLzeLyLFy8CZiEI4urVq93d3UBagiCys7O7urpA/qgWUJ2lA8sTAbQIBiYMLQNfGWZBt3njWLNXcldyzWPSTLU9+kqE5oGZR5MGEG1Zi2AJIvj1r3/98ssv37lzZ2ll4JanvrHZjiHrnAXt7SAcmNOnNZik41bBwM2OIZ103GoRvBW16DGKSwuAny6NgNlslkqlYPtAVVXV5OTk8PDw7du3mUzmjRs3lk5L03RRUREY2wcHB9lsNjxcD3Sh6enpjIwMmUymXrjq6+s5HM709DSbzVYqlQqF4tq1a2KxuLCwkKbpe/fuoYcvT09Pp6WloQbC2NgYcEzweDxwtDeQkDd/QWkXKxecm1ZQUHD58uWCggIw0VCr1SkpKWgpEokkJyeHIAighUKhSEtLg3MZmqYlEgmbzZ6bm+PxeNAIUigUWVlZw8PDC7qqS0tLeTyeff5QzqUDyxPBnxcG+XvdUzOzJrgtd3NEU1W7KrLoqXdQJJuZ0pOw422OaJqeJWt7rEbEKnwENE2DqYGTboK/Jj4EpT8RbI40w/2Fm8KbDEZzHrKUKJLPqHTW8X9jeNNrR5sNRvPnnWqQ3CPJcqovvp4vAuDE2vz8/Lq6urt3754+fRowApPJLC0thTb/EoVKJJIrV64QBAE2IMCYoAup1eqEhIS8vLwC5Hrw4AFN0wUFBWKx+N69e3w+X6vV5ubmjo+PczgccJY5yEetVqelpanVlmVvmzs2Pd/m5xLl0jTd0NBw6tQpYIOAY6ltSpFKpdnZ2bOzs0AL+HNBCovlAiKg5Uql0kuXLl27dg3RtaCtrc1eC5jP0oHliSCiwLoJF6zM78t8ul+ge1g/MWP8W1LXK5Ei33SJnjA9kDydO+zN6KFpOr7S6pyPKJAvLYr907m5OeAsdHLhIPrWo18eaXKPLOmQyORyeUNHfySnEzDX3e4pgqTiKoY+vNCZ8vljmqbhWuNPP2b/cvuB8PDwP/qE/Z9P7m4MbwLLCvby4DurRgDYrkwm8/Tp06CzmUymsbGxgYEBh743hwXpdLrMzMzOzk42mz04aNknAi7QhWZnZ7Ozs+GxzjRNK5XKvr4+mqYFAkFJSUleXh54CoxtNpuNDryzs7NZWVkoNUil0oyMDK1Wi/ZAy266+WuhcHqJcsfHx7OyssRicVpaGjDpAWugpbS0tHA4HJqmgRbATwFmQKCIlpaW3Nxck8mElqtUKtPT01FXBfRo2hANlHPpwPJEUNFm9aW7RbfOGc2N0hk45n94sXNg/o0DUIZkRP/emXb4tL5v2mii/l+s9U5568rOZANLBitaPhTJpu809X12PFGOXDce9G6OaHrnRAu3eRJsajIYzUUNE68yRP8Z9uVP/vM9F+Ta8L3/8b8/OiPAbx8t3WpW+FSn07FYLCaTGRMTs9JNYjZF8Xi8y5cvA1saPgJdCFj70AgnSTI/Px8MxWNjY8nJyVlZWbOzltdhxWLxhQsX7LctCAQCNpsNTkAmCKKgoADMRNAeaE8Ei5VLEEROTg7wJgBnAUEQarX60qVLxcXFwOMwMzOTmZkJ4kAtSktLS0pKwFQCRNbKYMYAAAUoSURBVADeEBsxSkpKqqurAQg6nS4rK6u3t/drtAjQnYXp/GGapmNvD8LevjnCul/gTOkg9NXBTQRwY98qdhauYkORSqWSy+U2RCCXyw9ftb5u9M8si5EC1zj/1+t/dXFx+fGPf3zw4EE3N7ff/va3mzdvdnFxQR1OsLXhwKoRSElJAbMAZ5Z+li5lcHDw3Llz0NIGkWEXIkmysrIyMTGRw+EkJSVVV1eD7kQQRFZWFvQITE9PJyYmoouRIB+SJKurq+Pi4uLj4+Pi4mBymx5o8xP4AuzLra6uLikpgTkXFBRUV1eDjtra2pqSkhIfH3/u3LkvvvgCLBBCLQwGQ3Fx8blz54AY0HFoU67BYLh+/XpKSgqHw0lISIDOyK/LIqBpGr5r8CpDJB7Smc3UyZuPIBd4JXdNzhhRJ3x4gYw0UX2js3APYsbdFb9rsIotxiCJPRFUfGndMvD+2Y7rX46Ddw1e/leFi8uGDRs2REVFHTlyJC0tLTMz88CBA0+IYNu2bUs3R/x0RQiA94tseu+KclhRZJIkp6en4fL7itLSNG02m1eX3Jly0RF7ZmYGblWwF5IkyZmZ5V/hJwgCneDY5+PkneWnBk+23FnePoy3fo/k/zJbHz62vKvL71LvSLA65yAp/PF8B1ixl08YfrcwKViztw8HBgYcWgS90kcXqxSbI56+KLk5osn9ULKLi8urr76alJT0r3/966WXXvrBD37w/e9/H9gITsKHozmJAJghOxn5BY6GEsG6UtMpIqBpGv0ewetHm6/WjZEmiqLo9848/QrQe2fazZTl5i3R5NsL7yau5fcIFAqFQyIYemyxR9y/+umEwsJCFxeXd99918/P79ChQ1lZWdnZ2YGBgS4uLj/60Y/WVSVhYV4YBKampq5evWqzV3o9aOcsEdA0bfOFovfOdCTXPH4H+SLgFmZrTu0ouqdojb9Q9GhoeO9nZzb/7h8HIy92dfdAj6Efq90zqQu+ZWRZL2Q07zzLd9mw4Sc/+cmpU6fOnj3LYrEuXbr0j3/8w8XFZevWreuhbrAMGIE1Q2AFRADsAvjqAZwOLBZwvyBe428T+URyXnpn37+99td/e+2v/ww9B4gg/lbXYhL+z1+6u7q6MhgMX1/fDRs2gNWD733ve+jGrzWrCVwQRuAbRGBlRAD8BRl31+lXjP9je8xP/8D893dDXnpn71t//mRiYkIxMc0olkOfpQ0jvB5R/+Z//RFZPXT54Q9/mJmZ+Q3WBy4aI/CNILBiIgBSGozm8lalzbkGf77QGVEgq2hTrfQbJM9L84+Csn76Byb4C4yxvpFC07TBaL7XrUnnjxwvGQjLl0bdGEjnj9zv1oBDDT7//POQkJA9e/acPn36GVe5n5ciOB+MwBojsEoiWGMpnSxO/ljp+dmVzf99Zu+x/Em11slUOBpGACPwQhEBrk6MAEZgdQhgIlgdbjgVRuCFQgATwQtVnVgZjMDqEMBEsDrccCqMwAuFACaCF6o6sTIYgdUhgIlgdbjhVBiBFwoBTAQvVHViZTACq0MAE8HqcMOpMAIvFAKYCF6o6sTKYARWhwAmgtXhhlNhBF4oBDARvFDViZXBCKwOAUwEq8MNp8IIvFAIYCJ4oaoTK4MRWB0CmAhWhxtOhRF4oRDARPBCVSdWBiOwUgRMJnpymHIx6GmzaaVpcXyMAEbg242AiaQNenpaRQ/LKOWoyWVkwKzop/AfRgAj8F1DYGTArBw16bWk0Wh0MeILI4AR+M4j8P8BnqDmJZhWAzcAAAAASUVORK5CYII="},8442:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/deposit_confirm-5e4741db518eb2a98f076f7407f90abe.png"},4810:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/main-dedb726f073daf3181c2f18f6b36f061.png"},7044:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/points-bbde6395c26a841243f2f7a8e398116f.png"},8400:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/recent-ed1973c69ed20c68e36957f44ac377f2.png"},9459:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/withdraw-077c3e2a72d23013fe86d52c29729b8f.png"},6427:(e,t,n)=>{n.d(t,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUQAAABYCAYAAACNiY6SAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAB3SSURBVHhe7Z15lFXFncfVTE5Oco5z5p85xzNzTjIZz2TcjRozDgmTEIMmxCRG1GjckKAIogGVTUEQEZRdUAGRRfZ9kUUUWWSRvdm3ptlpml1ooFm66Zr3qXd/r+tV3/v6ve5GX+vvc06d917dunWr6lZ961fLffeyfdtLjTp16tSpKzWXGUVRFMWigqgoihKggqgoihKggqgoihKggqgoihKggqgoihKggqgoihKggqgoihKggqgoihKggqgoihKggqgoihKggqgoihKggqgoihKggqgoihKggqgoihKggqgoihKggqgoihKggqgoihKggqgoihKggqgoSo3hxFFjNi4trdDtzysNzsgMFURFUWoE77cvMff9x4W0XdGp4MQYxwpKzWdjLwa/olFBVBQl68lbX2pFrsvfS8yGL8KtQte5FuLBPaXmqTuK7fknjweeEaQtiMeOHTNLly5NcsuXLzeHDx82paWVM09dzp8/b9atW2dOnz4d+ChfB9zL7du3mw8++MDMnTvXlJSU2N/79+8PQiSDP8ddiouLzcqVK83AgQPNe++9ZxYuXGjOnj0bHI0TVp82bdpkLly4EIQoz8WLF83WrVtN//79TZMmTUzv3r3tedSdijhz5oyZMWOGzdfBgwcD35oJbYS2EpbvqHZ09OhRM2HCBHs/hg8fbvbt25fUbrnPlL97P9Jp36dOnbLl2q5dO/Piiy+asWPHmoKCguBo9fHFrItW0JbMrNjKc0EMGwVi+OmYarQQqeD169c3ffv2tYWK6969u6lXr54ZMGCAbQRV4fjx46ZZs2Zmx44dgU92cO7cOdOjRw/z6KOPWrd+/frgSHlo9EOGDDF16tQxN998s2nTpo05cOBAcLQ85LVt27YmPz8/8CkP5Tp48OCU161OaEx//etfzezZs20DoaG8/fbbZsqUKUGIZPDnuIDQtWjRwrzyyitWCBcvXmz69OljGjRoYHbu3BmECq9Pzz33nKlbt66ZOXOmFT+XL7/80ja6xx57zB6nwSLYnNOwYcOkuH0Qic6dO5u33nrLnkcaq4M9e/aYZ5991taL1q1bmxMnTgRH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"},41:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/withdraw_confirm-b585dbe64c5ab6d9b7bfeef95711130b.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(6540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);