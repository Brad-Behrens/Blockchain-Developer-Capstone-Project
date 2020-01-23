// Test if a new solution can be added for contract - SolnSquareVerifier
var SolnSquareVerifier = artifacts.require('SolnSquareVerifier')
var SquareVerifier = artifacts.require('verifier')
var solutionProof = require('../../zokrates/code/square/proof.json')

// Test if an ERC721 token can be minted for contract - SolnSquareVerifier

contract('SolnSquareVerifier', accounts => {

    let account_one = accounts[0]
    let account_two = accounts[1]

    describe('Test SolnSquareVerifier contract', function() {
        beforeEach(async function () {
            this.contract = await SolnSquareVerifier.new(this.verifier.address, { from: account_one});
            this.verifier = await SquareVerifier.new({ from: account_one })
        })

        // Test 1 - Adding Solution.
        it('Test adding a new solution.', async function () {
            const newSolution = await instance.addSolution(solutionProof.proof.a, solutionProof.proof.b, solutionProof.proof.c, solutionProof.inputs)


        })
        // Test 2 - Minting token.
        it('Test minting a token with unique solution.', async function () {
            // Previous total supply.
            let initalSupply = await this.contract.totalSupply.call().toNumber()
            // Mint new token w/ unique proof.
            let mintNewToken = await this.contract.mint()
            // New total supply.
            let newSupply = await this.contract.totalSupply.call().toNumber()
            // Inital and new supply comparison.
            assert.equal(initalSupply + 1, newSupply)
        })
    })
})
