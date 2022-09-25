import { network } from "../config";
import { Action } from "../action";

export const exec = async function () {
  const swap = new Action(network)
  await swap.beforeLive()
  await swap.action()
}