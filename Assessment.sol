// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AccountInfo {


    address public owner;

    constructor() {
        
        owner = msg.sender;

    }


    function getBalance(address account) public view returns (uint256) {
        return account.balance;
    }



    function getUserAccount(address account) public view returns (uint256) {
        return block.number - block.number;
    }



}
