import { ContractFactory, utils, Wallet } from "ethers";
import hre from "hardhat";
import { ActionBase } from "../../src/action-base";
import { RouterAbi__factory } from "../../typechain-types/factories/RouterAbi__factory";
import { ethFaucet } from "../../src/fork";
import { WrappedMaticAbi__factory } from "../../typechain-types";

const AMOUNT_IN = utils.parseEther('1') // expect amount input
const AMOUNT_OUT_MIN = '100000000000' // expected min output
const WMATIC = "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
const WETH = "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
const ROUTER = "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506"

export class Swap extends ActionBase {
  public async action(accounts?: Wallet[]) {
    const provider = this.resolveProvider()
    const sushiRouter = RouterAbi__factory.connect(ROUTER, provider)
    const amountOutEst = await sushiRouter.getAmountsOut(AMOUNT_IN, [WMATIC, WETH])
    console.log('WMATIC input: ', amountOutEst[0].toString())
    console.log('WETH output: ', amountOutEst[1].toString())
    if (amountOutEst[1].lt(AMOUNT_OUT_MIN)) {
      throw new Error('output amount less than expected')
    }
    const swpArtifacts = await hre.artifacts.readArtifact("Swapper")
    const [ deployer ] = accounts as Wallet[]
    const signer = deployer.connect(provider)
    const Swapper = new ContractFactory(
      swpArtifacts.abi,
      swpArtifacts.bytecode,
      signer
    )
    const swapper = await Swapper.deploy()
    await swapper.deployed()
    console.log(
      `deployment tx: ${swapper.deployTransaction.hash}
      \n swapper address: ${swapper.address}`
    )
    // feed wmatic into the contract
    const wmatic = WrappedMaticAbi__factory.connect(WMATIC, signer)
    const depositTx = await wmatic.deposit({value: AMOUNT_IN})
    // console.log(`deposit tx: ${depositTx.hash}`)
    await wmatic.transfer(swapper.address, AMOUNT_IN)
    const wmaticBal = await wmatic.balanceOf(swapper.address)
    console.log(`wmatic balance of swapper: ${wmaticBal}`)
    // execute the swap
    const swaptx = await swapper.swap(AMOUNT_IN, AMOUNT_OUT_MIN, "1764097207")
    console.log(`swap transaction: ${swaptx.hash}`)
  }

  public async beforeDry(accounts?: Wallet[]) {
    // matic faucet to deployer
    const [ deployer ] = accounts as Wallet[]
    const provider = this.resolveProvider()
    await ethFaucet(provider, deployer.address, utils.parseEther('2'))
    const ethBal = await provider.getBalance(deployer.address)
    console.log(`new user balance for ${deployer.address} is ${ethBal.toString()}`)
  }
  
  public async beforeLive(accounts?: Wallet[]) {
    const [ deployer ] = accounts as Wallet[]
    const provider = this.resolveProvider()
    // check for gas balance
    const ethBal = await provider.getBalance(deployer.address)
    if (ethBal.lt(utils.parseEther('2'))) {
      throw new Error(`insufficient gas for ${deployer.address}`)
    }
  }

}