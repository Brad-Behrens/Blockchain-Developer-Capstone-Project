var ERC721MintableComplete = artifacts.require('RealEstateMarketERC721Token');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0]
    const account_two = accounts[1]
    const account_three = accounts[2]

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});

            // TODO: mint multiple tokens
            await this.contract.mint(account_one, 1)
            await this.contract.mint(account_one, 2)
            await this.contract.mint(account_two, 3)
            await this.contract.mint(account_two, 4)
        })

        // Test successful.
        it('should return total supply', async function () { 
            let totalSupply = await this.contract.totalSupply.call()
            assert.equal(totalSupply, 4, "Error: Invalid total supply.")
        })

        // Test successful.
        it('should get token balance', async function () { 
            let tokenBalance = await this.contract.balanceOf.call(account_one)
            assert.equal(tokenBalance, 2, "Error: Ivalid token balance.")
        })

        // Test successful.
        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let _tokenId = 1
            let tokenURI = await this.contract.tokenURI(_tokenId)
            assert.equal(tokenURI, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1", "Error: Invalid Token URI.") 
        })

        // Test successful.
        it('should transfer token from one owner to another', async function () { 
            let transferTokenId = 2
            await this.contract.transferFrom(account_one, account_two, transferTokenId)
            let newOwner = await this.contract.ownerOf(transferTokenId)
            assert.equal(newOwner, account_two, "Error: Token transfer failed.")
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});
        })

        // Test failed.
        it('should fail when minting when address is not contract owner', async function () { 
            let failed = false
            try {
                await this.contract.mint(account_three, 5)
            } catch(e) {
                failed = true
            }
            assert.equal(failed, true, "Error: Minted by unauthorised address.")
        })

        // Test successful.
        it('should return contract owner', async function () { 
            let contractOwner = await this.contract.getOwner.call()
            assert.equal(contractOwner, account_one, "Error: Not contract owner.")
        })
    });
})