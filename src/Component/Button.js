import React, { useState } from "react";
import "./filterings.css";

function Button({ g, fn, isClear, setIsclear }) {
  const [isSelected, setIsSelected] = useState(false);
  function handleClick() {
    setIsSelected(!isSelected);
  }
  function checkFilterBtn() {
    setIsclear(!isClear);
  }

  return (
    <button
      className={isSelected ? "dark-btn" : "filterings-btn"}
      // className={isClear ? "filterings-btn" : null}
      onClick={() => {
        handleClick();
        fn(g);
        checkFilterBtn();
      }}
    >
      {g}
    </button>
  );
}

export default Button;
