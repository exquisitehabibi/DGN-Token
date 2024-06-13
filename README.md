# DGN-Token

This project demonstrates the integration of Solidity smart contracts for token minting, transferring, redeeming, and burning with the Hardhat development environment. It serves as a starting point for building a decentralized application (DApp) for a gaming platform that rewards players with tokens.

## Description

DegenToken is an ERC20 token designed for a gaming platform. It allows the platform owner to mint new tokens and distribute them as rewards to players. Players can transfer their tokens to others, redeem them for items in the in-game store, check their token balance, and burn tokens that they no longer need. The smart contract is written in Solidity, and the project includes scripts for deploying the contract to the Avalanche Fuji Testnet and testing it using Hardhat.

## Getting Started

### Executing program

To run this program, you can use VSCode or online IDEs like Gitpod. To get started, clone this repository using the following cmd in terminal: git clone _url_.

After cloning the github, you will first want to create a .env file to enter the "PRIVATE_KEY" and "NETWORK_URL" , which in this case is Fuji (https://api.avax-test.network/ext/bc/C/rpc)  testnet.

Then perform the following to get the code running on your computer:

1. Inside the project directory, in the terminal type: npm i
2. To test the contract's functionality using test.js, type: npx hardhat test
3. To deploy the contract, type: npx hardhat run --network fuji scripts/deploy.js

After this, the project will be running on Fuji testnet.
You can then use the contact's deployment address to interact with contract using Remix (https://remix.ethereum.org/) IDE or by creating your own frontend.
You can also track the transactions using blockchain explorers like testnet snowtrace (https://testnet.snowtrace.io/).

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Authors

Arun Thakur
@exquisitehabibi
