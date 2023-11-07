import { useContext, useState } from "react";
import Filter from "../components/Filter";
import Navigation from "../components/Navigation";
import Table from "../components/Table";
import TablePagination from "../components/TablePagination";
import { DataContext } from "../context/features/data";
import Head from "../components/Head";
import { FilterIcon, SearchIcon } from "../components/svgs";

const FormPage = () => {
  const { clearFilter } = useContext(DataContext);

  const [toggleFilter, setToggleFilter] = useState(false);

  const handleToggleFilter = () => {
    setToggleFilter(!toggleFilter);
    clearFilter();
  };

  return (
    <main className="form-page-container">
      <Head
        title="form"
        description="repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque"
      />
      <Navigation />
      <div className="content-wrapper">
        {toggleFilter ? <Filter /> : null}
        <div className="content">
          <section className="row1">
            <button className="filter-btn" onClick={handleToggleFilter}>
              <FilterIcon />
              <span>filter</span>
            </button>
            <div className="search-box">
              <div className="search-icon-wrapper">
                <SearchIcon />
              </div>
              <input type="text" />
            </div>
          </section>
          <section className="row2">
            <Table />
          </section>
          <section className="row3">
            <TablePagination />
          </section>
        </div>
      </div>
    </main>
  );
};

export default FormPage;
