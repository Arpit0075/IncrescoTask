import React, { useContext, useState } from "react";
import "./header.css";
import { Products } from "../Context/ProductsContext";
import { Filters } from "../Context/FiltersContext";
import icon from "../Img/amazon-icon.svg";

function Header() {
  // eslint-disable-next-line
  const [enterName, setEnterName] = useState("");
  // eslint-disable-next-line
  const [state, setState] = useContext(Products);
  // eslint-disable-next-line
  const [arr, setArr] = useContext(Filters);

  let productsArr = state && state.products.map((p) => p);

  const handleChange = (e) => {
    //console.log(productsArr);
    setEnterName(e.target.value);
    let res = [];
    res = productsArr.filter((p) => {
      return p.productName.toLowerCase().includes(e.target.value.toLowerCase());
    });
    //console.log(res);
    setArr(res);
  };

  return (
    <div className="header">
      <div className="header-logo">
        <img src={icon} alt="logo" className="icon" />
      </div>
      <div className="header-search">
        <input
          placeholder="Search for you product here"
          onChange={handleChange}
        ></input>
      </div>
      <div className="header-btns">
        <button className="header-btn">Home</button>
        <button className="header-btn">About</button>
      </div>
    </div>
  );
}

export default Header;
