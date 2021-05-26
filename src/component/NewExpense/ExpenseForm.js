import React,{useState} from 'react'

const ExpenseForm = (props) => {

    const [userInput, setUserInput] = useState({
        title:'',
        amount:'',
        date:'',
    });
    const titleChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value,
        // });
        setUserInput((prevState) => {
            return {...prevState,title:event.target.value }
        });
    };
    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {...prevState,amount:event.target.value }
        });
    };
    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {...prevState,date:event.target.value }
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = userInput;
        props.onSaveExpenseData(expenseData)
        setUserInput({
            title:'',
            date:'',
            amount:''
        });
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <h1>Add Expense</h1>
                    <div>
                        <label>Title</label>
                        <input type="text" value={userInput.title} onChange={titleChangeHandler}></input>
                    </div>
                    <br/><br/>
                    <div>
                        <label>Date</label>
                        <input type="date" value={userInput.date} min="2019-01-01" max='2022-12-31' onChange={dateChangeHandler}></input>
                    </div>
                    <br/><br/>
                    <div>
                        <label>Amount</label>
                        <input type="number" value={userInput.amount} min="0.01" step="0.01" onChange={amountChangeHandler}></input>
                    </div>
                    <br/><br/>
                </div>
                <div>
                    <button onClick={props.onCancel} type='button'>cancel</button>
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm
