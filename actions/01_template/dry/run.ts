import { network, forkBlock } from "../config";
import { Action } from "../action";

export const exec = async function () {
  const swap = new Action(network)
  forkBlock
    ? await swap.setSimProvider(forkBlock)
    : await swap.setSimProvider() 
  await swap.beforeDry()
  await swap.action()
  await swap.tearDownFork()
}