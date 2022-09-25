import * as dotenv from 'dotenv'
import axios from 'axios';
import { ethers, utils } from "ethers";

dotenv.config()
declare const process : {
  env: {
    TENDERLY_USER: string
    TENDERLY_PROJECT: string
    TENDERLY_ACCESS_KEY: string
  }
}

const DEFAULT_BLOCK_HEIGHT = 14537885 

const TENDERLY_PROJECT = process.env.TENDERLY_PROJECT
const TENDERLY_USER = process.env.TENDERLY_USER
const TENDERLY_ACCESS_KEY = process.env.TENDERLY_ACCESS_KEY

const TENDERLY_FORK_API = `https://api.tenderly.co/api/v1/account/${TENDERLY_USER}/project/${TENDERLY_PROJECT}/fork`; 


interface forkProvider {
  provider: ethers.providers.JsonRpcProvider
  url: string
  forkId: string
}

export const createForkProvider = async function(networkId: string, blockHeight?: Number): Promise<forkProvider> {
  if (!TENDERLY_ACCESS_KEY) { throw new Error ('TENDERLY_ACCESS_KEY is not set')}
  if (!TENDERLY_USER) { throw new Error ('TENDERLY_USER is not set')}
  if (!TENDERLY_PROJECT) { throw new Error ('TENDERLY_PROJECT is not set')}
  const opts = {
    headers: {
        'X-Access-Key': TENDERLY_ACCESS_KEY as string,
    }
  }
  const body = {
    "network_id": networkId,
    "block_number": blockHeight || DEFAULT_BLOCK_HEIGHT,
  }
  
  const resp = await axios.post(TENDERLY_FORK_API, body, opts)
  const forkId = resp.data.simulation_fork.id;
  const forkRpc = `https://rpc.tenderly.co/fork/${forkId}`
  return { 
    provider: new ethers.providers.JsonRpcProvider(forkRpc),
    url: forkRpc,
    forkId: forkId
  }
}

export const deleteFork = async function (forkId: string) {
  if (!TENDERLY_ACCESS_KEY) { throw new Error ('TENDERLY_ACCESS_KEY is not set')}
  if (!TENDERLY_USER) { throw new Error ('TENDERLY_USER is not set')}
  if (!TENDERLY_PROJECT) { throw new Error ('TENDERLY_PROJECT is not set')}
  const opts = {
    headers: {
        'X-Access-Key': TENDERLY_ACCESS_KEY as string,
    }
  }
  await axios.delete(`${TENDERLY_FORK_API}/${forkId}`, opts)
}

export const ethFaucet = async function (
  provider: ethers.providers.JsonRpcProvider,
  wallet: string,
  amount: ethers.utils.Hexable
) {
  const params = [
    wallet,
    utils.hexValue(amount) // hex encoded wei amount
  ];
  return await provider.send('tenderly_addBalance', params)
}
