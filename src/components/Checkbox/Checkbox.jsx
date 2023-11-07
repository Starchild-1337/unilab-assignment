import React, { useState } from "react";
import "./Checkbox.css";

const Checkbox = ({ item, handleCheckbox, type, setPage }) => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <>
      <input
        type="checkbox"
        id={item}
        onChange={handleCheckbox}
        value={type}
        onClick={() => {
          setIsChecked(!isChecked);
          setPage(1);
        }}
        checked={isChecked}
      />
      <label htmlFor={item}>{item}</label>
    </>
  );
};

export default Checkbox;
