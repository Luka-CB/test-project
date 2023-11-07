import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../context/features/api";
import { useNavigate, useSearchParams } from "react-router-dom";

const ApiPagination = () => {
  const { fetchPosts } = useContext(ApiContext);

  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");

  useEffect(() => {
    if (page) {
      setCurrentPage(+page);
    }
  }, [page]);

  const perPage = 12;
  const lastPage = Math.ceil(100 / perPage);

  const handleLastPage = () => {
    if (currentPage === lastPage) return;

    setCurrentPage(lastPage);
    navigate({
      pathname: "/api",
      search: `?page=${lastPage}`,
    });

    const start = (lastPage - 1) * perPage;
    fetchPosts(start);
  };

  const handleNextPage = () => {
    if (currentPage === lastPage) return;

    const nextPage = currentPage + 1;

    setCurrentPage(nextPage);
    navigate({
      pathname: "/api",
      search: `?page=${nextPage}`,
    });

    const start = currentPage * perPage;
    fetchPosts(start);
  };

  const handlePrevPage = () => {
    if (currentPage === 1) return;

    const prevPage = currentPage - 1;

    setCurrentPage(prevPage);
    navigate({
      pathname: "/api",
      search: `?page=${prevPage}`,
    });

    const start = (prevPage - 1) * perPage;
    fetchPosts(start);
  };

  const handleFirstPage = () => {
    if (currentPage === 1) return;

    setCurrentPage(1);
    navigate({
      pathname: "/api",
      search: `?page=${1}`,
    });

    const start = 0;
    fetchPosts(start);
  };

  return (
    <main className="pagination-table">
      <section className="first" onClick={handleFirstPage}>
        <i
          className={
            currentPage === 1
              ? "material-icons first-icon-disabled"
              : "material-icons first-icon"
          }
        >
          keyboard_double_arrow_left
        </i>
      </section>
      <section className="prev" onClick={handlePrevPage}>
        <i
          className={
            currentPage === 1
              ? "material-icons prev-icon-disabled"
              : "material-icons prev-icon"
          }
        >
          chevron_left
        </i>
      </section>
      <section className="nums">
        <span className="page-num">{currentPage}</span>
        <span className="of">of</span>
        <span className="total-page-num">{lastPage}</span>
      </section>
      <section className="next" onClick={handleNextPage}>
        <i
          className={
            currentPage === lastPage
              ? "material-icons next-icon-disabled"
              : "material-icons next-icon"
          }
        >
          chevron_right
        </i>
      </section>
      <section className="last" onClick={handleLastPage}>
        <i
          className={
            currentPage === lastPage
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

export default ApiPagination;
