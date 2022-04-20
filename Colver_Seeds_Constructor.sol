pragma solidity 0.8.12;

// SPDX-License-Identifier: MIT

import "./Ownable.sol";
import "./ITContract.sol";

contract Clover_Seeds_Constructor is Ownable {
    address private originNFTContract;
    address private newNFTContract;

    bool flag = true;

    constructor() {}

    function setContractAcc(address _originNFTContract, address _newNFTContract) public onlyOwner {
        originNFTContract = _originNFTContract;
        newNFTContract = _newNFTContract;
    }

    function constructNewContract(uint256 totalCnt) public onlyOwner {
        require(flag, "Already construct contract!");
        flag = false;
        for (uint256 i = 0; i < totalCnt; i++) {
            uint256 tokenId = ITContract(originNFTContract).tokenByIndex(i);
            address tokenOwner = ITContract(originNFTContract).ownerOf(tokenId);
            string memory uri = ITContract(originNFTContract).tokenURI(tokenId);
            ITContract(newNFTContract).freeMint(tokenOwner, tokenId, uri);
        }
        
    }
}