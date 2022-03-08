import incomeImg from '../../assets/income.svg';
import totalImg from '../../assets/total.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container } from './styles';
import { useTransactions } from '../../hooks/useTransactions';


export function Summary() {

  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {

    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  })

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{summary.deposits}</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Entradas" />
        </header>
        <strong> - {summary.withdraws}</strong>
      </div>


      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Entradas" />
        </header>
        <strong>{summary.total}</strong>
      </div>
    </Container>
  )
} 