---
id: nppETH
title: nppETH Strategy
sidebar_position: 2
sidebar_class_name: hidden
---

**Pendle LP strategy, earn with ETH**

Liquid restaking on Ethereum repurposes staked ether to validate external systems like rollups or oracles, enhancing the ecosystem's security. Liquid Restaking Tokens (LRTs) act as a buffer against slashing events and offer higher yields than native staking. They simplify participation, manage risks, and conserve gas by batch-collecting rewards. This innovation democratizes staking, challenging established leaders, and offers growth potential, albeit with capped deposits in some systems.

### Overview of pufETH

pufETH is Puffer Finance's liquid staking token (LST), which functions similarly to other LSTs by representing staked ETH in a liquid form, providing users with staking rewards while maintaining liquidity. Here’s a detailed explanation of pufETH and how it operates within the Puffer Protocol:

- **Wrapped Version of eETH**: pufETH serves as the wrapped version of eETH, the native token of EtherFi. It acts as a liquid staking derivative, streamlining the staking process and offering various benefits, including automatic restaking and rewards from multiple sources.
- **Yield Sources**:
  - **Ethereum Execution and Consensus Layer Staking Rewards**: Validators earn rewards by participating in block proposal and attestation duties.
  - **Loyalty Points**: Additional incentives provided by the Puffer Protocol for consistent participation.
  - **EigenLayer Restaking Rewards**: Extra rewards earned by validators participating in restaking activities on EigenLayer.

## Get Started[](https://docs.nimbora.io/docs/concepts/products/earn/pendle_lp_integration/nppETH#get-started)

