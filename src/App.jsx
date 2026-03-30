import { useState } from 'react'
import './App.css'
import ExpenseForm from './ExpenseForm'
import { useEffect } from 'react'
import ExpenseTable from './ExpenseTable'
import Total from './Total.jsx'

function App() {

  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  })


  const [money, setMoney] = useState(() => {
  const savedMoney = localStorage.getItem("money");
  return savedMoney ? JSON.parse(savedMoney): 0
  })

  const [amount, setAmount] = useState("")

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);


  const addExpense = (newExpense) => {

    setMoney(prev => prev - parseFloat(newExpense.amount))

    setExpenses(
      prev => [...prev, newExpense]
    )
  }

  const deleteExpense = (id) => {

    setExpenses(
      prev => prev.filter(n => n.id != id)
    )

  }

  const addFunds = () => {
    if (!isNaN(parseFloat(amount))) {
      setMoney(prev => prev + parseFloat(amount))
      setAmount("");
      setAdd(false)
    }
  }

  const substractFunds = () => {
    if (!isNaN(parseFloat(amount))) {
      setMoney(prev => prev - parseFloat(amount))
      setAmount("");
      setSubstract(false)
    }
  }

  const [add, setAdd] = useState(false)

  const [substract, setSubstract] = useState(false)

  const showButton = () => {
    setAdd(!add)
  }

  const showSubstract = () => {
    setSubstract(!substract)
  }

  const reset = () => {
    setMoney(0)
  }

  return (
    <>
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseTable expenses={expenses} deleteExpense={deleteExpense} />
      <Total money={money} addFunds={addFunds} setAmount={setAmount} substractFunds={substractFunds} showButton={showButton} showSubstract={showSubstract} add={add} substract={substract} reset={reset}/>


    </>
  )
}

export default App
