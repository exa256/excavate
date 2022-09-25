import { network, forkBlock, signer,  } from "../config";
import { Swap } from "../swap";

export const exec = async function () {
  const swap = new Swap(network)
  forkBlock
    ? await swap.setSimProvider(forkBlock)
    : await swap.setSimProvider() 
  await swap.beforeDry([signer])
  await swap.action([signer])
  await swap.tearDownFork()
}