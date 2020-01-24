// Test if a new solution can be added for contract - SolnSquareVerifier
var SolnSquareVerifier = artifacts.require('SolnSquareVerifier')
var SquareVerifier = artifacts.require('verifier')
var solutionProof = require('../../zokrates/code/square/proof.json')

// Test if an ERC721 token can be minted for contract - SolnSquareVerifier

contract('SolnSquareVerifier', accounts => {

    let account_one = accounts[0]
    let account_two = accounts[1]
    
    let solutionHash = ""

    describe('Test SolnSquareVerifier contract', function() {
        beforeEach(async function () {
            this.verifier = await SquareVerifier.new({ from: account_one })
            this.contract = await SolnSquareVerifier.new(this.verifier.address, { from: account_one});
        })

        // Test 1 - Adding Unique Solution.
        it('Test adding a unique solution.', async function () {
            let solution = await this.contract.addSolution(solutionProof.proof.a, solutionProof.proof.b, solutionProof.proof.c, solutionProof.inputs)
            assert.equal(solution.logs[0].event, 'SolutionAdded', "Unique solution was not added.")
        })

        // Test 2 - Minting ERC721 token.
        it('Test minting new token.', async function () {
            // Add solution.
            let solution = await this.contract.addSolution(solutionProof.proof.a, solutionProof.proof.b, solutionProof.proof.c, solutionProof.inputs)
            assert.equal(solution.logs[0].event, 'SolutionAdded', "Unique solution was not added.")
            // Mint token
            let tokenId = 10
            await this.contract.mintVerifiedToken(account_one, tokenId, solutionProof.proof.a, solutionProof.proof.b, solutionProof.proof.c, solutionProof.inputs)
            // Asset token owner is token minter.
            let owner = await this.contract.ownerOf(tokenId)
            assert.equal(owner, account_one, "Error: Unable to mint token")
        })
    })
})
