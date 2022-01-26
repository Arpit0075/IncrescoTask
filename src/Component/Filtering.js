import React, { useContext, useState } from "react";
import "./filterings.css";
import { Products } from "../Context/ProductsContext";
import Button from "./Button";
import { Filters } from "../Context/FiltersContext";

function Filtering() {
  //for clear items
  const [isClear, setIsclear] = useState(false);
  // eslint-disable-next-line
  const [state, setState] = useContext(Products);
  // eslint-disable-next-line
  const [arr, setArr] = useContext(Filters);

  let productsArr = state && state.products.map((p) => p);

  let filterArr =
    state &&
    state.filters.primaryFilters.map((e) => {
      return e;
    });
  //console.log(filterArr);

  let genders = filterArr && filterArr[3].filterValues.map((e) => e.id);
  //console.log(gender);
  let brands = filterArr && filterArr[2].filterValues.map((e) => e.id);
  let categories = filterArr && filterArr[6].filterValues.map((e) => e.id);

  function applyFilterGen(value) {
    let res = [];
    //console.log(value.toLowerCase());
    //console.log(productsArr);
    res = productsArr.filter((p) => {
      return p.gender.toLowerCase() === value.toLowerCase();
    });
    //console.log(res);
    setArr(res);
  }
  function applyFilterCat(value) {
    let res = [];
    //console.log(value.toLowerCase());
    //console.log(productsArr);
    res = productsArr.filter((p) => {
      return p.category.toLowerCase() === value.toLowerCase();
    });
    //console.log(res);
    setArr(res);
  }
  function applyFilterBrand(value) {
    let res = [];
    //console.log(value.toLowerCase());
    //console.log(productsArr);
    res = productsArr.filter((p) => {
      return p.brand.toLowerCase() === value.toLowerCase();
    });
    //console.log(res);
    setArr(res);
  }

  return (
    <div className="filterings">
      <h1>Filters</h1>
      <button
        className="clear-btn"
        onClick={() => {
          setIsclear(!isClear);
          setArr([]);
        }}
      >
        Clear Filters
      </button>
      <div>
        <h3 className="filterings-sub">Gender</h3>
        {genders &&
          genders.map((g, i) => <Button g={g} fn={applyFilterGen} key={i} />)}
      </div>
      <div>
        <h3 className="filterings-sub">Categories</h3>
        {categories &&
          categories.map((g, i) => (
            <Button g={g} fn={applyFilterCat} key={i} />
          ))}
      </div>
      <div>
        <h3 className="filterings-sub">Brand</h3>
        {brands &&
          brands.map((g, i) => <Button g={g} fn={applyFilterBrand} key={i} />)}
      </div>
    </div>
  );
}

export default Filtering;
