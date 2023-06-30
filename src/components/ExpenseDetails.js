import './ExpenseDetails.css'

function ExpenseDetails(props){
    const amount = props.amount 
    const title = props.title
    return (
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>
                <h2>{amount}</h2>
            </div>
        </div> 
    )
}

export default ExpenseDetails