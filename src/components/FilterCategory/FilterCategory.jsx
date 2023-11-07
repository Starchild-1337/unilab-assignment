import React, { useState } from "react";
import { ReactComponent as ChevronRight } from "../../assets/chevron-right.svg";
import Checkbox from "../Checkbox/Checkbox";
import "./FilterCategory.css";

const FilterCategory = ({ name, filterData, handleCheckbox, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)}>
        <ChevronRight
          className={isOpen ? "chevron-dropdown show" : "chevron-dropdown"}
        />
        <span>{name}</span>
      </div>
      <div className={isOpen ? "filter-categories show" : "filter-categories"}>
        {filterData.filters.map((item) => {
          return (
            <div className="form-control" key={item}>
              <Checkbox
                item={item}
                handleCheckbox={handleCheckbox}
                type={filterData.type}
                setPage={setPage}
              />
            </div>
          );
        })}
        {/* <div className="form-control">
          <input type="checkbox" id="male" />
          <label htmlFor="male">Inactive</label>
        </div> */}
      </div>
    </>
  );
};

export default FilterCategory;
