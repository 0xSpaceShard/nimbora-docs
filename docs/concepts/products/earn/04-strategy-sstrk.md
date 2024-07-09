---
id: sstrk
title: sSTRK Strategy
sidebar_position: 4
sidebar_class_name: hidden
---


**Saving STRK Vault is an advanced yield aggregator pool designed to provide the best possible returns.** When users deposit their STRK into the Saving STRK vault, the system actively employs advanced DeFi strategies to generate potential profits over time, optimizing their earning potential through automated and strategic investments.

1. **Automated Yield Generation**: Vaults optimize yield farming by shifting capital between different DeFi protocols.
2. **Passive Investment Strategy**: Vaults automate complex processes, allowing users without deep DeFi knowledge to earn returns.
3. **Dynamic Rebalancing**: The system continually adjusts to maximize profits as market conditions change.
4. **Modular Architecture**: Simplifies strategy creation and maintenance, encouraging innovation and reducing error rates.
5. **ERC-4626 Compatibility**: Ensures easy integration with other DeFi projects.
6. **Share Locking**: Prevent Sandwich attack on the vault when claiming $STRK coming from DeFi Spring.

Saving STRK Vaults represent a sophisticated yet user-friendly way to engage in yield farming, bringing both efficiency and accessibility to DeFi investors.

![alt](/content/strategy_sstrk/overview.png)


This strategy combines multiple steps into multiple protocol: 
- underling is deposited in the main vault.
- The amount deposited is splitted into the different strategy respecting the debt allocation provided by the debt manager.
- Profits generated are periodically compounded and debt is reallocated dynamically following market conditions
- Rewards from defi spring is automatically claimed and vested over a week into the strategy

Tokenized strategy are running unique strategies that could come from: 
- Pure Lending
- DeFi Pooling
- Liquidity provision in meta-stable pools
- Liquidity provision in option pools
- Staking

The current vault is made of the following: 
- No strategies implemented yet.

### Understanding Risks Associated with Savings STRK

1. **Smart Contract Risk**:
    - Savings STRK vault aggregator smart contracts risks.
    - Underlying tokenized strategy Component risks.
2. **Interaction with Third-party Protocols**:
    - Tokenized strategies are interacting with third party protcol such as AMM, lending borrowing or else... Looks at active strategies used by the main vault for more details.