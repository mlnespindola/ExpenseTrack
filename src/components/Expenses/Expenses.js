import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {

  const expense = props.data;

  const [year, setYear] = useState('2020');

  const savingSelectedYear = (selectedYear) => {
    setYear(selectedYear);
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter yearDefault={year}onSelectYear={savingSelectedYear}/>
        {expense.map( (expenseData) => (
          <ExpenseItem
          key={expenseData.id}
          title={expenseData.title} 
          date={expenseData.date} 
          price={expenseData.price}/>
        ))}
    </Card>
    </div>
  )
}

export default Expenses;
