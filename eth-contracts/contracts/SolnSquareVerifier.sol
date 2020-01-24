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
        bytes32 solutionIndex;
        address solutionAddress;
    }

    // TODO define a mapping to store unique solutions submitted
    mapping(bytes32 => Solution) private uniqueSolutions;

    // TODO Create an event to emit when a solution is added
    event SolutionAdded(bytes32 indexed solutionHash, address indexed solutionAddress);

    // TODO Create a function to add the solutions to the array and emit the event
    function addSolution(uint[2] memory a, uint[2][2] memory b, uint[2] memory c, uint[2] memory input) public {
        // Solution hash.
        bytes32 solutionHash = keccak256(abi.encode(a, b, c, input));
        // Verify solution is unique.
        require(uniqueSolutions[solutionHash].solutionAddress == address(0), "Solution already exists.");
        // Verify correctness of proof.
        bool verifiedProof = squareVerifier.verifyTx(a, b, c, input);
        require(verifiedProof, "Solution is not correct.");
        // Instantiate solution & add solution to unique solutions.
        Solution memory newSolution = Solution({
            solutionIndex: solutionHash,
            solutionAddress: msg.sender
        });
        // Add solution to unique solutions mapping.
        uniqueSolutions[solutionHash] = newSolution;
        // Emit solution added event.
        emit SolutionAdded(solutionHash, msg.sender);
    }

    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSupply
    function mintVerifiedToken(address to, uint256 tokenId, uint[2] memory a, uint[2][2] memory b, uint[2] memory c, uint[2] memory input) public returns(bool) {
       // Verify solution is correct & unique.
       bytes32 solutionHash = keccak256(abi.encode(a, b, c, input));
       require(uniqueSolutions[solutionHash].solutionAddress == address(0), "Solution does not exist.");
       // Mint token.
       super.mint(to, tokenId);
       return true;
    }
}

























