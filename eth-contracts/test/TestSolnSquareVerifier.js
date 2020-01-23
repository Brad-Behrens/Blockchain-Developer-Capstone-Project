// Test if a new solution can be added for contract - SolnSquareVerifier
var SolnSquareVerifier = artifacts.require('SolnSquareVerifier')
var SquareVerifier = artifacts.require('verifier')
var correctProof = require('../../zokrates/code/square/proof.json')

// Test if an ERC721 token can be minted for contract - SolnSquareVerifier

contract('SolnSquareVerifier', accounts => {

    let account_one = accounts[0]
    let account_two = accounts[1]

    describe('Test SolnSquareVerifier contract', function() {
        beforeEach(async function () {
            this.contract = await SolnSquareVerifier.new(this.verifier.address, { from: account_one});
            this.verifier = await SquareVerifier.new({ from: account_one })
        }

        // Test 1 - 
        
    })
})
