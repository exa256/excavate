/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  Routerv2,
  Routerv2Interface,
} from "../../../contracts/Swapper.sol/Routerv2";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swapExactTokensForTokens",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class Routerv2__factory {
  static readonly abi = _abi;
  static createInterface(): Routerv2Interface {
    return new utils.Interface(_abi) as Routerv2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Routerv2 {
    return new Contract(address, _abi, signerOrProvider) as Routerv2;
  }
}
