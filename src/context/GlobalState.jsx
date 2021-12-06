import React, { createContext, useReducer} from 'react'
import AppReducer from "./AppReducer.jsx";

//initial state
const initialState = {
    transactions: [
        {id= 0, text:"Flower", amount: -10},
        {id= 2, text:"Salary", amount: 400},
        {id= 3, text:"Book", amount: -20},
        {id= 4, text:"Camera", amount: -200},
    ]
}

// createContext

export const GlobalContext = createContext(initialState);

//provider component

export const GlobalProvider = ({ children })=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value={{
        transactions:state.transactions
    }}>
        {children}
    </GlobalContext.Provider>);
}