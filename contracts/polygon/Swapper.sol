// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface routerv2 {
  function swapExactTokensForTokens(
    uint amountIn,
    uint amountOutMin,
    address[] calldata path,
    address to,
    uint deadline
  ) external returns (uint[] memory amounts);
}

contract Swapper is Ownable{
  address public constant FROM = 0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270; // wrapped matic
  address public constant TO = 0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619; // wrapped eth
  // router address
  address public constant ROUTER = 0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506;

  /// @dev swap strictly swaps a token pair with fixed amount and fixed path
  function swap(
    uint amountIn,
    uint amountOutMin,
    uint deadline
  ) public onlyOwner() returns (uint[] memory amounts) {
    IERC20(FROM).approve(ROUTER, amountIn);
    address[] memory path = new address[](2);
    path[0] = FROM;
    path[1] = TO;
    return routerv2(ROUTER).swapExactTokensForTokens(
      amountIn,
      amountOutMin,
      path,
      msg.sender,
      deadline
    );
  }

  /// @dev sweeps recovers a token from the contract
  function sweep(address token, uint256 amount) public onlyOwner() {
    IERC20(token).transfer(msg.sender, amount);
  }
}