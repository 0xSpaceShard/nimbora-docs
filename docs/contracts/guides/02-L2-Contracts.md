---
id: l2-contracts
title: L2 Contracts
sidebar_position: 2
---

# L2 Contracts

L2 contracts for Yield Dex project.

## Compilation

We are using Scarb to compile our contracts, you need to install it to be able to use it.
For that, you can follow the steps [here](https://book.cairo-lang.org/ch01-01-installation.html).
Once Scarb is installed, you are able to compile the contracts.
Run `scarb build`, it will build Sierra code of this package which will be written to the `target/dev` directory.

## Test

You can find our tests under `src/tests`, these tests are written using snfoundry you can find more information [here](https://foundry-rs.github.io/starknet-foundry/getting-started/installation.html).
Follow the installation documentation to be able to run our tests.
To run the tests, just do `snforge test`.

## Install dependencies
To install dependencies run the script `./install.sh`

## Create a test account
To create a test account run the script `./account.sh`. Follow the instructions to deploy the account.

## ENVs
Update the ENVs inside the .env file
```plaintext
STARKNET_NETWORK= network goerli or mainnet
ACCOUNT_ADDRESS= account address
ACCOUNT_PK= account private key
```

## Declare With Starkli

For this, we used starkli, you need to install it to be able to declare and deploy the contracts.
If you need to install starkli go to: https://book.starkli.rs/installation
Once starkli is installed, you will need to set some environment variables.
There is a file called .env.example that you should change to .evn (script does this for you). 
If you want to declare on goerli change the `STARKNET_NETWORK=goerli` (you can replace it to be `STARKNET_NETWORK=mainnet` or `STARKNET_NETWORK=sepolia` depending on the network you want to deploy to).

### Singers and account creation

You will have to create a signers and account, just follow those [documentation](https://book.starkli.rs/signers).
Basically steps are as follows:

`starkli signer keystore new ./nimbora_keystore`

## Deployment flow

Now that everything is set up, you are able to declare the contracts.
For that, we will use starkli declare command, for more info check the documentation [here](https://book.starkli.rs/declaring-classes).
Run `starkli declare ./target/dev/CONTRACT_NAME.contract_class.json --account PATH/account-store --network NETWORK`.
`CONTRACT_NAME `the name of the json file that can be found inside `./target/dev/ `folder.
`PATH/account-store` is the path to your account-store that has been previously created.
`NETWORK `the name of the network you want to declare to (goerli, sepolia or mainnet).
After running that, it will return to you the declared contract class hash.

## Declare With Script

Create a `.env` and add `ACCOUNT_ADDRESS` and `ACCOUNT_PK`.
Run `npm i` to install the package.
The script is deploying the contract on goerli if you want to deploy on another network then go inside `scripts/declareContracts` and change `const provider = new RpcProvider({ nodeUrl: constants.NetworkName.SN_MAIN });` with the correct network (ex: SN_GOERLI).
To run the script just do `npx ts-node scripts/declareContracts.ts --contract CONTRACT_NAME.`
`CONTRACT_NAME` must be replaced by :
- PoolingManager
- Factory
- Token
- TokenManager

## Deploy and setup the contracts
### Deploy Pooling manager and Factory
To deploy the factory and the pooling manager run the script `./deploy.sh`

### Setup the Pooling manager
To deploy the factory and the pooling manager run the script `./setupContracts.sh`
This will setup the pooling manager and deploy an sDAI strategy.

Only the owner of the contract will be able to set up the contract.
You can do the setup through voyager or starkscan.

**PoolingManager:**
Only Owner:
- set_fees_recipient: Address of the fees recipient.
- set_l1_pooling_manager: Address of the pooling manager on l1.
- set_factory: Address of the Factory contract previously deployed.

Only Role, the owner has the correct role, but you can also give permission to other accounts:
- register_underlying: Registers an underlying asset, its corresponding bridge contract and the corresponding address of the l1bridge

**Factory:**
Only Owner:
- `deploy_strategy`: Deploys a new strategy with specified parameters.
Parameters are:
    - l1_strategy: The Ethereum address of the L1 strategy
    - underlying: The contract address of the underlying asset
    - token_name: The name for the new token
    - token_symbol: The symbol for the new token
    - performance_fees: The performance fees for the strategy
    - min_deposit: The minimum deposit limit
    - max_deposit: The maximum deposit limit
    - min_withdrawal: The minimum withdrawal limit
    - max_withdrawal: The maximum withdrawal limit
    - withdrawal_epoch_delay: The delay in epochs for withdrawals
    - dust_limit: The dust limit for the strategy
Deploy_strategy will deploy a new contract called token_manager and return you the address. We are going to use this contract to deposit some tokens.

Go to the Token Manager contract address and call the deposit function, This function can be called by any user :

**TokenManager:**
- `deposit`: Allows a user to deposit assets into the contract.
Parameters are:
    - assets: The amount of assets to deposit.
    - receiver: The address to receive the minted shares.
    - referral: The referral address for the deposit.
Once users have deposited some assets, they can now request a withdrawal from the contract.
- `request_withdrawal`: Allows a user to request a withdrawal from the contract
Parameter is:
    - shares: The amount of shares to withdraw.



​