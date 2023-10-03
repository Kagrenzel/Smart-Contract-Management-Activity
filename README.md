# Metamask Account Details Retriever

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

run this code on a separate file named index.js

```javascript

import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

function maskAccountAddress(account) {
    const visibleLength = 4; // Number of visible characters at the end
    if (account.length <= visibleLength) {
        return account; // Return the full address if it's too short
    }
    const maskedPart = '*'.repeat(account.length - visibleLength);
    const visiblePart = account.slice(-visibleLength);
    return `${maskedPart}${visiblePart}`;
}

function App() {
    const [account, setAccount] = useState('');
    const [balance, setBalance] = useState(0);

    const connectMetaMask = async () => {
        try {
            if (window.ethereum) {
                window.web3 = new Web3(window.ethereum);
                await window.ethereum.enable();
                loadBlockchainData();
            } else {
                console.log('MetaMask not detected. Please install MetaMask.');
            }
        } catch (error) {
            console.error('Error connecting MetaMask:', error);
        }
    };

    const loadBlockchainData = async () => {
        const web3 = window.web3;
        if (web3) {
            const accounts = await web3.eth.getAccounts();
            const maskedAccount = maskAccountAddress(accounts[0]);
            setAccount(maskedAccount);

            const balance = await web3.eth.getBalance(accounts[0]);
            setBalance(balance);
        }
    };

    return (
        <div className="App">
            <h1>MetaMask Account Details</h1>
            {!account ? (
                <button onClick={connectMetaMask}>Connect MetaMask</button>
            ) : (
                <>
                    <p>
                        Connected Account: {account}
                    </p>
                    <p>
                        Balance: {Web3.utils.fromWei(balance, 'ether')} ETH
                    </p>
                </>
            )}
        </div>
    );
}

export default App;



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
