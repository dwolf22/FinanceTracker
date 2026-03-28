export default function ExpenseTable({ expenses }) {
    return (
        <div>
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
                            <td>${i.amount}</td>
                            <td>{i.category}</td>
                            <td>{i.date}</td>
                            <td><button>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}