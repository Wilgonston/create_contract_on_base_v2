const { expect } = require("chai");

describe("StakingContract", function () {
  it("Should return the right name and name", async function () {
    const StakingContract = await ethers.getContractFactory("StakingContract");
    const token = await StakingContract.deploy();
    expect(await token.name()).to.equal("StakingContract");
  });
});
