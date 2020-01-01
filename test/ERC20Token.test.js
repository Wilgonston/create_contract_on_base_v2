const { expect } = require("chai");

describe("ERC20Token", function () {
  it("Should return the right name and symbol", async function () {
    const ERC20Token = await ethers.getContractFactory("ERC20Token");
    const token = await ERC20Token.deploy();
    expect(await token.name()).to.equal("BaseToken");
  });
});
