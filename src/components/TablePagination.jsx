import { useContext } from "react";
import { DataContext } from "../context/features/data";

const TablePagination = () => {
  const { totalPages, currentPage, handlePaginate } = useContext(DataContext);

  return (
    <main className="table-pagination">
      <section className="first" onClick={() => handlePaginate(0)}>
        <i
          className={
            currentPage === 0
              ? "material-icons first-icon-disabled"
              : "material-icons first-icon"
          }
        >
          keyboard_double_arrow_left
        </i>
      </section>
      <section
        className="prev"
        onClick={() => currentPage !== 0 && handlePaginate(currentPage - 1)}
      >
        <i
          className={
            currentPage === 0
              ? "material-icons prev-icon-disabled"
              : "material-icons prev-icon"
          }
        >
          chevron_left
        </i>
      </section>
      <section className="nums">
        {[...Array(totalPages)].map((page, i) => (
          <span
            className={currentPage === i ? "num-active" : "num"}
            key={i}
            onClick={() => handlePaginate(i)}
          >
            {i + 1}
          </span>
        ))}
      </section>
      <section
        className="next"
        onClick={() =>
          currentPage !== totalPages - 1 && handlePaginate(currentPage + 1)
        }
      >
        <i
          className={
            currentPage === totalPages - 1
              ? "material-icons next-icon-disabled"
              : "material-icons next-icon"
          }
        >
          chevron_right
        </i>
      </section>
      <section className="last" onClick={() => handlePaginate(totalPages - 1)}>
        <i
          className={
            currentPage === totalPages - 1
              ? "material-icons last-icon-disabled"
              : "material-icons last-icon"
          }
        >
          keyboard_double_arrow_right
        </i>
      </section>
    </main>
  );
};

export default TablePagination;
