---
id: lusd
title: LUSD
sidebar_position: 1
---

# Understanding Risks Associated with Liquity

## Smart Contract Exploit Risk

Liquity, like any other DeFi protocol, is vulnerable to smart contract exploits. Despite efforts to audit and secure the smart contracts, there remains a risk of undiscovered vulnerabilities. Exploits can lead to loss of funds or manipulation of the protocol.

## Liquidation Risk

### Overview:
When users create a trove in Liquity, they must maintain a collateral ratio of at least 110%. Troves that fall below this threshold are subject to liquidation.

### Process:
1. **Stability Pool Usage**: The system uses funds from the Stability Pool to cancel the debt of undercollateralized troves.
2. **Redistribution Mechanism**: If the Stability Pool lacks sufficient funds, a redistribution mechanism is activated, spreading the debt and collateral of liquidated troves among all trove holders.

### Penalty:
Users facing liquidation may incur a penalty of up to 10%, which incentivizes them to maintain a safe collateral ratio.

## Redemption Risk

### Overview:
Liquity allows direct redemption of LUSD stablecoins for the underlying collateral, Ether. This process carries certain risks for borrowers.

### Process:
1. **Debt Cancellation**: Redeeming LUSD cancels debt from the riskiest trove in the system, i.e., the trove with the lowest collateral ratio.
2. **Collateral Transfer**: The redeemer receives a corresponding amount of Ether from the trove used for debt cancellation.

### Impact:
Redemptions reduce the borrower's leverage and increase the overall collateral ratio of the system. While there's no additional penalty for borrowers, redemptions can lead to collateral loss and deleveraging of positions.


## Vigilant Surveillance:

In the realm of Nimbora, your trove's collateralization ratio is closely monitored by the protocol itself. While you can't directly alter this ratio, rest assured that Nimbora diligently adjusts the risk levels to safeguard against potential liquidations or redemptions.