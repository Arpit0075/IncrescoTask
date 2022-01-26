import React, { useContext } from "react";
import { Products } from "../Context/ProductsContext";
import "./section.css";
import { Filters } from "../Context/FiltersContext";

function Section() {
  // eslint-disable-next-line
  const [state, setState] = useContext(Products);
  const [arr, setArr] = useContext(Filters);

  //console.log(state);
  let productsArr = state && state.products.map((p) => p);
  const sortSection = (e) => {
    //console.log(e.target);
    let res = [];
    if (e.target.innerText === "Year") {
      res = productsArr.sort((a, b) => {
        return b.year - a.year;
      });
      setArr(res);
    } else if (e.target.innerText === "Rating") {
      res = productsArr.sort((a, b) => {
        return b.rating - a.rating;
      });
      setArr(res);
    } else if (e.target.innerText === "Price") {
      res = productsArr.sort((a, b) => {
        return b.price - a.price;
      });
      setArr(res);
    }
  };

  return (
    <div className="section">
      <div className="sort-btn-div">
        <button className="sort-btn" onClick={sortSection}>
          Year
        </button>
        <button className="sort-btn" onClick={sortSection}>
          Rating
        </button>
        <button className="sort-btn" onClick={sortSection}>
          Price
        </button>
      </div>
      {arr.length > 1
        ? arr.map((a) => {
            return (
              <div className="product" key={a.productId}>
                <img src={a.searchImage} alt="productImg" />
                <p> Name:{a.productName}</p>
                <p> Brand:{a.brand}</p>
                <p> Year:{a.year}</p>
                <p> Price{a.price}</p>
                <p> Rating:{a.rating}</p>
                <p> Gender:{a.gender}</p>
                <p> Category:{a.category}</p>
              </div>
            );
          })
        : state &&
          state.products.map((p) => {
            return (
              <div className="product" key={p.productId}>
                <img src={p.searchImage} alt="productImg" />
                <p> Name:{p.productName}</p>
                <p> Brand:{p.brand}</p>
                <p> Year:{p.year}</p>
                <p> Price{p.price}</p>
                <p> Rating:{p.rating}</p>
                <p> Gender:{p.gender}</p>
                <p> Category:{p.category}</p>
              </div>
            );
          })}
    </div>
  );
}

export default Section;
