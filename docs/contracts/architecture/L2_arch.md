---
id: l2_arch
title: L2 Architecture
sidebar_position: 3
---

## L2 Contracts

### Pooling Manager

The pooling manager plays an intermediate role with L2 Token Manager and L1 communication. The idea is to significantly reduce gas costs on L1 transactions by packing user's requests and mutualizing bridge transfer. It is also responsible for registering all available strategies and processes incoming strategy [reports](/docs/contracts/guides/reports) from L1. 

This design enables isolation between startegies thus, if one strategy report fails, it will not affect other strategies.

### Pooling Factory

The Pooling Factory is a contract able to deploy new Strategies on L2. When it does, it generates two contracts for each strategy. One Token Manager contract and one Token contract. Also, it makes sure that this two newly deployed contracts are linked to the correct strategy on L1, enabling users to interact with it.

### Token Manager

The Token Manager contains all the logic for strategy accountability. This is achieved through the strategy [reports](/docs/contracts/guides/reports). Setting the share price at each epoch and working as an entry point for deposit and withdraw, the Token Manager is the principal contract users will interact with in order to use Nimbora.

### Token

The Token contract represents users's share of the L1 strategy pool, increasing in value at each epoch. Since the Token contract is based on the ERC20 standard, it can be used in DeFi through the Starknet ecosystem.

![l2_arch](/content/L2_arch.png)