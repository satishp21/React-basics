import './Expenseitem.css'

function ExpenseItem(){
    const expenseDate = new Date(2023,29,6);
    const expenseTitle = 'Food';
    const expenseAmount = 100;
    const expenseLocation = 'restorent';

    //always remember that return only return one main eliment that why in given below html is wrapped inside div
    // () thia also shows that single html eliment to be returned
    return (
        <div className='expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <h2>{expenseLocation}</h2>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>
                <h2>{expenseAmount}</h2>
                </div>
            </div>
        </div>)
}

export default ExpenseItem