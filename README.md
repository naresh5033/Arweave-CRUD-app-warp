# Full stack development with Arweave, Warp, and Next.js

![Full stack development with Arweave, Warp, and Next.js](header.jpg)

This is an example of how to build a full stack application on Arweave with smart contracts running on Smarweave via Warp Protocol.

And this is a next.js app.

This app is a blog/cms kinda app which we can perform CRUD ops

## Arweave

The arweave protocol allows user to store their data permanantly for single upfront fees

## Smart Weave

Arweaeve also has smartweave a smart contract protocol for building permanent app on top of arweave.

It uses lazy evalutation to move the burden of content exec from n/w nodes to SC users.

1. source code and states are stored on the arweave
2. user writes I/p to the SC (as new arweave txs)
3. To calculate the state of the tx, client evaluates the contract state by replying all state updates(all invalid txs are ignored)
4. we can exec arbitrary amt compute w/o worrying abt gas fees w/o state bloat, and we never ve to worry abt gas optimization
5. we can also do ML directly on the protocol both exec of the model and training(The warp contracts builds a demo full scale large language model, living inside the smartweave contract). which is an insane amt of compute which isn't possible anywhere.
6. with smartweave we can write our SC on JS, TS or Rust

## WARP

Warp is a protocol built on top of arweave to facilitate better dev experience with smartweave apps.
The warp consist of 3 layers

1. core layer
2. caching layer
3. Extension layer (consists of cli, debugging tool, diff logging implementations, so called dry-runs )

## Deploy 

To deploy the contract ```node deploy```
To read the state of the contract ```node read.js```

## block Explorer

There is specific block explorer for warp app --> sonar.warp.cc
## Getting started

### Prerequisites

To run this app, we should have:

- Node.js installed on our machine
- [ArConnect](https://www.arconnect.io/) wallet extension

### Deploying and testing on mainnet

- Retreive Arweave tokens (available from the faucet [here](https://faucet.arweave.net/) or from an exchange)
- Install [ArConnect wallet](https://www.arconnect.io/)
- Download and save wallet in a file named `wallet.json`

## Running this project

To run the app, follow these steps:

````

1. Change into the directory and install the dependencies

```sh
cd full-stack-warp-arweave

npm install

# or

yarn
````

3. Deploy the contract to testnet

From the `warp` directory, run the following command:

```
node deploy
```

4. Run the Next.js app

From the root directory, run the following command:

```sh
npm run dev
```

## Running on mainnet

1. Set local environment variable to mainnet in the terminal session we will be deploying from:

```sh
export WARPENV=mainnet
```

2. Create `.env.local` file in the root of the app and add the following environment variable:

```
NEXT_PUBLIC_WARPENV=mainnet
```

3. Deploy the contract to testnet

From the `warp` directory, run the following command:

```
node deploy
```

4. Run the Next.js app

From the root directory, run the following command:

```sh
npm run dev
```
