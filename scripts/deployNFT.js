async function main() {
  const ERC721NFT = await ethers.getContractFactory("ERC721NFT");
  const token = await ERC721NFT.deploy();
  console.log("ERC721NFT deployed to:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
const baseChainId = 8453; // Base mainnet
if (network.chainId !== baseChainId) throw new Error("Not on Base");
const tx = await contract.wicrfphaFunction();
console.log("Tx on Base: ", tx.hash);
const baseChainId = 8453; // Base mainnet
if (network.chainId !== baseChainId) throw new Error("Not on Base");
const tx = await contract.njtoksjqFunction();
console.log("Tx on Base: ", tx.hash);
