import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {

  const [year, setYear] = useState('2021');

  const filtrarAno = (item) => {
    if (year == 'All') {
      return true
    } 
    return item.date.getFullYear() == year 
  }

  const expense = props.data.filter(filtrarAno);

  const savingSelectedYear = (selectedYear) => {
    setYear(selectedYear);
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter yearDefault={year} onSelectYear={savingSelectedYear}/>
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
