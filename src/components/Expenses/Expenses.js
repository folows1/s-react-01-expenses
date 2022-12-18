import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

export default function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('');

  const filteredExpenses = props.expenses.filter(expense => {
    if (filteredYear !== '0' && filteredYear !== '') {
      return expense.date.getFullYear().toString() === filteredYear;
    } else {
      return true;
    }
  });

  const yearChangeHandler = (event) => {
    setFilteredYear(event.target.value);
  }

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter yearChangeHandler={yearChangeHandler} selectedYear={filteredYear} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </>
  )
}