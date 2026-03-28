import { useState } from 'react'
import './App.css'
import ExpenseForm from './ExpenseForm'
import { useEffect } from 'react'
import ExpenseTable from './ExpenseTable'

function App() {

  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  })


  const [money, setMoney] = useState()

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);


  const addExpense = (newExpense) => {
    setExpenses(
      prev => [...prev, newExpense]
    )
  }

  return (
    <>
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseTable expenses={expenses} />

    </>
  )
}

export default App
