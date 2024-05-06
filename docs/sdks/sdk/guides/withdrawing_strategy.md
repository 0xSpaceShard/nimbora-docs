---
id: withdraw
title: Withdrawing from strategy
sidebar_position: 4
---

A withdrawal involves transferring assets from the Layer 2 Token Manager contract on the Starknet network to the Ethereum mainnet. This is a two-step operation. 

First, you call the `requestWithdrawal` function, specifying the number of shares to be converted back into Ethereum tokens. These shares reflect the balance in the Token Manager contract. 

After the withdrawal request is processed and finalized on the StarkNet network, you can claim the withdrawal by calling the `claimWithdrawal` function which moves the tokens back to your Ethereum account.

:::info
The **Underlying** asset represent the tokens users will use to deposit within a strategy. For example, the underlying token for the sDAI strategy is DAI.
:::

### Request Withdrawal

To make a withdrawal request from the token manager, users need to invoke the `requestWithdrawal` function. This function requires the user to specify the amount of shares they wish to exchange for the underlying tokens. 

The `requestWithdrawal` function is part of the Token Manager's smart contract, which manages the transfer of tokens between the layer 2 StarkNet network and the Ethereum mainnet. The shares represent a user's balance in the Token Manager contract. 

When a user calls the `requestWithdrawal` function, they are effectively initiating a process to convert their shares back into the equivalent amount of tokens on the Ethereum mainnet. 

This process is crucial for users who want to move their assets out of the StarkNet network and back to the Ethereum mainnet.

```typescript
...
try {
    const { id, hash } = await tokenManager.requestWithdrawal({
        shares: "100", // Total shares to exchange for the underlying token.
        onTxStageChange: txStageChangeCallback, // Optional callback for getting information about transaction stage.
    })
} catch (e) {
    // Handle Errors
}
```

### Claim Withdrawal

Claiming a withdrawal from a token manager involves several steps. Initially, the user has to call the `claimWithdrawal` function, which facilitates the entire process. 

This function helps in retrieving the tokens that have been previously requested for withdrawal from the Layer 2 Token Manager contract back to the Ethereum mainnet. It's important to note that this can only be done once the withdrawal request has been processed and finalized on the StarkNet network. 

The `claimWithdrawal` function requires the ID of the withdrawal request as a parameter, which is generated when the `requestWithdrawal` function is called. 

After the `claimWithdrawal` function has been successfully executed, the tokens are transferred back to the user's Ethereum account. 

It's a crucial step for users who wish to transfer their assets from the StarkNet network back to the Ethereum mainnet.

```typescript
...
try {
    const hash = await tokenManager.claimWithdrawal({
        claimWithdrawal: "1", // The request withdrawal id.
        onTxStageChange: txStageChangeCallback, // Optional callback for getting information about transaction stage.
    })
} catch (e) {
    // Handle Errors
}
```