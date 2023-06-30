import ExpenseDate from './ExpenseDate'
import './Expenseitem.css'
import ExpenseDetails from './ExpenseDetails'
import './ExpenseDetails.css'

function ExpenseItem(props){
    //always remember that return only return one main eliment that why in given below html is wrapped inside div
    // () thia also shows that single html eliment to be returned
    // return (
    //     <div className='expense-item'>
    //         <ExpenseDate date = {props.date} />
    //         <h2>{props.date.location}</h2>
    //         <div className='expense-item__description'>
    //             <h2>{props.title}</h2>
    //             <div className='expense-item__price'>
    //             <h2>{props.amount}</h2>
    //             </div>
    //         </div>
    //     </div>)
    return (
        <div className='expense-item'>
            <ExpenseDate date ={props.date} />
            <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />
        </div>
        )
}

export default ExpenseItem