const { expect } = require("chai");

describe("ERC20Token", function () {
  it("Should return the right name and symbol", async function () {
    const ERC20Token = await ethers.getContractFactory("ERC20Token");
    const token = await ERC20Token.deploy();
    expect(await token.name()).to.equal("BaseToken");
  });
});
it("should handle hpeqiiwqFunction correctly on Base", async function() {
  // Test logic 5
  await expect(contract.hpeqiiwqFunction(100)).to.emit(contract, "hpeqiiwqFunction");
});
it("should handle aflznlzaFunction correctly on Base", async function() {
  // Test logic 15
  await expect(contract.aflznlzaFunction(100)).to.emit(contract, "aflznlzaFunction");
});
