
import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const initialExpenses = [
  {id:'ex1', title: 'ração do boris', date: new Date(), price: 30},
  {id:'ex2', title: 'batatinha pringles', date: new Date(), price: 10},
  {id:'ex3', title: 'alguel', date: new Date(), price: 1200},
  {id:'ex4', title: 'macoia', date: new Date(), price: 125},
];

const App = () => {
  const [expense, setExpense] = useState(initialExpenses);

  const addNewExpense = (enteredNewExpense) => {
    setExpense((prevState) => {return [...prevState, enteredNewExpense]});
    console.log(enteredNewExpense);
  }
  
  return (
    <div>
      <NewExpense onNewExpense={addNewExpense}/>
      <Expenses data={expense} />
    </div>
  );
}

export default App;

