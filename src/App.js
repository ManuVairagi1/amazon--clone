import "./App.css";
import React from "react";
import Header from "./Header";
import Home from "./Home";
// import Product from "./Product";

function App() {
  return (
    <div className="app">
      <Header />
      {/* <Product /> */}
      <Home />
    </div>
  );
}

export default App;
