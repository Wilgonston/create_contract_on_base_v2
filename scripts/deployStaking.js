async function main() {
  const StakingContract = await ethers.getContractFactory("StakingContract");
  const token = await StakingContract.deploy();
  console.log("StakingContract deployed to:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
