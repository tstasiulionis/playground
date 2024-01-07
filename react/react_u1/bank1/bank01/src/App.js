import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [accounts, setAccounts] = useState([]);
  const [newAccountName, setNewAccountName] = useState('');
  const [newAccountLastName, setNewAccountLastName] = useState('');
  const [transactionAmount, setTransactionAmount] = useState('');
  const [transactionType, setTransactionType] = useState('deposit');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Load accounts from local storage on component mount
    const savedAccounts = JSON.parse(localStorage.getItem('accounts')) || [];
    setAccounts(savedAccounts);
  }, []);

  const handleAddAccount = () => {
    const newAccount = {
      id: uuidv4(),
      name: newAccountName,
      lastName: newAccountLastName,
      balance: 0,
    };

    setAccounts([...accounts, newAccount]);
    setNewAccountName('');
    setNewAccountLastName('');

    // Save accounts to local storage
    localStorage.setItem('accounts', JSON.stringify([...accounts, newAccount]));
  };

  const handleDeleteAccount = (accountId) => {
    const updatedAccounts = accounts.filter((account) => account.id !== accountId);
    setAccounts(updatedAccounts);

    // Save updated accounts to local storage
    localStorage.setItem('accounts', JSON.stringify(updatedAccounts));
  };

  const handleTransaction = (accountId) => {
    const amount = parseFloat(transactionAmount);

    if (isNaN(amount) || amount <= 0) {
      setMessage('Invalid transaction amount');
      return;
    }

    const updatedAccounts = accounts.map((account) => {
      if (account.id === accountId) {
        const newBalance =
          transactionType === 'deposit'
            ? account.balance + amount
            : account.balance - amount;

        return {
          ...account,
          balance: newBalance,
        };
      }

      return account;
    });

    setAccounts(updatedAccounts);
    setTransactionAmount('');
    setMessage(`Transaction ${transactionType === 'deposit' ? 'deposited' : 'withdrawn'} successfully`);

    // Save updated accounts to local storage
    localStorage.setItem('accounts', JSON.stringify(updatedAccounts));
  };

  const handleSortByLastName = () => {
    const sortedAccounts = [...accounts].sort((a, b) => a.lastName.localeCompare(b.lastName));
    setAccounts(sortedAccounts);
  };

  return (
    <div>
      <h1>Money Accounts App</h1>

      <div>
        <h2>Add New Account</h2>
        <label>
          First Name:
          <input
            type="text"
            value={newAccountName}
            onChange={(e) => setNewAccountName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={newAccountLastName}
            onChange={(e) => setNewAccountLastName(e.target.value)}
          />
        </label>
        <button onClick={handleAddAccount}>Add Account</button>
      </div>

      <div>
        <h2>Transaction</h2>
        <label>
          Transaction Type:
          <select onChange={(e) => setTransactionType(e.target.value)}>
            <option value="deposit">Deposit</option>
            <option value="withdraw">Withdraw</option>
          </select>
        </label>
        <label>
          Amount:
          <input
            type="text"
            value={transactionAmount}
            onChange={(e) => setTransactionAmount(e.target.value)}
          />
        </label>
        <button onClick={() => handleTransaction(accounts[0]?.id)}>Submit Transaction</button>
      </div>

      <div>
        <h2>Accounts</h2>
        <button onClick={handleSortByLastName}>Sort by Last Name</button>
        <ul>
          {accounts.map((account) => (
            <li key={account.id}>
              {account.name} {account.lastName} - Balance: ${account.balance}
              <button onClick={() => handleDeleteAccount(account.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {message && <p>{message}</p>}
    </div>
  );
};

export default App;
