import React, { useContext } from "react";
import '../App.css';
import Transaction from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

function TransactionHistory() {
    const {transactions} = useContext(GlobalContext);

    return (
        <div className="TransactionHistory">
            <h3>Transaction History</h3>
                <hr />
            <ul className="transaction-list">
            {transactions.map(transaction => (
                <Transaction  transaction={transaction} key={transaction.id}
                />
            ))}
            </ul>
        </div>
    );
}

export default TransactionHistory;