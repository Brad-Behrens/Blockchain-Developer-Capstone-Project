pragma solidity >=0.4.21 <0.6.0;

import "./verifier.sol";
import "./ERC721Mintable.sol";

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
contract SquareVerifier is Verifier {

}

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareverifier is RealEstateMarketERC721Token {

    SquareVerifier public squareVerifier;

    constructor(address verifierAddress) public {
        squareVerifier = SquareVerifier(verifierAddress);
    }

    // TODO define a solutions struct that can hold an index & an address
    struct Solution {
        uint256 solutionIndex;
        address solutionAddress;
    }

    // TODO define an array of the above struct
    Solution[] solutions;

    // TODO define a mapping to store unique solutions submitted
    mapping(bytes32 => Solution) private uniqueSolutions;

    // TODO Create an event to emit when a solution is added
    event SolutionAdded(uint256 indexed solutionIndex, address indexed solutionAddress);

    // TODO Create a function to add the solutions to the array and emit the event
    function addSolution(uint256 _solutionIndex, address _solutionAddress, bytes32 solutionKey) public {

        // Add unique solution to solutions array.
        Solution memory newSolution = Solution({
            solutionIndex: _solutionIndex,
            solutionAddress: _solutionAddress
        });

        solutions.push(newSolution);
        uniqueSolutions[solutionKey] = newSolution;

        // Emit event.
        emit SolutionAdded(_solutionIndex, _solutionAddress);
    }

    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly
    function mintVerifiedToken(address to, uint256 tokenId, uint[2] memory a, uint[2][2] memory b, uint[2] memory c, uint[2] memory input) public returns(bool) {
        // Check solution does not exists & verify correctness.
        bytes32 solutionKey = keccak256(abi.encode(a, b, c, input));
        bool verifiedTx = squareVerifier.verifyTx(a, b, c, input);
        require(uniqueSolutions[solutionKey].solutionAddress == address(0), "Solution already exists.");
        require(verifiedTx, "Solution is not correct.");
        // Add solution and mint token.
        addSolution(tokenId, to, solutionKey);
        super.mint(to, tokenId);
    }
}

























