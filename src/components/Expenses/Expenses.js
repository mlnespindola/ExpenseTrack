import { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';

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
        <ExpenseList item={expense} />
    </Card>
    </div>
  )
}

export default Expenses;
