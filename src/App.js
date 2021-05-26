import React,{useState} from 'react';
import './App.css';
import Expense from "./component/Expenses/Expense";
import NewExpense from "./component/NewExpense/NewExpense";

const Dummy_Data = [
  {title:'Car',amount:'100', date: "2021"},
  {title:'House',amount:'200', date: "2020"},
  {title:'Bike',amount:'300', date: "2019"},
  {title:'Land',amount:'400', date: "2020"}
]

const App = () => {

  const [expenses, setExpenses] = useState(Dummy_Data);

  const addExpensehandler = (expense) => {
    setExpenses((prevState) => {
      return [ ...prevState, expense]
    })
  };
  
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpensehandler} />
      <br/><br/>
      <Expense expenses={expenses}/>
    </div>
  );
}

export default App;
