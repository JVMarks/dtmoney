import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from '../../services/api';
import { Container, RadioBox, TransactionTypeCoitainer } from './styles';

interface NewTransActionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransActionModal({ isOpen, onRequestClose }: NewTransActionModalProps) {
  const [type, setType] = useState('deposit');

  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');


  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      title, 
      value,
      category,
      type,
    };

    api.post('transactions', data)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cdastrar transação</h2>

        <input
          value={title}
          placeholder='Título'
          onChange={event => setTitle(event.target.value)}
        />
        <input
          value={value}
          type="number"
          placeholder='valor'
          onChange={event => setValue(Number(event.target.value))}
        />

        <TransactionTypeCoitainer>
          <RadioBox
            type="button"
            onClick={() => { setType('deposit'); }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => { setType('withdraw'); }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeCoitainer>

        <input
          placeholder='categoria'
          value={category}
          onChange={event => setCategory(event.target.value)}
        />
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}