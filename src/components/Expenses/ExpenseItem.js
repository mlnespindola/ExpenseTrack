import react from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    return (
        <div>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'> R$ {props.price}</div>
                </div>
            </Card>
        </div>
    )

}

export default ExpenseItem;

