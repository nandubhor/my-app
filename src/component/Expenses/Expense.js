
import ExpensesList from './ExpensesList';

const Expense = (props) => {
    //const [filterYear, setFilterYear] = useState('2020');
    // const filterChangeHandler = (selectedYear) => {
    //     setFilterYear(selectedYear);
    // }

    // const filterExpenses = props.expenses.filter( expense => {
    //     return expense.date === filterYear;
    // })

    
   
    return (
        <div>
            {/* <div>
                <ExpenseFilter selected={filterYear} onfilterChange={filterChangeHandler} />
            </div> */}
            <ExpensesList items={props.expenses} />
            {/* {filterExpenses.length === 0 && <p>No expense Found.</p>}

            {filterExpenses.length > 0 &&
            filterExpenses.map((expense,index) => (
                <ExpenseItem key={index}
                             title={expense.title} 
                             amount={expense.amount} 
                             date={expense.date} /> 
            ))}  */}

        </div>
    )
}

export default Expense
