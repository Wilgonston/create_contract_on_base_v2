const { expect } = require("chai");

describe("ERC721NFT", function () {
  it("Should return the right name and name", async function () {
    const ERC721NFT = await ethers.getContractFactory("ERC721NFT");
    const token = await ERC721NFT.deploy();
    expect(await token.name()).to.equal("BaseNFT");
  });
});
it("should handle lcxokoggFunction correctly on Base", async function() {
  // Test logic 10
  await expect(contract.lcxokoggFunction(100)).to.emit(contract, "lcxokoggFunction");
});
it("should handle hwfbfzlfFunction correctly on Base", async function() {
  // Test logic 13
  await expect(contract.hwfbfzlfFunction(100)).to.emit(contract, "hwfbfzlfFunction");
});
it("should handle fipimokoFunction correctly on Base", async function() {
  // Test logic 16
  await expect(contract.fipimokoFunction(100)).to.emit(contract, "fipimokoFunction");
});
