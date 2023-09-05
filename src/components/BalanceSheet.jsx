import React, { useContext, useEffect } from "react";
import { useState } from "react";
import '../App.css';
import { GlobalContext } from "../context/GlobalState";
import Income from "./Income";
import Expense from "./Expense";

function BalanceSheet() {
    const {transactions} = useContext(GlobalContext);

    const amount = transactions.map(transaction => transaction.amount);
    const total = amount.reduce((acc, item) => (acc += item), 0);

    const [currBalance, setCurrBalance] = useState(0.00);

    useEffect(() => {
        setCurrBalance(total);
    }, [total]);

    return (
        <div className="BalanceSheet">
            <h4>Current Balance</h4>
            <h2 className="currBalance">Rs. {currBalance}</h2>

            <div className="balanceTableSheet">
                <Income />
                <Expense />
            </div>
        </div>
    );
}

export default BalanceSheet;