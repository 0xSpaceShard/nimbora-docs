---
id: l1-contracts
title: L1 Contracts
sidebar_position: 1
---

# L1 Contracts

## Prerequisites

Ensure your system meets the following requirements:

- **Node.js**: Version 12 or later. [Download Node.js](https://nodejs.org/)
- **Package Manager**: Either Yarn or npm. [Install Yarn](https://yarnpkg.com/getting-started/install) | [Install npm](https://www.npmjs.com/get-npm)

## Installation Process

Follow these steps to set up the Yield Dex L1 environment:

**Install Dependencies**: Run the following command in your terminal to install the necessary packages:

   ```shell
   yarn
   ```


## Compile

To compile the smart contracts, use the following command:

```shell
yarn hardhat compile
```

## Testing

Run the tests to verify the correct functioning of the contracts:

```shell
yarn hardhat test
```


## Running Scripts

To run deployment scripts or any other custom scripts, use:

```shell
yarn hardhat run <script-path> --network <chosen-network>
```

Scripts are located in the scripts folder.

## Deployment with Hardhat-Deploy

For deploying your contracts with Hardhat-Deploy, use the following command:


```shell
yarn hardhat deploy --network <chosen-network>
```

This command will execute the deployment scripts using Hardhat-Deploy, deploying your contracts to the specified network.


## Environment Setup

For deploying your contracts with Hardhat-Deploy, use the following command:

Before running the above commands, make sure to set up your environment variables. Change the .env.example file to .env and update the values file in the root directory of your project and fill it as per the example provided in .env.example :

```plaintext
ALCHEMY_KEY key=<Your Alchemy Key>
PRIVATE_KEY=<Your Private Key>
```

Alchemy API: Your project ID from Infura, used to connect to Ethereum networks.
PRIVATE_KEY: Your Ethereum private key, used for transactions and contract deployment.

## Building a new strategy

You can build a new strategy building contract inheriting from StrategyBase.sol, you'll need to override virtual methods and add potential additional logic related to the strategy you want to build. 2 built strategies are proposed as examples savingDai.sol and uniswapV3.sol

## Deploying pooling manager and adding new strategies

1. Fill the scripts/config.ts with deployed pooling manager on L2 and deploy the l1 poolingManager using hardhat-deploy. Add this new deployed address in the config.ts

2. (only for goerli): deploy mock contract for your strategy if it is not deployed on this network like it's done with saving dai(cc deploy/savingDai.ts). Or setup the environment of the strategy if it exists like uniswapV3 where you need to deploy a new pool and add liquidity  (cc scripts/deployUniPool.ts and scripts/initAndAddLiq.ts)

3. Add the required addresses in the config.ts for your strategy (uniV3Router for example)

4. Deploy the strategy using hardhat-deploy

5. Register the strategy in the pooling Manager running a script (cc scripts/registerStrategies.ts)

