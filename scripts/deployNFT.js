async function main() {
  const ERC721NFT = await ethers.getContractFactory("ERC721NFT");
  const token = await ERC721NFT.deploy();
  console.log("ERC721NFT deployed to:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
