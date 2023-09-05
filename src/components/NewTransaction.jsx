import React, { useContext } from "react";
import { useState } from "react";
import '../App.css';
import { GlobalContext } from "../context/GlobalState";

function AddNewTransaction() {
    const {addTransaction} = useContext(GlobalContext);

    const [transactionDetail, setTransactionDetail] = useState("");
    const [amount, setAmount] = useState(0.00);

    const updateTransactionDetail = (val) => {
        setTransactionDetail(val);
    };

    const updateTransactionAmount = (val) => {
        setAmount(val);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text: transactionDetail,
            amount,
        }


        addTransaction(newTransaction );
    };
    
    return (
        <div className="new-transaction">
            <h3>Add new transaction</h3> <hr />
            <form onSubmit={handleFormSubmit} className="add-transaction-detail">
                <div>
                    <label>Text</label>
                    <input type="text" value={transactionDetail} onChange={(e) => updateTransactionDetail(e.target.value)} placeholder="Enter tranasaction detail" />
                </div>
                <div>
                    <label>Amount
                        <small>(negative - expense, positive - income)</small>
                    </label>
                    <input type="number" value={amount} onChange={(e) => updateTransactionAmount(e.target.value)} />
                </div>
                <button type="submit" className="add-transaction-button"> Add Transaction</button>
            </form>
        </div>
    );
}

export default AddNewTransaction;