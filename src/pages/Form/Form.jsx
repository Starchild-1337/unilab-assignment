import { useState } from "react";
import { data } from "../../data/data";
import FilterCategory from "../../components/FilterCategory/FilterCategory";
import Table from "../../components/Table/Table";
import Pagination from "../../components/Pagination/Pagination";
import "./Form.css";

import { ReactComponent as FilterIcon } from "../../assets/filter.svg";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";

const statusFilters = { type: "status", filters: ["active", "inactive"] };
const genderFilters = { type: "gender", filters: ["male", "female"] };

const Form = () => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    status: ["active", "inactive"],
    gender: ["male", "female"],
  });
  const [showFilters, setShowFilters] = useState(false);

  const perPage = 7;
  const getFilteredList = () => {
    return data
      .filter((el) => filters.status.includes(el.status))
      .filter((el) => filters.gender.includes(el.gender));
  };

  const filteredList = getFilteredList();
  const pageCount = Math.ceil(filteredList.length / perPage);
  const list = filteredList.slice(perPage * page - perPage, perPage * page);

  const handleCheckbox = (e) => {
    const { id, value } = e.target;
    e.target.removeAttribute("checked");
    if (filters[value].includes(id)) {
      setFilters((prev) => {
        return {
          ...prev,
          [value]: prev[value].filter((el) => el !== id),
        };
      });
    } else {
      setFilters((prev) => {
        return {
          ...prev,
          [value]: [...prev[value], id],
        };
      });
    }
  };
  return (
    <section className="form__container">
      {showFilters && (
        <div className="filters">
          <ul>
            <li>
              <FilterCategory
                name="სტუდენტის სტატუსი"
                filterData={statusFilters}
                handleCheckbox={handleCheckbox}
                setPage={setPage}
              />
            </li>
            <li>
              <FilterCategory
                name="სქესი"
                filterData={genderFilters}
                handleCheckbox={handleCheckbox}
                setPage={setPage}
              />
            </li>
          </ul>
        </div>
      )}
      <div className="test">
        <div className="form__filters">
          <button
            className="filter btn"
            onClick={() => setShowFilters(!showFilters)}
          >
            <FilterIcon className="filter-icon" />
            filter
          </button>
          <label className="search">
            <SearchIcon className="search-icon" />
            <input type="search" />
          </label>
        </div>
        <Table list={list} perPage={perPage} />
        <Pagination
          perPage={perPage}
          pageCount={pageCount}
          page={page}
          setPage={setPage}
          list={list}
        />
      </div>
    </section>
  );
};

export default Form;
