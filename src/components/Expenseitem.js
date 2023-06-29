import './Expenseitem.css'

function ExpenseItem(props){

    //always remember that return only return one main eliment that why in given below html is wrapped inside div
    // () thia also shows that single html eliment to be returned
    return (
        <div className='expense-item'>
            <div>{props.date.toISOString()}</div>
            <h2>{props.date.location}</h2>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>
                <h2>{props.amount}</h2>
                </div>
            </div>
        </div>)
}

export default ExpenseItem