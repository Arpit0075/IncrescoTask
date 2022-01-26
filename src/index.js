import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductContext } from "./Context/ProductsContext";
import { FiltersContext } from "./Context/FiltersContext";

ReactDOM.render(
  <ProductContext>
    <FiltersContext>
      <App />
    </FiltersContext>
  </ProductContext>,
  document.getElementById("root")
);