Visit Nimbora dApp via invite link and connect your Starknet wallet ([Braavos](https://braavos.app/) or [ArgentX](https://argent.xyz/)).

Enter the amount of ETH you want to deposit, or click on the small buttons below the box (25%, 50%, 75%, 100%) to set a desired percentage of the balance you want to deposit.

![Untitled](../../../../../static/content/stategy_nppeth/main.png)

When you've selected the token amount to deposit, click on "Deposit" button.
![Untitled](../../../../../static/content/stategy_nppeth/deposit.png)

Follow the prompts on your wallet ([Braavos](https://braavos.app/) or [ArgentX](https://argent.xyz/)) to complete the transaction.
![Untitled](../../../../../static/content/stategy_nppeth/deposit_confirm.png)

Once the transaction has been accepted on the network, a popup will appear at the bottom left of the screen to let you know.
![Untitled](../../../../../static/content/stategy_nppeth/deposit_accepted.png)

As a result, you will receive nppETH, Nimbora yield bearing token. And that's it, you should be able to see your balance of Nimbora Yield Token in the portfolio section or directly into your wallet browser.

## Your Earning Starts Immediately![](https://docs.nimbora.io/docs/concepts/products/earn/pendle_lp_integration/nppETH#your-earning-starts-immediately)

Your yield comes from several sources -  **nppETH base yield** + **$STRK** **incentives** + **Nimbora** **boost.**

1. **Base**: Represents default strategy yield that auto-compounds daily. We take a 20% performance fee. The APRs displayed are what you actually receive, as our performance fee has already been accounted for.
2. **Boost**: Represents incentives provided by the Nimbora team using the [Starknet Catalyst grant](https://medium.com/@Nimbora/nimbora-and-starknet-catalyst-program-14cc7f2f1ab5) that are claimable every week at the [rewards page](https://app.nimbora.io/rewards/).
3. **Incentives**: Represents incentives provided by the Starknet Foundation as a part of the [DeFi Spring 2.0](https://medium.com/@Nimbora/introducing-defi-spring-2-0-bigger-bolder-better-364bb96b02d6) that are claimable every week at the [rewards page](https://app.nimbora.io/rewards/).
4. **Extra: Ekubo LP** Providing Nimbora yield bearing tokens as liquidity on Ekubo is tracked and added to the total claimable STRK amount at the [rewards page](https://app.nimbora.io/rewards/).

With this strategy you are also earning points for 3 protocols: 1x Nimbora, 1x Puffer, 1x EigenLayer.
The points are harvested by our L1 smart contract. Users will have an option of voting on whether these points get sold or delegated to an EVM address.

![Untitled](../../../../../static/content/stategy_nppeth/main_points.png)

Remember, holding Nimbora yield-bearing tokens gets points based on your balance. The more and longer you hold, the more points you accumulate.

You can always check your leaderboard position and Nimbora points breakdown by clicking on ‘Points’ section in the upper left corner at app.nimbora.io
![Untitled](../../../../../static/content/stategy_nppeth/points.png)

## How to Withdraw[](https://docs.nimbora.io/docs/concepts/products/earn/pendle_lp_integration/nppETH#how-to-withdraw)

You can choose between two withdrawal options - Instant and Normal.

![Untitled](../../../../../static/content/stategy_nppeth/withdraw.png)

Instant withdrawals factor in the price impact and set slippage.

![Untitled](../../../../../static/content/stategy_nppeth/withdraw_normal.png)

Normal withdrawals are not synchronous such as deposits and take between 24 and 72 hours to be processed.

Once you have selected the withdraw tab, you will need to decide on the amount you want to withdraw. This could be all or a portion of your assets.

Click on the 'withdraw' button and follow the prompts on your wallet ([Braavos](https://braavos.app/) or [ArgentX](https://argent.xyz/)) to complete the transaction.

![Untitled](../../../../../static/content/stategy_nppeth/withdraw_confirm.png)

Once the transaction has been accepted on the network, a popup will appear at the bottom right of the screen to let you know.

You can consult all of your recent transactions in the wallet section. Your transaction should be here.

![Untitled](../../../../../static/content/stategy_nppeth/recent.png)

Nimbora takes over the task of processing this request. This involves preparing your assets in order to be transferred back to your wallet, a process that is handled entirely behind the scenes to ensure a smooth and efficient operation. Once the request is ready to be claimed, Nimbora relayer will handle it and send it directly into your wallet.

### What is Puffer?

- [Puffer](https://www.puffer.fi/) is a decentralized native liquid restaking protocol (nLRP) built on Eigenlayer 🐡🤝
  It makes [native restaking](https://docs.puffer.fi/protocol/puffer-modules/#native-restaking-) on [Eigenlayer](https://www.eigenlayer.xyz/) more accessible, allowing anyone to run an Ethereum Proof of Stake (PoS) validator while supercharging their rewards.

### Understanding Risks Associated with Puffer

1. **Smart Contract Risks**:

   - Complexity and Audits: Despite thorough audits, smart contracts can have bugs or vulnerabilities that may be exploited, leading to potential loss of funds.

2. **Key Management Risks**:

   - Secure-Signer and User Responsibility: Puffer’s Secure-Signer enhances security but cannot completely eliminate all threats. Users must manage their keys responsibly and maintain strong security practices.

3. **Regulatory Risks**:

   - Uncertain Legal Environment: Changing regulations could impact Puffer, including restrictions on services or new taxation policies affecting staking profitability.

4. **Technical Risks**:
   - System Failures and Downtime: Validators need continuous operation to earn rewards; any failures can result in missed rewards or penalties.
   - Slashing Risks: There is still a risk of slashing due to bugs, misconfigurations, or issues in the consensus protocol, despite Secure-Signer protections.

### Stay Tuned for Upgrades

Keep an eye on our updates as we roll out new features and advanced strategies to enhance your earning potential.

**Join our [Discord](http://discord.gg/nimbora) for alpha and early notifications 🚀**

[![Nimbora Discord](../../../../../static/content/stategy_sstrk/Discord.png)](https://discord.gg/nimbora)

Stay tuned for updates as we continue to bring more 1-click yield strategies to life. Follow [Nimbora on X](https://x.com/Nimbora_) (Twitter) or [Medium](https://medium.com/@Nimbora).

# **About Nimbora**

Nimbora is a Starknet-based omnichain 1-click yield strategies platform that enables users to engage with Layer 1 protocols at a fraction of the cost. Discover the best of Ethereum protocols and optimize your DeFi strategies with Nimbora.

🐧🌐 [Website](https://www.nimbora.io/)

🐧👨‍💻 [DApp](https://app.nimbora.io/)

🐧🐦 [Twitter](https://twitter.com/Nimbora_)

🐧👋 [Discord](http://discord.gg/nimbora)

🐧💼 [LinkedIn](https://www.linkedin.com/company/nimbora/)

🐧📖 [Medium](https://medium.com/@Nimbora)

🐧🗞️ [Docs](https://docs.nimbora.io/)

🐧🛡 [Audit](https://github.com/0xSpaceShard/nimbora_audit_report_yield_dex/blob/main/Nimbora%20Audit%20Report.pdf)
