import { useState } from 'react';
import './NewExpenseForm.css';

const NewExpenseForm = (props) => {

  const cleanForm = {
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  };

  const [userInput, setUserInput] = useState({ ...cleanForm });

  const titleChangeHandler = (event) => {
    setUserInput((prev) => {
      return {
        ...prev,
        enteredTitle: event.target.value
      }
    });
  }

  const amountChangeHandler = (event) => {
    setUserInput((prev) => {
      return {
        ...prev,
        enteredAmount: event.target.value
      }
    });
  }

  const dateChangeHandler = (event) => {
    setUserInput((prev) => {
      return {
        ...prev,
        enteredDate: event.target.value
      }
    });
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate)
    }

    props.onSaveExpenseData(expenseData);

    setUserInput({ ...cleanForm })
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={userInput.enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2020-01-01" max="2022-12-31" onChange={dateChangeHandler} value={userInput.enteredDate} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={() => props.cancelNewExpanse(false)}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default NewExpenseForm;