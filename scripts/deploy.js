const hre = require("hardhat");

async function main() {
  const DToken = await hre.ethers.getContractFactory("DegenToken");
  const dToken = await DToken.deploy(100000000);

  await dToken.waitForDeployment();

  console.log("DegenToken deployed to:",await dToken.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
