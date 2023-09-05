import React from "react";
import { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

const initialState = {
    transactions: [
        {
            id: 1,
            text: 'flower',
            amount: -30,
        },
        {
            id: 2,
            text: 'salary',
            amount: +1000,
        },
        {
            id: 3,
            text: 'dinner',
            amount: -430,
        },
        {
            id: 4,
            text: 'book',
            amount: -130,
        }
    ]
};

export const GlobalContext = createContext(initialState);


export const GlobalProvider =  ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(transactionId) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: transactionId,
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider value = {{
                transactions: state.transactions,
                deleteTransaction,
                addTransaction
            }}>
            {children}
        </GlobalContext.Provider>
    )
}