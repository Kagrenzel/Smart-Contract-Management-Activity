# Error Handling Program

This Solidity smart contract basically shows how a user can connect his/her metamask wallet to a front end and
shows how his/her account information can be retrieved and shown on the front-end

## Description


This Solidity smart contract simply simulates a scenario where a user will be able to connect his/her metamask
wallet account to a front-end and shows his/her account number as well as the balance of the said account


## Getting Started

### Executing program

To run this program, you can use gitpod, an online Solidity IDE. To get started, go to the Gitpod website https://metacrafterc-scmstarter-m0r8y82q8c8.ws-us105.gitpod.io

Once you are on the Gitpod website, create a new file by clicking on the "≡" icon in the left-hand sidebar and clicking on new file. Save the file with a .sol extension (e.g., ErrorHandling.sol). Copy and paste the following code into the file:

```javascript

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



```
First, go to https://metacrafterc-scmstarter-m0r8y82q8c8.ws-us105.gitpod.io

To get the code and the front-end working, follow these steps:

1. Inside the project directory, in the terminal type: npm i
2. Open two additional terminals in your VS code
3. In the second terminal type: npx hardhat node
4. In the third terminal, type: npx hardhat run --network localhost scripts/deploy.js
5. Back in the first terminal, type npm run dev to launch the front-end.

The code will auto-compile, all you need to do is reload the page. If you're using VS code, you should ctrl + s first so that it auto-compiles before reloading the page.

## Authors

Metacrafter Kyle  
"# Smart-Contract-Management-Activity" 
