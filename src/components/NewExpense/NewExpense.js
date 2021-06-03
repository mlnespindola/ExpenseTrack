

import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };

        props.onNewExpense(expenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveData={saveExpenseHandler}/>
        </div>
    );
}

export default NewExpense;