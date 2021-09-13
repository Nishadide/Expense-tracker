import './ExpenseItem.css'
function ExpenseItem(){
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Car Insuarance';
    const expenseAmount = 294.23;  

    return <div className="expense-item"> 
        <div className="expense-item__description">{expenseDate.toISOString()}</div>
        <div>
        <h2>{expenseTitle}</h2>
        </div>
        <div className="expense-item__price">${expenseAmount}</div>
    </div> 
}
export default ExpenseItem;