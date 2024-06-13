const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DegenToken", function () {
    let DegenToken, degenToken, owner, addr1, addr2;

    beforeEach(async function () {
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

        DegenToken = await ethers.getContractFactory("DegenToken");
        degenToken = await DegenToken.deploy(1000000); // Initial supply of 1,000,000 tokens
        await degenToken.waitForDeployment(); // Use await degenToken.deployed() instead of await degenToken.waitForDeployment();
    });

    describe("Deployment", function () {
        it("Should set the right owner", async function () {
            expect(await degenToken.owner()).to.equal(owner.address);
        });

        it("Should assign the total supply of tokens to the owner", async function () {
            const ownerBalance = await degenToken.balanceOf(owner.address);
            expect(await degenToken.totalSupply()).to.equal(ownerBalance);
        });

        it("Should have the correct decimals", async function () {
            const decimals = await degenToken.decimals();
            expect(decimals).to.equal(18);
          });
    });

    describe("Transactions", function () {
        it("Should transfer tokens between accounts", async function () {
            // Transfer 50 tokens from owner to addr1
            await degenToken.transfer(addr1.address, 50);
            const addr1Balance = await degenToken.balanceOf(addr1.address);
            const decimals = await degenToken.decimals();
            expect(addr1Balance).to.equal(ethers.parseUnits("50", decimals));

            // Transfer 50 tokens from addr1 to addr2
            await degenToken.connect(addr1).transfer(addr2.address, 50);
            const addr2Balance = await degenToken.balanceOf(addr2.address);
            expect(addr2Balance).to.equal(ethers.parseUnits("50", decimals));
        });

        it("Should fail if sender doesn’t have enough tokens", async function () {
            const initialOwnerBalance = await degenToken.balanceOf(owner.address);

            // Try to send 1 token from addr1 (0 tokens) to owner (1000000 tokens)
            // `require` will evaluate false and revert the transaction
            await expect(
                degenToken.connect(addr1).transfer(owner.address, 1)
            ).to.be.reverted;

            // Owner balance shouldn't have changed.
            expect(await degenToken.balanceOf(owner.address)).to.equal(initialOwnerBalance);
        });
    });

    describe("Minting", function () {
        it("Should mint tokens to an account", async function () {
            await degenToken.mint(addr1.address, 100);
            const addr1Balance = await degenToken.balanceOf(addr1.address);
            const decimals = await degenToken.decimals();
            expect(addr1Balance).to.equal(ethers.parseUnits("100", decimals));
        });
    });

    describe("Burning", function () {
        it("Should burn tokens from an account", async function () {
            await degenToken.transfer(addr1.address, 100);
            await degenToken.connect(addr1).burn(50);
            const addr1Balance = await degenToken.balanceOf(addr1.address);
            const decimals = await degenToken.decimals();
            expect(addr1Balance).to.equal(ethers.parseUnits("50", decimals));
        });
    });

    describe("Redeeming", function () {

        
        it("Should redeem tokens if enough balance", async function () {
            const decimals = await degenToken.decimals();
            await degenToken.transfer(addr1.address, 100);
            // Connect to addr1 and redeem the item
            await degenToken.connect(addr1).redeemItem(2); // Redeem the item
      
            // Check the balance of addr1
            const addr1Balance = await degenToken.balanceOf(addr1.address);
            expect(addr1Balance).to.equal(ethers.parseUnits("50", decimals)); // Assuming item cost is 50 * 10**18 tokens
          });
        
    
        it("Should fail to redeem if Item ID is invalid", async function () {
            await expect(degenToken.connect(addr1).redeemItem(100)).to.be.revertedWith(
                "Invalid item ID" 
            );
        });

        it("Should fail to redeem if balance is insufficient", async function () {
            await expect(degenToken.connect(addr1).redeemItem(0)).to.be.revertedWith(
                "Insufficient balance"
            );
        });
    });
});
