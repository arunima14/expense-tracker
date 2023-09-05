import React from "react";
import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import "../App.css";

function Income() {
    const {transactions} = useContext(GlobalContext);
    const amount = transactions.map(transaction => transaction.amount);
    const incomeTotal = amount.filter(item => item>0)
    .reduce((acc, item) => (acc += item), 0);

    const [income, setIncome] = useState(0.00);

    useEffect(() => {
        setIncome(incomeTotal);
    }, [incomeTotal]);

    return (
        <div className="income-container">
            <h4 className="income-container-title">Income</h4>
            <p className="income-container-value">{Math.abs(income).toFixed(2)}</p>
        </div>
    );
}

export default Income;