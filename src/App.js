import { useEffect } from "react";

import Header from "./components/layouts/header/Header";
import Table from "./components/layouts/table/Table";
import dataStore from "./store/dataStore";

import "./App.css";

function App() {
  useEffect(() => {
    dataStore.searchProducts();
  }, []);

  return (
    <div className="App">
      <Header />
      <Table />
    </div>
  );
}

export default App;
