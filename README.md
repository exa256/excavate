# Excavate 🚧
[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)

> An Opinionated smart contract framework focused on TypeScript integrations

## What's included

- built on [Hardhat](https://hardhat.org/) and [Ethers.JS](https://github.com/ethers-io/ethers.js/)
- Zero config, multi-chain from the get go: get [ankr public rpcs](https://www.ankr.com/rpc/) and blockexplorers endpoints already pre-configured
- Type safety first: get [typechain](https://github.com/dethcrypto/TypeChain) type safety for all verified contracts in one command
- Network forks with visual debugger: integrated with [Tenderly](https://tenderly.co/) for full debugging and simulation experience, run tasks, verify executions and check for side-effects at record time
- Mono repo friendly, client and service can easily import modules
- CI/CD friendly: build test pipelines for all smart contract ops via GitOps

## Design Philosophies
Modern smart contract toolings are:

- Too much time with configuration, with multiple: rpc endpoints, chainIds, block explorers
- Reliant on complex contracts and state deps that is slow to run locally and hard to verify 
- Design around solo solidity developer and not for full-stack TypeScript development team workflows

### TODO:
- [ ] code generate action templates
- [ ] improve wallet, signer abstractions
- [ ] simulation wrapper via Tenderly
- [ ] verify contract via tenderly and multiple block explorers
- [ ] integration test suite for each actions, using Mocha
- [ ] leverage GitHub Template
- [ ] supports GitHub actions
- [ ] supports long running forks management
- [ ] supports Anvil for local fork and dry runs
- [ ] supports optional configurations/ middleware in actions pipeline

## Contributing
TBD

## License
Apache 2.0

## Generate remote type
generate new type from arbitrary networks and smart contracts:

`npx hardhat typechain:fetch --address <address of the contract> --name <contract to be named> --chain <chain-name>` 

example:
`npx hardhat typechain:fetch --address 0xd9e1ce17f2641f24ae83637ab66a2cca9c378b9f --name "sushi-router" --chain "ethereum"`

### executing on-chain actions
1. run: `npm run actions`
2. select from available actions
3. select mode: `Dry` to run against a Tenderly fork, `Live` to run against live network