---
id: npfUSDC 
title: npfUSDC Strategy
sidebar_position: 2
sidebar_class_name: hidden
---

**Pendle LP strategy, earn with USDC** 

FUSDC is an interest-bearing token received when depositing USDC into Flux Finance's lending pools. FUSDC represents a user's deposited USDC plus accrued interest. Users earn interest on their deposited USDC in the form of FUSDC, which grows over time based on the interest rate offered by the lending pool.


## Get Started[](https://docs.nimbora.io/docs/concepts/products/earn/pendle_lp_integration/npfUSDC#get-started)

Visit Nimbora dApp via invite link and connect your Starknet wallet ([Braavos](https://braavos.app/) or [ArgentX](https://argent.xyz/)).

Enter the amount of ETH you want to deposit, or click on the small buttons below the box (25%, 50%, 75%, 100%) to set a desired percentage of the balance you want to deposit.

![Untitled](../../../../../static/content/strategy_npfusdc/main.png)


When you've selected the token amount to deposit, click on "Deposit" button. 
![Untitled](../../../../../static/content/strategy_npfusdc/deposit.png)

Follow the prompts on your wallet ([Braavos](https://braavos.app/) or [ArgentX](https://argent.xyz/)) to complete the transaction.
![Untitled](../../../../../static/content/strategy_npfusdc/deposit_confirm.png)


Once the transaction has been accepted on the network, a popup will appear at the bottom left of the screen to let you know.
![Untitled](../../../../../static/content/strategy_npfusdc/deposit_accepted.png)


As a result, you will receive nppETH, which is Liquid Restaking Token (LRT). And that's it, you should be able to see your balance of Nimbora Yield Token in the portfolio section or directly into your wallet browser.


## Your Earning Starts Immediately![](https://docs.nimbora.io/docs/concepts/products/earn/pendle_lp_integration/npfUSDC#your-earning-starts-immediately)

Your yield comes from several sources -  **npfUSDC base yield** + **$STRK** **incentives** + **Nimbora** **boost.**

![Untitled](../../../../../static/content/strategy_npfusdc/main.png)


1. **Base**: Represents default strategy yield that auto-compounds daily. 
2. **Boost**: Represents incentives provided by the Nimbora team using the [Starknet Catalyst grant](https://medium.com/@Nimbora/nimbora-and-starknet-catalyst-program-14cc7f2f1ab5) that are claimable every two weeks.
3. **Incentives**: Represents incentives provided by the Starknet Foundation as a part of the [DeFi Spring initiative](https://medium.com/@Nimbora/nimbora-joins-starknet-defi-spring-d7921e56e2e4) that are claimable every two weeks.

With this strategy you are also earning Nimbora points. 
Remember, holding Nimbora yield-bearing tokens gets points based on your balance. The more and longer you hold, the more points you accumulate.

You can always check your leaderboard position and Nimbora points breakdown by clicking on ‘Points’ section in the upper left corner at app.nimbora.io
![Untitled](../../../../../static/content/strategy_npfusdc/points.png)



## How to Withdraw[](https://docs.nimbora.io/docs/concepts/products/earn/pendle_lp_integration/npfUSDC#how-to-withdraw)

Withdrawal are not synchronous such as deposits they take an average of 1 day to be processed, a fast withdrawal option should arrive later on.

First, you need to decide on the amount you want to withdraw. This could be all or a portion of your assets.

![Untitled](../../../../../static/content/strategy_npfusdc/withdraw.png)


Once you've made up your mind, locate and click on the 'withdraw' button and follow the prompts on your wallet ([Braavos](https://braavos.app/) or [ArgentX](https://argent.xyz/)) to complete the transaction.

![Untitled](../../../../../static/content/strategy_npfusdc/withdraw_confirm.png)

Once the transaction has been accepted on the network, a popup will appear at the bottom right of the screen to let you know.

![Untitled](../../../../../static/content/strategy_npfusdc/withdraw_accepted.png)


You can consult all of your recent deposits in the wallet section, your transaction should be here.


![Untitled](../../../../../static/content/strategy_npfusdc/recent.png)

Nimbora takes over the task of processing this request. This involves preparing your assets in order to be transferred back to your wallet, a process that is handled entirely behind the scenes to ensure a smooth and efficient operation. Once the request is ready to be claimed, Nimbora relayer will handle it and send it directly into your wallet.

### What is FLUX

  - Decentralized Lending and Borrowing: Flux Protocol, developed by the Ondo Finance team, facilitates decentralized lending and borrowing. It allows users to lend their assets to earn interest or borrow assets against collateral in a peer-to-pool (P2Pool) model.
  - Support for Permissionless and Permissioned Tokens: Flux Protocol supports both permissionless tokens (e.g., USDC) and permissioned tokens (e.g., OUSG), with permissions enforced on a per-asset basis. This flexibility accommodates various token types and use cases within the protocol.

### Understanding Risks Associated with Flux


1. **Smart Contract Risk**: Flux operates on smart contracts, which are lines of code stored on the blockchain. While these smart contracts are designed to execute transactions autonomously, they are not immune to bugs or vulnerabilities. If there is a flaw in the smart contract's code, it could be exploited by malicious actors, potentially resulting in the loss of funds for lenders.

2. **Oracle Risk**: Flux relies on oracles to fetch external data, such as asset prices, to determine variables like interest rates and collateralization ratios. However, if these oracles provide inaccurate or manipulated data, it could lead to incorrect loan liquidations or interest rate adjustments, potentially causing losses for lenders.

3. **Market Risk**: The cryptocurrency and DeFi markets are highly volatile. The value of assets used as collateral for loans can fluctuate rapidly, and borrowers may struggle to repay their loans if the value of their collateral drops significantly. In such cases, lenders may face losses if they cannot recover the full value of the loan.

4. **Liquidity Risk**: Flux relies on liquidity pools to match lenders with borrowers. If there is insufficient liquidity in the pools, lenders may not be able to withdraw their funds in a timely manner or at the desired exchange rate. Additionally, sudden spikes in demand for loans or withdrawals could lead to slippage or delays in transactions.

5. **Counterparty Risk**: While Flux is designed to be decentralized, there is still some counterparty risk associated with lending and borrowing. If a borrower defaults on their loan, lenders may not be able to recover their full principal and interest payments, especially if there are not enough liquidated assets to cover the debt.

6. **Regulatory Risk**: The regulatory environment surrounding DeFi and cryptocurrencies is still evolving, and there is uncertainty regarding how regulators will treat these platforms in the future. Changes in regulations or enforcement actions could have a significant impact on the operation of Flux and the value of assets held within the protocol.
