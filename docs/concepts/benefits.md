---
id: benefits
title: Benefits of using Nimbora
sidebar_position: 2
---

### A Gasless experience[](https://docs-test.nimbora.io/docs/concepts/benefits#a-gasless-experience)

You're eager to deposit funds into a L1 DeFi protocol to earn yields or borrow assets, but have you considered the potential cost in gas fees? Could it be $20, $100, or a staggering $300? The same applies for withdrawals or repayments.

![Untitled](https://docs-test.nimbora.io/assets/images/gas-24fad42c1085a78e05ba9f9b5dceec7f.png)

| Action | Gas used | Gas Price (Eth) - 40 Gwei | Gas Price (USD) - 3k eth/usd |
| --- | --- | --- | --- |
| Deposit / Redeem | 700K - 1M6 | 0.030589257 - 0.058813266 | $91.767771 - $176.439798 |
| Borrow / Repay | 580K - 900K | 0.025470271 - 0.039561244 | $76.410813 - $118.683732 |

Given the prevalent gas prices that spike on mainnet, it’s evident that gas fees pose a significant challenge for portfolios of low to medium value. For instance, a $100 gas cost could equate to 1% of a $10,000 portfolio, a substantial proportion that can impact overall returns. This issue is further compounded when adjustments or rebalancing of positions are required.

At Nimbora, our primary objective is to foster inclusivity within the realm of DeFi. We firmly believe that individuals should have the opportunity to earn yields, regardless of whether they're investing $50 or $5,000. Financial constraints should never be a barrier to entry.

Our innovative solution involves batching user transactions, allowing for efficient execution and minimal gas expenditure [More details here](https://docs-test.nimbora.io/docs/concepts/cost_efficiency). By leveraging these cutting-edge technologies, we're breaking down barriers and democratizing access to DeFi opportunities for all.

### Expanding DeFi Access from Layer 2[](https://docs-test.nimbora.io/docs/concepts/benefits#expanding-defi-access-from-layer-2)

While Layer 2 (L2) solutions represent a significant innovation for scaling Ethereum DeFi, the majority of the ecosystem and liquidity remains rooted in Layer 1 (L1). It's important to acknowledge that L2 can take several years to mature into a resilient and robust DeFi ecosystem with deep liquidity. This challenge is further exacerbated when the L2 solution is not EVM-compatible, as protocols must allocate significant resources to deploy on these new platforms.

![Untitled](https://docs-test.nimbora.io/assets/images/tvl-febabe98f33b2685919e3379a89ce9c9.png)

Moreover, even in cases where protocols successfully deploy on L2, they encounter a fundamental difference in market dynamics compared to L1. For instance, consider Aave pools on Ethereum and Polygon. Despite being the same protocol, each pool operates within distinct L1 and L2 markets, each with its unique characteristics and nuances.

Nimbora introduces a pioneering advancement by bridging the gap for emerging Layer 2 (L2) solutions, granting access to a plethora of Ethereum DeFi protocols (Current integrations). In essence, even nascent L2 platforms devoid of native DeFi infrastructure can now rival Ethereum's DeFi ecosystem with Nimbora's support.

We empower these burgeoning chains, rendering them viable during their transitional phase. Furthermore, our intervention catalyzes the emergence of distinct markets as these platforms mature, thus broadening the DeFi landscape and fostering innovation

## Leveraging Starknet for Enhanced DeFi[](https://docs-test.nimbora.io/docs/concepts/benefits#leveraging-starknet-for-enhanced-defi)

Building upon Starknet brings a paradigm shift to Ethereum transactions through zk-STARKs technology, resulting in:

- **Cost-Effective Transactions:** Drastically lowering the cost barrier for participation.
- **Enhanced User Experience:** Providing intuitive and seamless interactions (Native Account Abstraction).
- **Developer-Friendly Ecosystem:** Fostering an environment conducive to innovation and expansion.
- **Swift and Efficient Operations:** Streamlining processes across the blockchain for improved performance.

# Introduction to Nimbora's Cost-Efficiency

Nimbora stands out in the blockchain space primarily due to its innovative approach to minimizing transaction costs for its users. The platform achieves this remarkable feat by leveraging the power of Layer 2 (L2) solutions, specifically Starknet, to offer gas fees that are up to seven times lower than those on the Ethereum mainnet. This significant cost reduction opens up new possibilities for users, making decentralized finance (DeFi) interactions more accessible and economical.

## Understanding Gas Fees Reduction through Layer 2 Solutions[](https://docs-test.nimbora.io/docs/concepts/cost_efficiency#understanding-gas-fees-reduction-through-layer-2-solutions)

### The Role of Starknet in Reducing Costs[](https://docs-test.nimbora.io/docs/concepts/cost_efficiency#the-role-of-starknet-in-reducing-costs)

Starknet plays a crucial role in Nimbora's ability to offer reduced gas fees. As an advanced Layer 2 solution, Starknet enhances the scalability of the blockchain by processing transactions off the main Ethereum chain. This process not only speeds up transactions but also significantly lowers the cost associated with them. By utilizing Starknet, Nimbora taps into these benefits, passing the savings directly to its users.

### Batching Mechanism: Pooling Transactions for Efficiency[](https://docs-test.nimbora.io/docs/concepts/cost_efficiency#batching-mechanism-pooling-transactions-for-efficiency)

Nimbora introduces an innovative batching mechanism that further enhances its cost-efficiency. This mechanism allows users to pool their transactions together, creating a collective action that can interact with DeFi protocols on the Layer 1 (L1) network at a fraction of the usual price. By doing so, Nimbora not only makes transactions more affordable but also fosters a more inclusive and accessible DeFi ecosystem.

## In-Depth Look at Nimbora's Transaction Processing[](https://docs-test.nimbora.io/docs/concepts/cost_efficiency#in-depth-look-at-nimboras-transaction-processing)

### The L2 Pooling Manager: Accumulating and Batching Requests[](https://docs-test.nimbora.io/docs/concepts/cost_efficiency#the-l2-pooling-manager-accumulating-and-batching-requests)

The transaction process begins when the Nimbora L2 Pooling Manager contract receives a request from a user. This contract acts as a collector, gathering individual requests into a new batch. The batching continues until the batch reaches its capacity. At this point, the L2 Pooling Manager packages all the requests into a single bundle and forwards it to the L1 Pooling Manager contract for further processing.

### L1 Verification and Asset Handling[](https://docs-test.nimbora.io/docs/concepts/cost_efficiency#l1-verification-and-asset-handling)

Upon receiving the batch from the L2 side, the L1 Pooling Manager contract must wait for the batch to be verified on the Ethereum mainnet. This verification process is subject to network congestion but typically completes within a 12-hour window. Once verified, the L1 Pooling Manager interacts with the Starkgate Bridge to retrieve the necessary assets. These assets are then deposited according to the predetermined strategies.

### Reporting and Feedback Loop[](https://docs-test.nimbora.io/docs/concepts/cost_efficiency#reporting-and-feedback-loop)

The final step in the transaction process involves the L1 Pooling Manager generating a detailed report. This report confirms the successful deposit of assets and is sent back to the L2 Pooling Manager. This feedback loop ensures transparency and trust in the transaction process, allowing users to confidently engage with Nimbora's DeFi ecosystem.

By adopting these advanced mechanisms and leveraging Layer 2 solutions like Starknet, Nimbora is paving the way for a more affordable and accessible blockchain experience. Its innovative approach to transaction batching and cost reduction not only benefits individual users but also contributes to the broader goal of fostering a more inclusive DeFi ecosystem.

# Understanding Risks Associated with Starknet

[Starknet](https://www.starknet.io/en/explore-starknet), a Layer 2 scaling solution for Ethereum, offers significant benefits in terms of transaction speed and cost. However, like any technology, it comes with its own set of risks. Here, we break down some of these risks in simple terms.

## State Validation: Ensuring Correctness with ZK Proofs[](https://docs-test.nimbora.io/docs/concepts/risks/starknet#state-validation-ensuring-correctness-with-zk-proofs)

- **What It Means**: Starknet uses a technology called zkSTARKs (zero-knowledge Scalable Transparent ARguments of Knowledge) to make sure that all transactions and states (basically, the current information and balance of your account) on the network are correct and valid.
- **Why It Matters**: This technology is crucial for maintaining the integrity and trustworthiness of the network, ensuring that your transactions are accurately recorded.

## Data Availability: Keeping Information Accessible[](https://docs-test.nimbora.io/docs/concepts/risks/starknet#data-availability-keeping-information-accessible)

- **What It Means**: All the necessary data (referred to as state diffs or SD) for constructing proofs of transactions are published and stored directly on the blockchain.
- **Why It Matters**: This practice ensures transparency and allows for the verification of transactions by anyone at any time, contributing to the security and reliability of the network.

## Exit Window: The Challenge of Instant Upgrades[](https://docs-test.nimbora.io/docs/concepts/risks/starknet#exit-window-the-challenge-of-instant-upgrades)

- **What It Means**: Starknet allows for contracts to be upgraded instantly, but it doesn't provide a specific window for users to exit or withdraw their funds if they disagree with an upgrade.
- **Why It Matters**: This could potentially leave users with less control over their assets in the event of a controversial or unwanted network upgrade.

## Sequencer Failure: A Single Point of Failure[](https://docs-test.nimbora.io/docs/concepts/risks/starknet#sequencer-failure-a-single-point-of-failure)

- **What It Means**: Starknet relies on a component called a sequencer to process transactions. If the sequencer fails or starts censoring transactions, there's no alternative mechanism in place to include those transactions in the network.
- **Why It Matters**: This could lead to delays or the inability to execute transactions, impacting the network's reliability.

## Proposer Failure: Limited Withdrawal Options[](https://docs-test.nimbora.io/docs/concepts/risks/starknet#proposer-failure-limited-withdrawal-options)

- **What It Means**: Only certain approved participants (whitelisted proposers) can submit state updates to the Ethereum mainnet. If these proposers fail, users cannot withdraw their funds.
- **Why It Matters**: This limitation could freeze users' assets on the network, preventing access when needed.

---

While Starknet presents a promising solution to Ethereum's scalability challenges, it's important for users to be aware of these potential risks. Understanding these aspects can help users make informed decisions when interacting with the network.

# Understanding Risks Associated with Nimbora

- Smart Contract Vulnerabilities: Smart contracts, despite their transparency and automation, can contain bugs and vulnerabilities. Even after audits, undiscovered issues may exist. Exploits can occur if attackers identify and exploit these vulnerabilities, potentially leading to financial loss or protocol manipulation.
- Strategy Risks: Evaluate the risks associated with the Layer 1 (L1) strategy employed by Nimbora. Strategies may expose users to various risks, including market volatility, impermanent loss, and protocol-specific vulnerabilities. Understanding these risks is essential for informed participation in Nimbora's ecosystem.

## Audit Reports for Nimbora: