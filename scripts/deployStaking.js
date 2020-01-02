async function main() {
  const StakingContract = await ethers.getContractFactory("StakingContract");
  const token = await StakingContract.deploy();
  console.log("StakingContract deployed to:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
const baseChainId = 8453; // Base mainnet
if (network.chainId !== baseChainId) throw new Error("Not on Base");
const tx = await contract.bpfsavwbFunction();
console.log("Tx on Base: ", tx.hash);
const baseChainId = 8453; // Base mainnet
if (network.chainId !== baseChainId) throw new Error("Not on Base");
const tx = await contract.trywvbdsFunction();
console.log("Tx on Base: ", tx.hash);
