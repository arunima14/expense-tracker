import React, {useContext, useState} from "react";
import '../App.css';
import { GlobalContext } from "../context/GlobalState";

function Transaction({transaction}) {
    const {deleteTransaction} = useContext(GlobalContext);
    const amountSign = transaction.amount < 0 ? 
'-' : '+';

    return (
        <li className={transaction.amount < 0 ? 'expense-list-item transaction-list-item' : 'income-list-item transaction-list-item'} >
            {transaction.text} <span>{amountSign}Rs.{Math.abs(transaction.amount)} </span> <button onClick={() => deleteTransaction(transaction.id)} className="delete-transaction">🗑️</button>
        </li>
    );
}


export default Transaction;