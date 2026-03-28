import { useState } from "react"


export default function ExpenseForm({addExpense}) {

    const getToday = () => {
        new Date().toISOString().slice(0,10);
    }

    const [expense, setExpense] = useState({
        id:Date.now(),
        description:"",
        amount:"",
        category:"",
        date: ""
    })

    const handleChange = (e) => {
        setExpense({
            ...expense,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addExpense(expense)

        setExpense({
            id:Date.now(),
            description:"",
            amount:"",
            category:"",
            date:""
        })

    }


    return (
        <div>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name="description" placeholder="Description" value={expense.description} onChange={handleChange} required/>
                <input type="number" name="amount" placeholder="amount" step="0.01" min="0" value={expense.amount} onChange={handleChange} required/>
                <select name="category" value={expense.category} onChange={handleChange} required>
                    <option value="" disabled>Select Category</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Bills">Bills</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Health">Health</option>
                    <option value="Other">Other</option>
                </select>
                <input type="date" name="date" id="" value={expense.date} onChange={handleChange} required/>
                <button type="submit">Add Expense</button>
                    
            </form>
        </div>
    )
}