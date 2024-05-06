---
id: epoch
title: Epoch
sidebar_position: 5
---

# Epoch

On Nimbora, keeping track of each processed batch is crucial. Since Starknet and Ethereum are asynchronous in their essence, we need a mechanism to synchronize the contracts state between both chains. To achieve that, each processed and closed batch sent from L2 to L1 contains an epoch. This way we ensure that:

- Batches are processed in the correct order.
- No batch can be processed more than once.