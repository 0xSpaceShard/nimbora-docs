---
id: points
title: Points
sidebar_position: 4
---
## What are Nimbora Points?[](https://docs.nimbora.io/docs/concepts/guide/points#what-are-crypto-points)

![Untitled](https://i.ibb.co/LzNKDpn/Untitled-27.png)

Nimbora points are designed to incentivize and reward users for actively engaging with our platform. These points serve as a metric for off-chain measuring user activity and contribution within the Nimbora ecosystem, providing rewards based on participation levels.

### Key Features of Nimbora Points:[](https://docs.nimbora.io/docs/concepts/guide/points#key-features-of-crypto-points)

1. **Incentivization**: Points encourage participation and engagement by rewarding users for their contributions to the Nimbora ecosystem. These contributions may include providing liquidity (borrow and yield strategies) or promoting adoption (referrals)
2. **Utility**: Beyond their monetary value, Nimbora points will offer utility within the Nimbora ecosystem. Users will be able to utilize these tokens to access premium features and get additional rewards.

### Types of Nimbora Points:
[](https://docs.nimbora.io/docs/concepts/guide/points#types-of-crypto-points)

![Untitled](https://i.ibb.co/qDFcNpc/Untitled-28.png)

- **Earn Points**: Earn points for depositing assets to any of our earn strategies.
- **Borrow Points**: Earn points for borrowing LUSD against ETH in our borrow module.
- **Referral Points**: Earn a fraction of the points your referrals and their invitees make.
- **Rank Points**: Earn extra points based on your leaderboard position, with the top performers having higher earning rate.

## How are on-chain points calculated?[](https://docs.nimbora.io/docs/concepts/guide/points#how-are-on-chain-points-calculated)

### Earn[](https://docs.nimbora.io/docs/concepts/guide/points#earn)

The earn points are calculated daily based user assets deposited in all earn troves. 

**Example**:

nsDAI strategy enables users to put their DAI to use.  Users participating in the strategy will get nsDAI token - representing `DAI`-equivalent yield-bearing tokens. 

![Untitled](https://i.ibb.co/12QVsLr/Untitled-29.png)

The median daily price sourced from Pragma oracles (if not stablecoin) is utilized in this calculation process.

| Day | nsDAI balance | USD equivalent | Points  |
| --- | --- | --- | --- |
| 1 | 3000 | 3000 | 3000 |
| 2 | 3000 | 3200 | 3200 |
| 3 | 3000 | 3400 | 3400 |
| / | Total points  |  | 9600 |

### Borrow[](https://docs.nimbora.io/docs/concepts/guide/points#borrow)

The borrow points are calculated based on the daily user collateral `ETH` deposited in all Liquity troves. 

![Untitled](https://i.ibb.co/tby62s0/Untitled-32.png)

We use the ETH median daily price fetched from Pragma oracles to calculate the pts.

| Day | User’s daily ETH collateral balance | ETH price USD | Earn points |
| --- | --- | --- | --- |
| 1 | 1 | 3000 | 3000 |
| 2 | 0.5 | 3200 | 1600 |
| 3 | 0 | 2800 | 0 |
| / | total points earn |  | 4600 |

### Referral

Before calculating the referral points for each user, a boost is applied to the on-chain users pts (borrow + earn). By default, the boost is `10%`, but strategic partners and users joining through them can receive a higher boost.

![Untitled](https://i.ibb.co/Gxj7TsW/Untitled-30.png)

The referral points are calculated based on the referral relation between users.

For example, we have this referral table:

| Referral | Invited User |
| --- | --- |
| Alice | Bob |
| Alice | Carlo |
| Bob | Sarah |
| Carlo | Alex |

and this is the daily points per user

| User | Points |
| --- | --- |
| Alice | 100 |
| Bob | 200 |
| Carlo | 300 |
| Sarah | 100 |
| Alex | 100 |

First, we boost the users’ points

`referral points = (User points * boost) + (10% Bob + 10% Carlo + 5% Sarah + 5% Alex)`

Using the boosted points we calculate the referral points.

- `Alice` receives:
    - `10%` from `Bob` and `Carlo` direct invitee
    - `5%` from `Sarah` and `Alex` first invitee of a direct invitee.
- `Bob` receives:
    - `10%` from `Sarah` direct invitee
- `Carlo` receives:
    - `10%` from `Alex` direct invitee
- `Sarah` and `Alex` receive nothing haven’t invited anyone.

The following table was calculated using boosted balances.

| User | Alice | Bob | Carlo | Sarah | Alex | TOTAL |
| --- | --- | --- | --- | --- | --- | --- |
| Alice | - | 22 | 33 | 11 | 11 | 77 |
| Bob | - | - | - | 11 | - | 11 |
| Carlo | - | - | - | - | 11 | 11 |
| Sarah | - | - | - | - | - | - |
| Alex | - | - | - | - | - | - |

### Rank[](https://docs.nimbora.io/docs/concepts/guide/points#rank)

Rank points represent extra points earned based on your leaderboard position, with the top performers having higher earning rate. 

![Untitled](https://i.ibb.co/3TSwx37/Screenshot-550.png)
This table represents points bonus based on the leaderboard position: 

| Leaderboard | Boost % |
| --- | --- |
| 1-50 | 20% |
| 51-150 | 15% |
| 151-500 | 10% |
| 501-1000 | 5% |
| 1001+ | 0% |

This table represents points breakdown with the Rank points taken into the account:

| Leaderboard | Earn points | Borrow points | Referral points | % boost | Rank points | Total |
| --- | --- | --- | --- | --- | --- | --- |
| 1-50 | 100 | 50 | 50 | 20% | 40 | 240 |
| 51-150 | 80 | 20 | 0 | 15% | 15 | 115 |
| 151-500 | 70 | 0 | 10 | 10% | 8 | 88 |
| 501-1000 | 30 | 10 | 0 | 5% | 2 | 42 |
| 1001+ | 30 | 5 | 0 | 0% | 0 | 35 |

`Info: When users have the same points the register timestamp is used to order them.`