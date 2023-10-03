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
