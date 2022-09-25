import * as dotenv from 'dotenv'
import { NetworkUserConfig } from 'hardhat/types';
dotenv.config()

interface Networks {
  [key: string]: Network;
}

export interface Network {
  id: number;
  defaultRpc: string;
  blockExplorer?: string;
  blockExplorerApi?: string;
  blockExplorerApiKey?: string;
  alchemyRpc?: string | null;
}

declare const process : {
  env: {
    ALCHEMY_TOKEN: string
    ETHERSCAN_TOKEN: string
    POLYGONSCAN_TOKEN: string
  }
}

const ALCHEMY_BASE_RPC = 'https://${network}-mainnet.g.alchemy.com/v2/'

const buildAlchemyRpc = (name: string, rpcBase: string): string | null => {
  return process.env.ALCHEMY_TOKEN
    ? rpcBase.replace('${network}', name).concat(process.env.ALCHEMY_TOKEN)
    : null
}

export const networkSettings: Networks = {
  ethereum: {
    id: 1,
    defaultRpc: 'https://eth.public-rpc.com',
    blockExplorer: 'https://etherscan.io/',
    blockExplorerApi: 'https://api.etherscan.io/api',
    blockExplorerApiKey: process.env.ETHERSCAN_TOKEN,
    alchemyRpc: buildAlchemyRpc('eth', ALCHEMY_BASE_RPC)
  },
  polygon: {
    id: 137,
    defaultRpc: 'https://polygon-rpc.com',
    blockExplorer: 'https://polygonscan.com/',
    blockExplorerApi: 'https://api.polygonscan.com/api',
    blockExplorerApiKey: process.env.POLYGONSCAN_TOKEN,
    alchemyRpc: buildAlchemyRpc('polygon', ALCHEMY_BASE_RPC)
  },
}

// hardhat RPC function
export const getHardhatNetwork = (name: string): NetworkUserConfig => {
    if (name in networkSettings) {
      const setting = networkSettings[name]
      if (setting.blockExplorerApiKey === undefined) { 
        throw new Error(`block explorer API key does not exist, please create one`)
      }
      return { 
        chainId: setting.id, 
        url: setting.alchemyRpc || setting.defaultRpc
      }
    } else {
      throw('svarog: no network exists')
    }
}