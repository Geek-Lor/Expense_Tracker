import React from "react";
import "./App.css";

//Import Global State
import GlobalState from "./context/GlobalState";

//Import Components
import {
  Header,
  Balance,
  IncomeExpenses,
  TransactionList,
  AddTransaction,
} from "./components/exportFiles";

function App() {
  return (
    <GlobalState>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalState>
  );
}

export default App;
