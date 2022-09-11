import React, { useContext, useEffect } from 'react';
import './App.scss';
import { SubscriptionsList } from '../SubscriptionsList/SubscriptionsList';
import { connectWallet, getAccount, login, logout } from '../../utils/connect-wallet';
import { Button } from 'antd';
import "antd/dist/antd.css";
import { AccountContext, AccountProvider } from '../../store/AccountProvider';

function App() {
  const { account, setAccount } = useContext(AccountContext);

  useEffect(() => {
    connectWallet().then(r => setAccount(r?.account || null));
  }, [setAccount]);

  return (
    <div className="app">
      <header className="app-header">
        <h3>My subscription</h3>
        <div className="app-header-user">
          <h5>Account:</h5>
          <h5>{account
            ? `${account.substring(0, 8)}...${account.substring(account.length - 4, account.length)}`
            : '--'}
          </h5>
        </div>
      </header>
      <div className="content">
        {account && <SubscriptionsList />}
      </div>
    </div>
  );
}

export default App;
