import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = props => {

    if (props.item.length === 0) {
        return <h2 className='expenses-list__fallback'>No Expenses Found.</h2>
    }

    return (
        <ul className='expenses-list'>
            {props.item.map((expenseData) => (
                <ExpenseItem
                key={expenseData.id}
                title={expenseData.title}
                date={expenseData.date}
                price={expenseData.price} />
            
            ))} 
        </ul>
    )

};

export default ExpenseList;