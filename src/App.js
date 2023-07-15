import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./redux/action";

function App() {
  const dispatch = useDispatch();

  const product = useSelector((state) => state.allProducts);

  console.log(product);

  function getProduct() {
    console.log("clicked");
    let value = { id: 2, product: "product" };

    dispatch(setProducts(value));

    // setProducts(value)
  }

  return (
    <div>
      App
      <button onClick={() => getProduct()}>DONE</button>
    </div>
  );
}

export default App;
