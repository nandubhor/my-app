import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {
    if( props.items.length === 0 ) {
        return <h2>No expense Found.</h2>;
    }

    return (
        <div>
            {   props.items.map((expense,index) => (
                        <ExpenseItem key={index}
                         title={expense.title} 
                         amount={expense.amount} 
                         date={expense.date} /> 
                ))
            }

        </div>
    )
}

export default ExpensesList
