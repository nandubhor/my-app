import React,{useState} from 'react'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDatahandler = (enteredExpensedata) => {
        const expenseData = { 
            ...enteredExpensedata
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }
    
    return (
        <div>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDatahandler} onCancel={stopEditingHandler} />}
        </div>
    )
}

export default NewExpense
