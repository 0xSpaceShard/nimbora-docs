---
id: Borrow
title: Understanding the Borrow Section
sidebar_position: 5
---

There are 2 cards (troves) with 2 different TCR (total collateral ratio). The CR is not fixed, as its value is pegged to the ETH price. That is why the screenshot below might not match the current numbers you will see once you open the troves.

![Untitled](https://i.imgur.com/ERJ3ast.png)

**TCR is the percentage of assets you need to lock up as collateral when borrowing**. If you want to borrow $100 and the TCR is 676%, you must provide $676 worth of assets as collateral.

Lets take as an example this image above - trove 604 TCR will require **less collateral** compared to Trove 910 CR, but Trove 910 TCR is **more secure** than Trove 604 .

Consider this scenario: if all troves were open when the ETH price was at $1600, Trove 910 would have a higher tolerance for price fluctuations compared to Trove 604, allowing it to withstand a more significant drop in ETH price before facing liquidation.

Once the collateral is deposited and locked, users can borrow against it according to the platform's loan-to-value ratio. If the value of the collateral falls below certain thresholds, the system may automatically liquidate the assets to repay the loan.

### **Which trove should you select?**[](https://docs-test.nimbora.io/docs/concepts/guide/borrow#which-trove-should-you-select)

This depends on how much LUSD you want to borrow and ongoing initiatives.

The left trove offers a unique opportunity for users to borrow with minimal transaction costs, subsidized by the [Nimbora x Liquity](https://medium.com/@Nimbora/defi-spring-just-got-better-earn-strk-with-nimbora-x-liquity-d7e881f22c38) collaboration.

## How to borrow[](https://docs-test.nimbora.io/docs/concepts/guide/borrow#how-to-borrow)

Enter the amount you want to supply or click on the buttons to set a desired percentage of your balance you want to deposit. You can also directly enter the amount of LUSD you want to borrow, both fields can be used.

![Untitled](https://docs-test.nimbora.io/assets/images/hborrow-1941d97f77696569971cb08fc3ac7710.png)

Finally, when you've selected the amount, click on "borrow" and follow the prompts on your wallet (Argent or Braavos) to complete the transaction.

![Untitled](https://docs-test.nimbora.io/assets/images/rborrow-a34119612f02aab6231de2d92ce54db7.png)

Once the transaction has been accepted on the network, a popup will appear at the bottom left of the screen to let you know.

![Untitled](https://docs-test.nimbora.io/assets/images/fborrow-5b8541fc949d92743e9d4b401873e954.png)

You can consult all of your recent borrow in the wallet sections, your transaction should be here.

![Untitled](https://docs-test.nimbora.io/assets/images/cborrow-ff7c3058e6326d535fd19f82dfc1f8be.png)

And that's it, your borrow request has been sent, you can see it in pending orders section.

![Untitled](https://docs-test.nimbora.io/assets/images/pborrow-543450737916637591f9a691a798ac38.png)

Borrow should be processed within a day, LUSD will be directly sent to your wallet.

## Repay the Loan[](https://docs-test.nimbora.io/docs/concepts/guide/borrow#repay-the-loan)

First, you need to decide on the amount you want to repay. This could be all of your debt or only a portion of it.

![Untitled](https://docs-test.nimbora.io/assets/images/hrepay-6c2c7a69869035fa0d7c8dfc4e79b3ed.png)

Once you've made up your mind, locate and click on the 'repay' button and follow the prompts on your wallet (Argent or Braavos) to complete the transaction.

![Untitled](https://docs-test.nimbora.io/assets/images/rrepay-c26914c7978772ff7950488c4b5a257c.png)

Once the transaction has been accepted on the network, a popup will appear at the bottom left of the screen to let you know.

![Untitled](https://docs-test.nimbora.io/assets/images/rrepay-c26914c7978772ff7950488c4b5a257c.png)

You can consult all of your recent repays in the wallet sections, your transaction should be here.

![Untitled](https://docs-test.nimbora.io/assets/images/crepay-7f66882a9d5d21530962e6455fdfde79.png)

And that's it, your repay request has been sent, you can see it in pending orders section.

![Untitled](https://docs-test.nimbora.io/assets/images/prepay-30a8f9e62c1eaef021cea60d3203a750.png)

Repay should be processed within a day, ETH will be directly sent to your wallet.