---
id: earn
title: Earn
sidebar_position: 2
sidebar_class_name: hidden
---

## Understanding the Earn Section

There are several yield strategies with different underlying tokens and APR (Annual Percentage Rate). Each card represent a certain strategy, it can be a lending pool, a strategy aggregator, an AMM liquidity pool...

![alt](/content/strategy_nsdai/strategy_nsdai.png)

**APR is the percentage of assets you will earn on your deposit after a year**. If you want to deposit $100 of a certain token in a strategy, if APR is 10% average you'll earn $10 after a year.

**APR is not fixed**. APR can change based on several factor such as market condition or the net asset value of the L1 strategy.

**Here's an APR breakdown of the nsDAI strategy**

![alt](/content/strategy_nsdai/apr_breakdown.png)

1. **Base**: Represents default strategy yield that auto-compounds daily. We take a 20% performance fee. The APRs displayed are what you actually receive, as our performance fee has already been accounted for.
2. **Boost**: Represents incentives provided by the Nimbora team using the [Starknet Catalyst grant](https://medium.com/@Nimbora/nimbora-and-starknet-catalyst-program-14cc7f2f1ab5) that are claimable every week at the [rewards page](https://app.nimbora.io/rewards/).
3. **Incentives**: Represents incentives provided by the Starknet Foundation as a part of the [DeFi Spring 2.0](https://medium.com/@Nimbora/introducing-defi-spring-2-0-bigger-bolder-better-364bb96b02d6) that are claimable every week at the [rewards page](https://app.nimbora.io/rewards/).
4. **Extra: Ekubo LP** Providing Nimbora yield bearing tokens as liquidity on Ekubo is tracked and added to the total claimable STRK amount at the [rewards page](https://app.nimbora.io/rewards/).

**Underlying protocols**. Underlying protocols linked to the strategy are displayed, you can choose the one you are the most comfortable with.

**Underlying token**. The underlying token is the token used to deposit into the strategy, strategy yield bearing token is correlated to the underlying, just providing additional rewards.

**Total value locked**. The total value locked (TVL) is the total amount of assets held in the strategy converted in USD.

Choose the strategy that you want and click on the card for next steps

## How to deposit

Enter the amount you want to deposit or click on the buttons to set a desired percentage of your balance you want to deposit.

![alt](/content/strategy_nsdai/strategy_nsdai_deposit.png)

When you've selected the token amount to deposit, click on "deposit" and follow the prompts on your wallet ([Braavos](https://braavos.app/) or [ArgentX](https://argent.xyz/)) to complete the transaction.

![alt](/content/strategy_nsdai/strategy_nsdai_deposit_wallet.png)

Once the transaction has been accepted on the network, a popup will appear at the bottom right of the screen to let you know.

![alt](/content/strategy_nsdai/strategy_nsdai_deposit_confirm.png)

You can consult all of your recent deposits in the wallet section, your transaction should be here.

![alt](/content/strategy_nsdai/strategy_nsdai_deposit_recent.png)

And that's it, you should be able to see your balance of Nimbora yield token into the portfolio section or directly into your wallet browser.

## How to request a withdrawal

You can choose between two withdrawal options - Instant and Normal.

![alt](../../../static/content/strategy_nsdai/strategy_nsdai_withdraw_instant.png)

Instant withdrawals factor in the price impact and set slippage.

![alt](../../../static/content/strategy_nsdai/strategy_nsdai_withdraw_normal.png)

Normal withdrawals are not synchronous such as deposits and take between 24 and 72 hours to be processed.

Once you have selected the withdraw tab, you will need to decide on the amount you want to withdraw. This could be all or a portion of your assets.

Click on the 'withdraw' button and follow the prompts on your wallet ([Braavos](https://braavos.app/) or [ArgentX](https://argent.xyz/)) to complete the transaction.

![alt](/content/strategy_nsdai/strategy_nsdai_withdraw_wallet.png)

Once the transaction has been accepted on the network, a popup will appear at the bottom right of the screen to let you know.

![alt](/content/strategy_nsdai/strategy_nsdai_withdraw_confirm.png)

You can consult all of your recent deposits in the wallet section, your transaction should be here.

![alt](/content/strategy_nsdai/strategy_nsdai_withdraw_recent.png)

And that's it, you should see your pending request in the navbar.

![alt](/content/strategy_nsdai/strategy_nsdai_withdraw_pending.png)

Nimbora takes over the task of processing this request. This involves preparing your assets in order to be transferred back to your wallet, a process that is handled entirely behind the scenes to ensure a smooth and efficient operation. Once the request is ready to be claimed, Nimbora relayer will handle it and send it directly into your wallet.
