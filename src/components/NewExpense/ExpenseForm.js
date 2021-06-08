

import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
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

    //initial state and target state 
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //function for setting a new value
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    //CANCEL BTN ACTION 
    const cancelExpenses = () => {
        props.cancelBtnAction(false);
    }

    //listening to the submited form
    const submitHandler = (event) => {
        event.preventDefault();

        //object holding the input values - gathering data
        const expenseData = {
            title: enteredTitle,
            price: +enteredAmount,
            date: new Date(enteredDate),
        };

        props.onSaveData(expenseData);
        props.cancelBtnAction(false);

    };

    

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input onChange={titleChangeHandler} value={enteredTitle} type='text' />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input onChange={amountChangeHandler} value={enteredAmount} type='number' min='0.01' step='0.01' />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input onChange={dateChangeHandler} value={enteredDate} type='date' min='2019-01-01' max='2022-12-31' />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add expense</button>
                <button onClick={cancelExpenses}>Cancel</button>
            </div>
        </form>
    );
}

export default ExpenseForm;