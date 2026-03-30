
export default function Total ({money, addFunds, setAmount, substractFunds, showButton, showSubstract, add, substract, reset}) {

    

    return (
        <div>
            <h3>Total Left in Account: ${money}</h3>
            <button onClick={showButton}>Add Funds</button>
            {add && <input type="number" name="add" required step="0.01" onChange={(e)=>setAmount(e.target.value)}/>}
            {add && <button onClick={addFunds}>Add</button>}
            <button onClick={showSubstract}>Substract Funds</button>
            {substract && <input type="number" name="substract" required step="0.01" onChange={(e)=>setAmount(e.target.value)}/>}
            {substract && <button onClick={substractFunds}>Substract</button>}
            <button onClick={reset}>Reset Balance</button>
        </div>
    )
}