

import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    /*---Using One useState() for multiple events---*/
    /*const [userInput, setUserInput] = useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:'',
    });

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
           return {...userInput,
            enteredTitle: event.target.value}
        });
    }

    const amountChangeHandler = (event) => {
        setUserInput((prevState) =>{
           return { ...userInput,
            enteredAmount: event.target.value}
        });
    }

    const dateChangeHandler = (event) => {
        setUserInput( (prevState) => {
            return {...userInput,
            enteredTDate: event.target.value}
        });
    }*/

    /*---One state for each event---*/

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input onChange={titleChangeHandler} type='text' />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input onChange={amountChangeHandler} type='number' min='0.01' step='0.01' />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input onChange={dateChangeHandler} type='date' min='2019-01-01' max='2022-12-31' />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;