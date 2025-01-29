import { useState } from "react";
import "./App.css";
import ShoppingCart from "./shoppingCart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ShoppingCart />
    </>
  );
}

export default App;
