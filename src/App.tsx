import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyles } from './styles/global';
import Modal from 'react-modal';
import { NewTransActionModal } from './components/NewTransActionModal';


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
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModel} />
      <Dashboard />

      <NewTransActionModal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModel}
      />
      <GlobalStyles />
    </>
  );
}


// export default - POSSO IMPORTAR O NOME QUE EU QUISER

// export - NOME PADRÃO