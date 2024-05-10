---
id: introduction
title: Introduction
sidebar_position: 1
---

## **Starknet: The Backbone of Efficient DeFi**

Starknet revolutionizes Ethereum transactions with zk-STARKs technology, ensuring faster, more affordable, and secure exchanges, reshaping the DeFi landscape through:

- **Low-cost Transactions:** Significantly reducing the financial barrier to entry.
- **Superior UX:** Offering streamlined, user-friendly interactions (Native Account Abstraction).
- **Developer-friendly Environment:** Encouraging innovation and growth.
- **Speed and Efficiency:** Optimizing processes across the blockchain.

You can read more about Starknet's capabilities [here](https://www.starknet.io/en) and explore insights through [Spaceshard's blog](https://www.spaceshard.io/blog/learning-starknet-community-edu-resources).

## **Wallet Compatibility: Simplified Access**

![Untitled](https://i.ibb.co/khknbwX/Nimbora-Wallet.png)

Nimbora supports the [Argent X](https://www.argent.xyz/argent-x/) and [Braavos](https://braavos.app/) wallets, combining simplicity with security to enhance your DeFi interactions. 

## Nimbora benefits

- ## A Gasless experience
    
You're eager to deposit funds into a L1 DeFi protocol to earn yields or borrow assets, but have you considered the potential cost in gas fees? Could it be $20, $100, or a staggering $300? The same applies for withdrawals or repayments. 

![Gas](/img/gas.png)

| Action            | Gas used       | Gas Price (Eth) - 40 Gwei  | Gas Price (USD) - 3k eth/usd  |
|-------------------|----------------|-------------------------------|---------------------|
| Deposit / Redeem | 700K - 1M6     | 0.030589257 - 0.058813266     | $91.767771 - $176.439798 |
| Borrow / Repay   | 580K - 900K    | 0.025470271 - 0.039561244     | $76.410813 - $118.683732 |


Given the prevalent gas prices averaging around 40 Gwei, it's evident that gas fees pose a significant challenge for portfolios of low to medium value. For instance, a $100 gas cost could equate to 1% of a $10,000 portfolio, a substantial proportion that can impact overall returns. This issue is further compounded when adjustments or rebalancing of positions are required.

At Nimbora, our primary objective is to foster inclusivity within the realm of DeFi. We firmly believe that individuals should have the opportunity to earn yields, regardless of whether they're investing $50 or $5,000. Financial constraints should never be a barrier to entry.


### The Role of Starknet in Reducing Costs

Starknet plays a crucial role in Nimbora's ability to offer reduced gas fees. As an advanced Layer 2 solution, Starknet enhances the scalability of the blockchain by processing transactions off the main Ethereum chain. This process not only speeds up transactions but also significantly lowers the cost associated with them. By utilizing Starknet, Nimbora taps into these benefits, passing the savings directly to its users.

### Batching Mechanism: Pooling Transactions for Efficiency

Nimbora introduces an innovative batching mechanism that further enhances its cost-efficiency. This mechanism allows users to pool their transactions together, creating a collective action that can interact with DeFi protocols on the Layer 1 (L1) network at a fraction of the usual price. By doing so, Nimbora not only makes transactions more affordable but also fosters a more inclusive and accessible DeFi ecosystem.

![Gas](/content/pooling.png)


### The L2 Pooling Manager: Accumulating and Batching Requests

The transaction process begins when the Nimbora L2 Pooling Manager contract receives a request from a user. This contract acts as a collector, gathering individual requests into a new batch. The batching continues until the batch reaches its capacity. At this point, the L2 Pooling Manager packages all the requests into a single bundle and forwards it to the L1 Pooling Manager contract for further processing.

### L1 Verification and Asset Handling

Upon receiving the batch from the L2 side, the L1 Pooling Manager contract must wait for the batch to be verified on the Ethereum mainnet. This verification process is subject to network congestion but typically completes within a 12-hour window. Once verified, the L1 Pooling Manager interacts with the Starkgate Bridge to retrieve the necessary assets. These assets are then deposited according to the predetermined strategies.

### Reporting and Feedback Loop

The final step in the transaction process involves the L1 Pooling Manager generating a detailed report. This report confirms the successful deposit of assets and is sent back to the L2 Pooling Manager. This feedback loop ensures transparency and trust in the transaction process, allowing users to confidently engage with Nimbora's DeFi ecosystem.

By adopting these advanced mechanisms and leveraging Layer 2 solutions like Starknet, Nimbora is paving the way for a more affordable and accessible blockchain experience. Its innovative approach to transaction batching and cost reduction not only benefits individual users but also contributes to the broader goal of fostering a more inclusive DeFi ecosystem.



## Expanding DeFi Access from Layer 2

While Layer 2 (L2) solutions represent a significant innovation for scaling Ethereum DeFi, the majority of the ecosystem and liquidity remains rooted in Layer 1 (L1). It's important to acknowledge that L2 can take several years to mature into a resilient and robust DeFi ecosystem with deep liquidity. This challenge is further exacerbated when the L2 solution is not EVM-compatible, as protocols must allocate significant resources to deploy on these new platforms.

![Tvl](/img/tvl.png)


Moreover, even in cases where protocols successfully deploy on L2, they encounter a fundamental difference in market dynamics compared to L1. For instance, consider Aave pools on Ethereum and Polygon. Despite being the same protocol, each pool operates within distinct L1 and L2 markets, each with its unique characteristics and nuances.

Nimbora introduces a pioneering advancement by bridging the gap for emerging Layer 2 (L2) solutions, granting access to a plethora of Ethereum DeFi protocols (Current integrations). In essence, even nascent L2 platforms devoid of native DeFi infrastructure can now rival Ethereum's DeFi ecosystem with Nimbora's support.

We empower these burgeoning chains, rendering them viable during their transitional phase. Furthermore, our intervention catalyzes the emergence of distinct markets as these platforms mature, thus broadening the DeFi landscape and fostering innovation


## Leveraging Starknet for Enhanced DeFi

Building upon Starknet brings a paradigm shift to Ethereum transactions through zk-STARKs technology, resulting in:

- **Cost-Effective Transactions:** Drastically lowering the cost barrier for participation.
- **Enhanced User Experience:** Providing intuitive and seamless interactions (Native Account Abstraction).
- **Developer-Friendly Ecosystem:** Fostering an environment conducive to innovation and expansion.
- **Swift and Efficient Operations:** Streamlining processes across the blockchain for improved performance.

## **A Word of Caution: Stay Vigilant**

*🐧⚠️ Nimbora has yet to launch an official token. Please remain vigilant against potential scams and rely solely on our official channels for accurate information:*

- 🌐 [Website](https://www.nimbora.io/)
- 👨‍💻 [DApp](https://app.nimbora.io/)
- 🐦 [Twitter](https://twitter.com/Nimbora_)
- 👋 [Discord](http://discord.gg/nimbora)
- 💼 [LinkedIn](https://www.linkedin.com/company/nimbora/)
- ✉️ [Newsletter](https://bit.ly/nimboranewsletter)
- 📖 [Medium](https://medium.com/@Nimbora)

## **Need Help?**

For technical support or questions about Starknet integration, join our [Discord](https://discord.gg/nimbora) community.
[![Nimbora Discord](https://i.ibb.co/23npZRk/Nimbora-Discord.png)](https://discord.gg/nimbora) -->
