---
id: liquity
title: Liquity Strategy
sidebar_position: 5
---

**Liquity strategy allows users to borrow LUSD**, a stablecoin pegged to the U.S. dollar, using ETH as collateral. This strategy is beneficial for users who want to leverage their assets without selling them.  If ETH value goes up while the loan is active, repaying it becomes more profitable as users get back their ETH, now more valuable. On top of this, participating in this strategy now comes with a bonus: a ~45% APR in STRK tokens, paid out every two weeks, thanks to the [DeFi Spring initiative.](https://medium.com/@Nimbora/defi-spring-just-got-better-earn-strk-with-nimbora-x-liquity-d7e881f22c38)

## First Steps

The process begins by visiting the Nimbora platform at https://app.nimbora.io/

Click “**Connect Wallet**” in the top right corner 

![Untitled](https://i.imgur.com/SaXJ9qq.png) 

Select one of the two available wallet options ([Braavos](https://braavos.app/) or [ArgentX](https://argent.xyz/)) 

![Untitled](https://i.imgur.com/pwjsKxV.png)

For the sake of this tutorial we will be using **Argent X** wallet extension. 

![Untitled](https://i.imgur.com/517pTc6.png)

Follow the notification prompt and click on “**Connect**” 

![Untitled](https://i.imgur.com/pnBwOEo.png)

### This enable Nimbora to:

- Read your wallet address
- Request transactions

*You will still need to sign any new transaction*

Voila! “**Connect wallet**”  will be replaced with your wallet address, indicating you are successfully connected. 

![Untitled](https://i.imgur.com/31dDkrK.png)

## Understanding the Borrow Section

There are 2 cards (troves) with 2 different TCR (total collateral ratio). The CR is not fixed**, as its value is pegged to the ETH price.** That is why the screenshot below might not match the current numbers you will see once you open the troves. 

![Untitled](https://i.imgur.com/ERJ3ast.png)

**TCR is the percentage of assets you need to lock up as collateral when borrowing**. If you want to borrow $100 and the TCR is 676%, you must provide $676 worth of assets as collateral.

![Untitled](https://i.imgur.com/4HseVPI.png)

Enter the desired amount and follow the prompt. 

![Untitled](https://i.imgur.com/nqH7qmS.png)

Nimbora thrives on efficiency, offering **ZERO L1 gas fees**. This enables you to borrow for under $0.025 per transaction, making your borrowing experience smooth and cost-effective.

![Untitled](https://i.imgur.com/Nwrn0QS.png)

## **Which trove should you select?**

This depends on how much LUSD you want to borrow and ongoing initiatives. 

The left trove offers a unique opportunity for users to borrow with minimal transaction costs, subsidized by the [Nimbora x Liquity](https://medium.com/@Nimbora/defi-spring-just-got-better-earn-strk-with-nimbora-x-liquity-d7e881f22c38) collaboration.

## Understanding collateral

![Untitled](https://i.imgur.com/3gF7AI3.png)

Lets take as an example this image above - trove 604 TCR will require **less collateral** compared to Trove 910 CR, but Trove 910 TCR is **more secure** than Trove 604 .

Consider this scenario: if all troves were open when the ETH price was at $1600, Trove 910 would have a higher tolerance for price fluctuations compared to Trove 604, allowing it to withstand a more significant drop in ETH price before facing liquidation.

Once the collateral is deposited and locked, users can borrow against it according to the platform's loan-to-value ratio.   If the value of the collateral falls below certain thresholds, the system may automatically liquidate the assets to repay the loan. 

### Repay the Loan

You can repay the loan to avoid liquidation. Back on the strategy homepage, you will see the “**Repay**” button on the trove you have interacted with. 

![Untitled](https://i.imgur.com/h82KXzB.png)

To repay your debt you need to first check the debt balance of an account.

![Untitled](https://i.imgur.com/FoymkHr.png)

At the TCR of 550%, repaying the loan of 0.45 LUSD will get us back **0.00076** ETH which is an equivalent of around $2.5.  

![Untitled](https://i.imgur.com/DYkDgWe.png)

### What is Liquity?

  -Liquity is an interest-free borrowing protocol on Ethereum. Liquity offers decentralized, interest-free loans in LUSD against Ether collateral, requiring a minimum 110% collateral ratio.

  - Loan security is enhanced by a Stability Pool with LUSD and collective backing from borrowers as ultimate guarantors.

  - The protocol is non-custodial, immutable, and operates without governance.

  - It is highly secure, has several audits, and tops Defi Safety’s security list.

  - Additional resources about Liquity: 
    - [Website](https://www.liquity.org/)
    - [Docs](https://docs.liquity.org/)
    - [Analytics](https://dune.com/liquity/liquity)
    - [Liquity on Twittter](https://twitter.com/LiquityProtocol)

### What is LUSD

- LUSD is a stablecoin pegged to the US Dollar. It serves as the payment medium for loans in the Liquity protocol, offering redemption against collateral at face value.

  - LUSD can be only minted against ETH, making it very resilient and independent of any centralized parties. Due to this it is a very popular treasury asset, but also across protocols and LP pools on mainnet and many L2’s.

  - Additional resources about [LUSD](https://docs.liquity.org/faq/general#what-are-lusd-and-lqty)

### What is the LUSD contract on Starknet

- LUSD contract on Starknet is: 0x070a76fd48ca0ef910631754d77dd822147fe98a569b826ec85e3c33fde586ac

  - All official Liquity contracts can be found [here](https://docs.liquity.org/documentation/resources#contract-addresses).

### How frequently are borrows processed?

- Borrow takes a day to be processed.
  
### Do I really pay no interests on Liquity?

  - Yes, really! Liquity charges no interest, ever.

  - You pay only a one-off fee when opening the loan. This fee is almost always 0.50% but can go slightly higher at times. Read more about it [here](https://docs.liquity.org/faq/borrowing).

### I don’t have enough LUSD to pay my debt, what can I do?

  - If you don’t have enough LUSD in your account you can use the [Starkgate](https://starkgate.starknet.io/) bridge to bridge the LUSD amount required to pay your debt and get back your collateral.

:::tip
[Here](https://medium.com/@Nimbora/unlocking-quick-lusd-minting-a-step-by-step-guide-for-nimbora-users-1dc0b876a122) you can find a step-by-step guide for borrowing LUSD.
:::
