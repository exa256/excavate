import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Swapper", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deploySwapperFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner] = await ethers.getSigners();

    const Swapper = await ethers.getContractFactory("Swapper");
    const swapper = await Swapper.deploy();

    return { swapper, owner };
  }

  describe("Declared constants", function () {
    it("Should have the right owner", async function () {
      const { swapper, owner } = await loadFixture(deploySwapperFixture);

      expect(await swapper.owner()).to.equal(owner.address);
    });

    it("Should have the correct router", async function () {
      const { swapper } = await loadFixture(deploySwapperFixture);
      expect(await swapper.ROUTER()).to.equal('0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F');
    });

    it("Should have the correct to and from address", async function () {
      const { swapper, owner } = await loadFixture(deploySwapperFixture);
      expect(await swapper.FROM()).to.equal('0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270');
      expect(await swapper.TO()).to.equal('0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619');
    });
  });
});
