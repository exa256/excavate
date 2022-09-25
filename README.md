## Generate remote type
generate new type from arbitrary networks and smart contracts:

`npx hardhat typechain:fetch --address <address of the contract> --name <contract to be named> --chain <chain-name>`
ie.
`npx hardhat typechain:fetch --address 0xd9e1ce17f2641f24ae83637ab66a2cca9c378b9f --name "sushi-router" --chain "ethereum"`

### running action script
`npx ts-node ./actions/01_deploy_and_swap/live/run.ts`