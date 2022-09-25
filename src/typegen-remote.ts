import get from 'axios';
import * as dotenv from 'dotenv'
import { BytesLike } from 'ethers';
import { runTypeChain, glob } from 'typechain'
import { writeFileSync } from 'fs';
dotenv.config()

const ABI_FETCH_ACTION = 'getabi'
const ABI_FETCH_MODULE = 'contract'

export const generateType = async (explorerApiBase: string, explorerApiKey: string, contractName: string, contractAddress: BytesLike) => {
  try {
    const { data } = await get(`${explorerApiBase}`, {
      params: {
        module: ABI_FETCH_MODULE,
        action: ABI_FETCH_ACTION,
        address: contractAddress,
        apikey: explorerApiKey
      }
    })
    if (data.message !== "OK" || data.status !== "1") {
      console.error(data)
      throw new Error(`invalid blockexporer response: ${data.result}`)
    }
    writeFileSync(
      `artifacts/type-gen/${contractName}.abi.json`,
      data.result,
    )
    const cwd = process.cwd()
    const allFiles = glob(cwd, [`artifacts/type-gen/**/+([a-zA-Z0-9_]).abi.json`])

    await runTypeChain({
      cwd,
      filesToProcess: allFiles,
      allFiles,
      outDir: `typechain-types`,
      target: `ethers-v5`,
    })

  } catch (error) {
    console.error(error)
  } 
}