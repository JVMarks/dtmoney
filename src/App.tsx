import React, { useState } from 'react';

import Modal from 'react-modal';
import { TransactionsProvider } from './hooks/useTransactions';

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewTransActionModal } from './components/NewTransActionModal';

import { GlobalStyles } from './styles/global';


Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModel() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModel() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>

      <Header onOpenNewTransactionModal={handleOpenNewTransactionModel} />
      <Dashboard />

      <NewTransActionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModel}
      />
      <GlobalStyles />

    </TransactionsProvider>
  );
}


// export default - POSSO IMPORTAR O NOME QUE EU QUISER

// export - NOME PADRÃO


//yarn create react-app dtmoney --template typescript
//yarn add miragejs
//yarn add axios      
//yarn add react-modal
//yarn add @types/react-modal -D
//yarn add polished

//choco upgrade chocolatey
//choco upgrade nodejs -y
//npm install -g npm@latest
//npm install --global yarn