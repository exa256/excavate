import { network, signer } from "../config";
import { Swap } from "../swap";

export const exec = async function () {
  const swap = new Swap(network)
  await swap.beforeLive([signer])
  await swap.action([signer])
}