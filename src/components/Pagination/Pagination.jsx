import { ReactComponent as ChevronLeft } from "../../assets/chevron-left.svg";
import { ReactComponent as ChevronsLeft } from "../../assets/chevrons-left.svg";
import { ReactComponent as ChevronRight } from "../../assets/chevron-right.svg";
import { ReactComponent as ChevronsRight } from "../../assets/chevrons-right.svg";
import "./Pagination.css";

const Pagination = ({ pageCount, page, setPage, list, color }) => {
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handlePrevPage = (type) => {
    if (type === "PREV_PAGE") {
      const prevPage = page - 1;

      prevPage < 1 ? setPage(1) : setPage(prevPage);
    }

    if (type === "START_PAGE") {
      setPage(1);
    }
  };

  const handleNextPage = (type) => {
    if (type === "NEXT_PAGE") {
      const nextPage = page + 1;

      nextPage > pageCount ? setPage(pageCount) : setPage(nextPage);
    }

    if (type === "LAST_PAGE") {
      setPage(pageCount);
    }
  };

  return (
    <div className={`pagination ${color ? color : ""}`}>
      {list.length > 0 && (
        <div className="chevrons">
          <ChevronsLeft
            className="chevron"
            onClick={() => handlePrevPage("START_PAGE")}
          />
          <ChevronLeft
            className="chevron"
            onClick={() => handlePrevPage("PREV_PAGE")}
          />
        </div>
      )}
      {Array.from({ length: pageCount }, (_, index) => index).map((i) => {
        i = i + 1;

        return (
          <span
            key={i}
            className={i === page ? "page active-page" : "page"}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </span>
        );
      })}
      {list.length > 0 && (
        <div className="chevrons">
          <ChevronRight
            className="chevron"
            onClick={() => handleNextPage("NEXT_PAGE")}
          />
          <ChevronsRight
            className="chevron"
            onClick={() => handleNextPage("LAST_PAGE")}
          />
        </div>
      )}
    </div>
  );
};

export default Pagination;
