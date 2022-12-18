import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css';
import { useState } from 'react';

const NewExpense = (props) => {

  const [activeForm, setActiveForm] = useState(false);

  const onSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
    setActiveForm(false);
  }

  return (
    <div className="new-expense">
      {!activeForm ? <button type="button" onClick={() => setActiveForm(true)}>Add New Expanse</button> :
        <NewExpenseForm onSaveExpenseData={onSaveExpenseData} cancelNewExpanse={setActiveForm} />
      }
    </div>
  )
}

export default NewExpense;