import React, { useState } from "react";
import "./App.css";
import ProductCounter from "./ProductCounter";

const App = () => {
  const [orangeCounter, setOrangeCounter] = useState(0);
  const [appleCounter, setAppleCounter] = useState(0);
  return (
    <div className="App">
      <ProductCounter
        productName="Апельсин"
        count={orangeCounter}
        setCount={setOrangeCounter}
      />
      <ProductCounter
        productName="Яблоко"
        count={appleCounter}
        setCount={setAppleCounter}
      />
      <ProductCounter
        productName="Апельсин"
        count={orangeCounter}
        setCount={setOrangeCounter}
      />
    </div>
  );
};

export default App;
