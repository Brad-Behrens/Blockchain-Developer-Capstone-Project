// migrating the appropriate contracts
var ERC721Mintable = artifacts.require("./RealEstateMarketERC721Token.sol")
var SquareVerifier = artifacts.require("./verifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = function(deployer) {
  deployer.deploy(ERC721Mintable);
  deployer.deploy(SquareVerifier)
    .then(() => deployer.deploy(SolnSquareVerifier, SquareVerifier.address))
};
