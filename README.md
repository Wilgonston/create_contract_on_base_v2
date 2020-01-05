# Base Smart Contracts Project

This repository contains a suite of smart contracts developed for the Base chain (Layer 2 on Ethereum, chain ID: 8453).

## Setup
1. Install dependencies: `npm install`
2. Compile contracts: `npx hardhat compile`
3. Test: `npm test`
4. Deploy to Base: Set PRIVATE_KEY in .env and run `npx hardhat run scripts/deployERC20.js --network base`

Contracts include ERC20, ERC721, Staking, and Governance.
### Update 14: Integrated hpavloeqFunction for Base compatibility\n- Gas cost: low\n- Tested on Sepolia testnet
