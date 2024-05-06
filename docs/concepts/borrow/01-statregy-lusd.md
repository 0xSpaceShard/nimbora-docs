---
id: liquity
title: Liquity Strategy
sidebar_position: 3
---

**Liquity strategy allows users to borrow LUSD**, a stablecoin pegged to the U.S. dollar, using ETH as collateral. This strategy is beneficial for users who want to leverage their assets without selling them.  If ETH value goes up while the loan is active, repaying it becomes more profitable as users get back their ETH, now more valuable. On top of this, participating in this strategy now comes with a bonus: a ~45% APR in STRK tokens, paid out every two weeks, thanks to the [DeFi Spring initiative.](https://medium.com/@Nimbora/defi-spring-just-got-better-earn-strk-with-nimbora-x-liquity-d7e881f22c38)


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
