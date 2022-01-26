import React, { createContext, useState } from "react";

export const Filters = createContext();

export const FiltersContext = (props) => {
  const [arr, setArr] = useState([]);

  return (
    <Filters.Provider value={[arr, setArr]}>{props.children}</Filters.Provider>
  );
};
