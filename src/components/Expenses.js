import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {

  const expense = props.data;

  return <div className='expenses'>
    <ExpenseItem title={expense[0].title} date={expense[0].date} price={expense[0].price} />
    <ExpenseItem title={expense[1].title} date={expense[1].date} price={expense[1].price} />
    <ExpenseItem title={expense[2].title} date={expense[2].date} price={expense[2].price} />
    <ExpenseItem title={expense[3].title} date={expense[3].date} price={expense[3].price} />

  </div>
}

export default Expenses;
