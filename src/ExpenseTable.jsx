export default function ExpenseTable({ expenses, deleteExpense}) {
    return (
        <div>
            <table className="table table-secondary table-striped">
                <thead>
                    <tr className="">
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((i) => (
                        <tr className="" key={i.id}>
                            <td>{i.description}</td>
                            <td>${i.amount}</td>
                            <td>{i.category}</td>
                            <td>{i.date}</td>
                            <td><button className="btn btn-danger" onClick={() => deleteExpense(i.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}