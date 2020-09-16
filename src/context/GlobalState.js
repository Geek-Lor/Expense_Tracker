import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

export const GlobalContext = createContext();

const GlobalState = ({ children }) => {
  const initialState = {
    transactions: [],
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions

  //Add Transactions
  const addTransactions = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  //Delete Transactions
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransactions,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
