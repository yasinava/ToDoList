import React from "react";
import "./App.css";
import List from "./components/List";
import DataContextProvider from "./components/context/DataContextProvider";
const App = () => {
  return (
    <DataContextProvider>
      <div className="App">
        <List />
      </div>
    </DataContextProvider>
  );
};

export default App;
