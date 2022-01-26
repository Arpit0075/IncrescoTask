import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const Products = createContext();

export const ProductContext = (props) => {
  const [state, setState] = useState(null);

  // eslint-disable-next-line
  useEffect(async () => {
    const items = await axios.get("https://demo7303877.mockable.io");
    let result = items.data;
    setState(result);
    // console.log(items.data);
    // eslint-disable-next-line
  }, []);

  return (
    <Products.Provider value={[state, setState]}>
      {props.children}
    </Products.Provider>
  );
};
