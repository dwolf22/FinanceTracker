
export default function Total({ money, addFunds, setAmount, substractFunds, showButton, showSubstract, add, substract, reset }) {



    return (
        <div>
            <h3>Total Left in Account: ${money}</h3>
            <div className="row mx-5">
                {!substract && <button className="btn btn-success" onClick={showButton}>Add Funds</button>}
                {add && <input type="number" className="form-control" name="add" placeholder="Amount"required step="0.01" onChange={(e) => setAmount(e.target.value)} />}
                {add && <button className="btn btn-primary" onClick={addFunds}>Add</button>}
            </div>
            <div className="row mx-5">
                {!add && <button className="btn btn-danger" onClick={showSubstract}>Substract Funds</button>}
                {substract && <input type="number" className="form-control" name="substract" placeholder="Amount"required step="0.01" onChange={(e) => setAmount(e.target.value)} />}
                {substract && <button className="btn btn-primary" onClick={substractFunds}>Substract</button>}
            </div>
            <div className="row mx-5">
                {!substract && !add && <button className="btn btn-secondary" onClick={reset}>Reset Balance</button>}
            </div>
            
        </div>
    )
}