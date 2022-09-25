import "@nomicfoundation/hardhat-toolbox";
import { HardhatUserConfig, task } from "hardhat/config";
import { getHardhatNetwork, networkSettings } from "./src/networks";
import { generateType } from "./src/typegen-remote"

task("typechain:fetch", "Generate TypeScript code from blockexplorer ABI")
.addParam("address", "Address of the verified contract")
.addParam("name", "Contract name to specify type as")
.addParam("chain", "which network to target")
.setAction(async (taskArgs) => { 
  console.log('generating type definition code from remote ABI')
  const chain = taskArgs.chain as string
  if (networkSettings[chain] === undefined) throw new Error('network name does not exist')
  await generateType(
    networkSettings[chain].blockExplorerApi as string, 
    networkSettings[chain].blockExplorerApiKey as string,
    taskArgs.name,
    taskArgs.address
  )
  console.log(`type definition generated at typechain-types/${taskArgs.name}.ts`)
})

let config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {}
};

config.networks!.ethereum = getHardhatNetwork('ethereum');
// config.networks!.polygon = getHardhatNetwork('polygon');
// config.networks!.optimism = getHardhatNetwork('optimism');

export default config;