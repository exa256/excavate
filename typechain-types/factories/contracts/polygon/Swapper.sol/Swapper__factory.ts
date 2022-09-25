/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  Swapper,
  SwapperInterface,
} from "../../../../contracts/polygon/Swapper.sol/Swapper";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "FROM",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ROUTER",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TO",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
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
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swap",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "sweep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610e408061010d6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638da5cb5b1161005b5780638da5cb5b146100ef5780639d9892cd1461010d578063edaefdb71461013d578063f2fde38b1461015b57610088565b806332fe7b261461008d5780636217bbe0146100ab5780636ea056a9146100c9578063715018a6146100e5575b600080fd5b610095610177565b6040516100a2919061072f565b60405180910390f35b6100b361018f565b6040516100c0919061072f565b60405180910390f35b6100e360048036038101906100de91906107c0565b6101a7565b005b6100ed610241565b005b6100f7610255565b604051610104919061072f565b60405180910390f35b61012760048036038101906101229190610800565b61027e565b6040516101349190610911565b60405180910390f35b610145610508565b604051610152919061072f565b60405180910390f35b61017560048036038101906101709190610933565b610520565b005b731b02da8cb0d097eb8d57a175b88c7d8b4799750681565b737ceb23fd6bc0add59e62ac25578270cff1b9f61981565b6101af6105a4565b8173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b81526004016101ea92919061096f565b602060405180830381600087803b15801561020457600080fd5b505af1158015610218573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061023c91906109d0565b505050565b6102496105a4565b6102536000610622565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606102886105a4565b730d500b1d8e8ef31e21c99d1db9a6444d3adf127073ffffffffffffffffffffffffffffffffffffffff1663095ea7b3731b02da8cb0d097eb8d57a175b88c7d8b47997506866040518363ffffffff1660e01b81526004016102eb92919061096f565b602060405180830381600087803b15801561030557600080fd5b505af1158015610319573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061033d91906109d0565b506000600267ffffffffffffffff81111561035b5761035a6109fd565b5b6040519080825280602002602001820160405280156103895781602001602082028036833780820191505090505b509050730d500b1d8e8ef31e21c99d1db9a6444d3adf1270816000815181106103b5576103b4610a2c565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050737ceb23fd6bc0add59e62ac25578270cff1b9f6198160018151811061041857610417610a2c565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050731b02da8cb0d097eb8d57a175b88c7d8b4799750673ffffffffffffffffffffffffffffffffffffffff166338ed173986868433886040518663ffffffff1660e01b81526004016104a7959493929190610b19565b600060405180830381600087803b1580156104c157600080fd5b505af11580156104d5573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906104fe9190610cb2565b9150509392505050565b730d500b1d8e8ef31e21c99d1db9a6444d3adf127081565b6105286105a4565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610598576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058f90610d7e565b60405180910390fd5b6105a181610622565b50565b6105ac6106e6565b73ffffffffffffffffffffffffffffffffffffffff166105ca610255565b73ffffffffffffffffffffffffffffffffffffffff1614610620576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061790610dea565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610719826106ee565b9050919050565b6107298161070e565b82525050565b60006020820190506107446000830184610720565b92915050565b6000604051905090565b600080fd5b600080fd5b6107678161070e565b811461077257600080fd5b50565b6000813590506107848161075e565b92915050565b6000819050919050565b61079d8161078a565b81146107a857600080fd5b50565b6000813590506107ba81610794565b92915050565b600080604083850312156107d7576107d6610754565b5b60006107e585828601610775565b92505060206107f6858286016107ab565b9150509250929050565b60008060006060848603121561081957610818610754565b5b6000610827868287016107ab565b9350506020610838868287016107ab565b9250506040610849868287016107ab565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6108888161078a565b82525050565b600061089a838361087f565b60208301905092915050565b6000602082019050919050565b60006108be82610853565b6108c8818561085e565b93506108d38361086f565b8060005b838110156109045781516108eb888261088e565b97506108f6836108a6565b9250506001810190506108d7565b5085935050505092915050565b6000602082019050818103600083015261092b81846108b3565b905092915050565b60006020828403121561094957610948610754565b5b600061095784828501610775565b91505092915050565b6109698161078a565b82525050565b60006040820190506109846000830185610720565b6109916020830184610960565b9392505050565b60008115159050919050565b6109ad81610998565b81146109b857600080fd5b50565b6000815190506109ca816109a4565b92915050565b6000602082840312156109e6576109e5610754565b5b60006109f4848285016109bb565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610a908161070e565b82525050565b6000610aa28383610a87565b60208301905092915050565b6000602082019050919050565b6000610ac682610a5b565b610ad08185610a66565b9350610adb83610a77565b8060005b83811015610b0c578151610af38882610a96565b9750610afe83610aae565b925050600181019050610adf565b5085935050505092915050565b600060a082019050610b2e6000830188610960565b610b3b6020830187610960565b8181036040830152610b4d8186610abb565b9050610b5c6060830185610720565b610b696080830184610960565b9695505050505050565b600080fd5b6000601f19601f8301169050919050565b610b9282610b78565b810181811067ffffffffffffffff82111715610bb157610bb06109fd565b5b80604052505050565b6000610bc461074a565b9050610bd08282610b89565b919050565b600067ffffffffffffffff821115610bf057610bef6109fd565b5b602082029050602081019050919050565b600080fd5b600081519050610c1581610794565b92915050565b6000610c2e610c2984610bd5565b610bba565b90508083825260208201905060208402830185811115610c5157610c50610c01565b5b835b81811015610c7a5780610c668882610c06565b845260208401935050602081019050610c53565b5050509392505050565b600082601f830112610c9957610c98610b73565b5b8151610ca9848260208601610c1b565b91505092915050565b600060208284031215610cc857610cc7610754565b5b600082015167ffffffffffffffff811115610ce657610ce5610759565b5b610cf284828501610c84565b91505092915050565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000610d68602683610cfb565b9150610d7382610d0c565b604082019050919050565b60006020820190508181036000830152610d9781610d5b565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000610dd4602083610cfb565b9150610ddf82610d9e565b602082019050919050565b60006020820190508181036000830152610e0381610dc7565b905091905056fea2646970667358221220c92e6b24cbd979370db43a46eb9aa04d72328ca6d9279e60ad788be125b926ff64736f6c63430008090033";

type SwapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SwapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Swapper__factory extends ContractFactory {
  constructor(...args: SwapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Swapper> {
    return super.deploy(overrides || {}) as Promise<Swapper>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Swapper {
    return super.attach(address) as Swapper;
  }
  override connect(signer: Signer): Swapper__factory {
    return super.connect(signer) as Swapper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SwapperInterface {
    return new utils.Interface(_abi) as SwapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Swapper {
    return new Contract(address, _abi, signerOrProvider) as Swapper;
  }
}