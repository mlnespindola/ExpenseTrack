
import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const initialExpenses = [
  {id:'ex1', title: 'Livro', date: new Date('2020', '3', '10'), price: 30},
  {id:'ex2', title: 'ração do Boris', date: new Date('2021', '5', '16'), price: 50},
  {id:'ex3', title: 'sapatos', date: new Date('2021', '1', '23'), price: 120},
  {id:'ex4', title: 'passagens', date: new Date('2019', '10', '15'), price: 225},
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

