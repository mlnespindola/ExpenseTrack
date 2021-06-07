

import React, {useState} from 'react';
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

    const [addExpenseBtn, setExpenseBtn] = useState(false);

    const addNewExpenseHandler = () => {
        setExpenseBtn(true);
    }

    return (
        <div className='new-expense'>      
            { addExpenseBtn ? 
            <ExpenseForm cancelBtnAction={setExpenseBtn} onSaveData={saveExpenseHandler}/> :
             <button onClick={addNewExpenseHandler}>Add new Expense</button> }
        </div>
    );
}

export default NewExpense;