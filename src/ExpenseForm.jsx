import { use, useState } from "react"


export default function ExpenseForm({addExpense}) {

    const [form, setForm] = useState(false)

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

        setForm(!form)
    }

    const showForm = () => {
        setForm(!form)
    }


    return (
        <div >
            {!form && <button className="btn btn-success my-4" onClick={showForm}>Add Expense</button>}
            {form &&
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <div className="px-5 my-4">
                    <input type="text" name="description" placeholder="Description" value={expense.description} onChange={handleChange} className="form-control" required/>
                </div>
                <div className="px-5 my-4">
                    <input type="number" name="amount" placeholder="amount" step="0.01" min="0" value={expense.amount} onChange={handleChange} className="form-control" required/>
                </div>
                <div className="px-5 my-4">
                    <select name="category" value={expense.category} onChange={handleChange} className="form-select" required>
                    <option value="" disabled>Select Category</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Bills">Bills</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Health">Health</option>
                    <option value="Other">Other</option>
                </select>
                </div>
                <div className="px-5 my-4">
                     <input type="date" name="date" value={expense.date} onChange={handleChange} className="form-control" required/>
                </div>
                <div className="mt-4 mb-5">
                    <button type="submit" className="btn btn-primary">Add Expense</button>
                </div>
                    
            </form>
            }           
        </div>
    )
}