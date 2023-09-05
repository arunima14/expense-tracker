import React, {useState, useContext, useEffect} from "react";
import { GlobalContext } from "../context/GlobalState";
import "../App.css";

function Expense() {
    const {transactions} = useContext(GlobalContext);
    const amount = transactions.map(transaction => transaction.amount);
    const expenseTotal = amount.filter(item => item<0)
    .reduce((acc, item) => (acc += item), 0);

    const [expense, setExpense] = useState(0.00);

    useEffect(() => {
        setExpense(expenseTotal);
    }, [expenseTotal]);

    return (
        <div className="expense-container">
            <h4 className="expense-container-title">expense</h4>
            <p className="expense-container-value">{Math.abs(expense).toFixed(2)}</p>
        </div>
    );
}

export default Expense;