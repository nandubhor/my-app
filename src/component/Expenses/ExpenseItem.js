import React from 'react'

const ExpenseItem = (props) => {
   
   
    return (
        <div>
            <table>
            <tr>
                <th>Date</th>
                <th>Title</th> 
                <th>Amount</th>
            </tr>
            <tr>
                <td>{props.date}</td>
                <td>{props.title}</td>
                <td>${props.amount}</td>
            </tr>
            </table>
        </div>
    )
}

export default ExpenseItem
