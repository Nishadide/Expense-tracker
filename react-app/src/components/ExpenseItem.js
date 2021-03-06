import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from './Card';
function ExpenseItem(props){
    // const expenseDate = new Date(2021, 2, 28);
    // const expenseTitle = 'Car Insuarance';
    // const expenseAmount = 294.23;  
   

    return (
        <Card className='expense-item'>
        <ExpenseDate date={props.date} />
         <div  className='expense-item__description'>
         <h2>{props.title}</h2>
         </div>
         <div className="expense-item__price">${props.amount}</div>
         </Card>
    ) 
        
 
 
}
export default ExpenseItem;