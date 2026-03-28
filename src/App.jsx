import { useState } from 'react'
import './App.css'
import ExpenseForm from './ExpenseForm'
import { useEffect } from 'react'

function App() {

  const [expenses, setExpenses] = useState(() => {
     const savedExpenses = localStorage.getItem("expenses");
     return savedExpenses ? JSON.parse(savedExpenses) : [];
  }
  )

  useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses]);

  const [money, setMoney] = useState()

  const addExpense = (newExpense) => {
    setExpenses(
      prev => [...prev, newExpense]
    )
  }

  return (
    <>
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense}/>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((i) => (
            <tr key={i.id}>
              <td>{i.description}</td>
              <td>{i.amount}</td>
              <td>{i.category}</td>
              <td>{i.date}</td>
              <td>[delete]</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
