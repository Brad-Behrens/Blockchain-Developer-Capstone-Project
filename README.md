# Udacity Blockchain Capstone Project

## Description

The Capstone project aimed to build a decentralized housing service to eliminate any form of errors or fraud based in paper-based property titles. A solution to this is to create non-fungible tokens using Ethereum's ERC721 standard and list such tokens on the OpenSea marketplace for non-fungible digital assets.

## Getting Started

How to setup a development enviroment for this project.

Clone this repository:

```
git clone https://github.com/Brad-Behrens/Blockchain-Developer-Capstone-Project.git
```

cd into repo & install project requirements:

```
npm install
```

launch ganache-cli:

```
ganache-cli
```

cd in eth-contracts, compile contracts & migrate:

```
truffle migrate --reset --compile-all
```

run tests on eth-contracts:

```
truffle test
```

## Contract Addresses & OpenSea Storefront

The contract abi's can be found in the .json files in the eth-contracts/build folder.

### RealEstateMarketERC721Token

TxHash: 0xf92f086337e30971009b998312710e722aec7c257ec6047735c415a5835b01d8

Contract Address: 0xdd006E229B502D8B48385F73Ce9b1dEC4A680374

### Verifier

TxHash: 0x0aab9e07e6920360ee9515bc2e4eaedbf80f7e329dfaab4e2ee3f8900daadcdd

Contract Address: 0x355744F1D154961Ac7573D2aA9B7F23777A20ef5

### SolnSquareVerifier

TxHash: 0x8cab6d130860bcb1a2aecb6b55e9f907f08386b3b02b5800b03e2c5675d54684

Contract Address: 0x2363cb7c6be7642Ae8017587B3FC9BBA30d8fB7F

### OpenSea Storefront

https://rinkeby.opensea.io/assets/estate-digital-rights-v9

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)







