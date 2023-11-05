import { useContext, useState } from "react";
import Filter from "../components/Filter";
import Navigation from "../components/Navigation";
import Table from "../components/Table";
import TablePagination from "../components/TablePagination";
import { DataContext } from "../context/features/data";

const FormPage = () => {
  const { clearFilter } = useContext(DataContext);

  const [toggleFilter, setToggleFilter] = useState(false);

  const handleToggleFilter = () => {
    setToggleFilter(!toggleFilter);
    clearFilter();
  };

  return (
    <div className="form-page-container">
      <Navigation />
      <div className="content-wrapper">
        {toggleFilter ? <Filter /> : null}
        <div className="content">
          <div className="row1">
            <button className="filter-btn" onClick={handleToggleFilter}>
              <i className="material-icons filter-icon">filter_alt</i>
              <span>filter</span>
            </button>
            <div className="search-box">
              <div className="search-icon-wrapper">
                <i className="material-icons search-icon">search</i>
              </div>
              <input type="text" />
            </div>
          </div>
          <div className="row2">
            <Table />
          </div>
          <div className="row3">
            <TablePagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
