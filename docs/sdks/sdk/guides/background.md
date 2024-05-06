---
id: background
title: Background
sidebar_position: 2
---

# Background

For those new to Nimbora, reviewing some key web3 developer concepts, the format of our examples, and SDK ideas can be beneficial before starting the integration.

## Providers

Interacting with the blockchain typically involves utilizing a provider and local representations of smart contracts along with their ABIs.

In our examples, we use the [starknet.js](https://www.starknetjs.com/docs/guides/intro/) library to accomplish this. Initializing a provider requires a data source. We present two options in our examples:

- JSON RPC URL: Services like [Infura](https://www.infura.io) or [Alchemy](https://www.starknetjs.com/docs/guides/intro/) offer JSON RPC URLs for various chains and testnets, which you can use if you're directly interacting with the Ethereum mainnet or a local fork. In our examples, we primarily use the Ethereum mainnet.

## SDK Structures and Concepts

Understanding the design decisions and their necessities can be beneficial when working with the SDK. Here are a few key concepts.

### ABI

Each smart contract offers an Application Binary Interface (ABI), enabling other users to interact with it. ABIs, defined on the blockchain, must be accurately supplied to our Javascript functionalities. Various SDKs provide the necessary ABIs, which are imported when required. In some instances, an ABI may be directly defined as needed.

### Currency

Currently, the Starknet network uses the ERC20 version of Ethereum (ETH) for transaction fees. ERC20 is a standard used for smart contracts on the Ethereum blockchain for implementing tokens. However, Starknet plans to transition to using its own native token, STRK, for transaction costs in the future. This shift will occur to further establish Starknet's ecosystem and potentially bring about new dynamics and utilities within the network.