import { JsonRpcProvider } from "@ethersproject/providers"
import { ethers } from "ethers"
import { createForkProvider, deleteFork } from './fork'
import { Network, networkSettings } from './networks'

// base action runner to be exported and extend
export abstract class ActionBase {
  private networkContext: Network
  private forkEndpoint: String | undefined
  private forkId: String | undefined
  private forkBlock: Number | undefined
  public forkEnabled: Boolean
  public utils: typeof ethers.utils 
  public provider: ethers.providers.JsonRpcProvider
  public forkProvider: ethers.providers.JsonRpcProvider | undefined
  public abstract beforeLive(): any
  public abstract beforeDry(): any
  public abstract action(accounts? : ethers.Wallet[]): any

  public constructor(network: Network) {
    this.networkContext = network
    this.utils = ethers.utils
    this.provider = new ethers.providers.JsonRpcProvider(network.alchemyRpc || network.defaultRpc)
    this.forkEnabled = false
  }

  // allows action script to customize a block height number
  public async setSimProvider(forkBlock?: Number) {
    const blockHeight = forkBlock 
      ? forkBlock // user sets input block num
      : await this.provider.getBlockNumber() // fetches the latest block number
    const { provider, url, forkId } = await createForkProvider(
      String(this.networkContext.id),
      blockHeight
    )
    this.forkProvider = provider
    this.forkEndpoint = url
    this.forkId = forkId
    this.forkEnabled = true
  }

  public resolveProvider(): JsonRpcProvider {
    return this.forkEnabled
      ? this.forkProvider as JsonRpcProvider
      : this.provider as JsonRpcProvider
  }

  public async tearDownFork() {
    await deleteFork(
      this.forkId as string
    )
    console.log('tear down fork')
  }

}
