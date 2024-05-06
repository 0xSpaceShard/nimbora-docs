---
id: cost_efficiency
title: Cost Efficiency
sidebar_position: 3
---

# Introduction to Nimbora's Cost-Efficiency

Nimbora stands out in the blockchain space primarily due to its innovative approach to minimizing transaction costs for its users. The platform achieves this remarkable feat by leveraging the power of Layer 2 (L2) solutions, specifically Starknet, to offer gas fees that are up to seven times lower than those on the Ethereum mainnet. This significant cost reduction opens up new possibilities for users, making decentralized finance (DeFi) interactions more accessible and economical.

## Understanding Gas Fees Reduction through Layer 2 Solutions

### The Role of Starknet in Reducing Costs

Starknet plays a crucial role in Nimbora's ability to offer reduced gas fees. As an advanced Layer 2 solution, Starknet enhances the scalability of the blockchain by processing transactions off the main Ethereum chain. This process not only speeds up transactions but also significantly lowers the cost associated with them. By utilizing Starknet, Nimbora taps into these benefits, passing the savings directly to its users.

### Batching Mechanism: Pooling Transactions for Efficiency

Nimbora introduces an innovative batching mechanism that further enhances its cost-efficiency. This mechanism allows users to pool their transactions together, creating a collective action that can interact with DeFi protocols on the Layer 1 (L1) network at a fraction of the usual price. By doing so, Nimbora not only makes transactions more affordable but also fosters a more inclusive and accessible DeFi ecosystem.

## In-Depth Look at Nimbora's Transaction Processing

### The L2 Pooling Manager: Accumulating and Batching Requests

The transaction process begins when the Nimbora L2 Pooling Manager contract receives a request from a user. This contract acts as a collector, gathering individual requests into a new batch. The batching continues until the batch reaches its capacity. At this point, the L2 Pooling Manager packages all the requests into a single bundle and forwards it to the L1 Pooling Manager contract for further processing.

### L1 Verification and Asset Handling

Upon receiving the batch from the L2 side, the L1 Pooling Manager contract must wait for the batch to be verified on the Ethereum mainnet. This verification process is subject to network congestion but typically completes within a 12-hour window. Once verified, the L1 Pooling Manager interacts with the Starkgate Bridge to retrieve the necessary assets. These assets are then deposited according to the predetermined strategies.

### Reporting and Feedback Loop

The final step in the transaction process involves the L1 Pooling Manager generating a detailed report. This report confirms the successful deposit of assets and is sent back to the L2 Pooling Manager. This feedback loop ensures transparency and trust in the transaction process, allowing users to confidently engage with Nimbora's DeFi ecosystem.

By adopting these advanced mechanisms and leveraging Layer 2 solutions like Starknet, Nimbora is paving the way for a more affordable and accessible blockchain experience. Its innovative approach to transaction batching and cost reduction not only benefits individual users but also contributes to the broader goal of fostering a more inclusive DeFi ecosystem.