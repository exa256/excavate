import { JsonRpcProvider } from "@ethersproject/providers";
import { ActionBase } from "../../src/action-base";

export class Action extends ActionBase {
  public async action() {
    console.log('executing an action')
    const provider = this.forkEnabled
      ? this.forkProvider as JsonRpcProvider
      : this.provider as JsonRpcProvider
    const block = await provider.getBlockNumber()
    const network = await provider.getNetwork()
    console.log(`current block ${block}`)
    console.log(`current network \n ID: ${network.chainId} \n Name: ${network.name}`)
  }

  public async beforeDry() {
    console.log("running task before dry run")
  }
  
  public async beforeLive() {
    console.log("implemented")
  }

}