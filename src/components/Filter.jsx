import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/features/data";

const Filter = () => {
  const { handleFilter } = useContext(DataContext);

  const [isStatusFilterOpen, setIsStatusFilterOpen] = useState(false);
  const [isSexFilterOpen, setIsSexFilterOpen] = useState(false);

  const [statusFilters, setStatusFilters] = useState([]);
  const [sexFilters, setSexFilters] = useState([]);

  const handleStatusCheckbox = (e) => {
    if (e.target.checked) {
      setStatusFilters((prev) => [...prev, e.target.value]);
    } else {
      const newArr = statusFilters.filter(
        (stFilter) => stFilter !== e.target.value
      );
      setStatusFilters(newArr);
    }
  };

  const handleSexCheckbox = (e) => {
    if (e.target.checked) {
      setSexFilters((prev) => [...prev, e.target.value]);
    } else {
      const newArr = sexFilters.filter(
        (sxFilter) => sxFilter !== e.target.value
      );
      setSexFilters(newArr);
    }
  };

  useEffect(() => {
    handleFilter(statusFilters, sexFilters);
  }, [statusFilters, sexFilters, handleFilter]);

  return (
    <main className="filter-wrapper">
      <section className="status-filter-wrapper">
        <div
          className="status-filter"
          onClick={() => setIsStatusFilterOpen(!isStatusFilterOpen)}
        >
          <i className="material-icons chevron">chevron_right</i>
          <span>სტუდენტის სტატუსი</span>
        </div>
        {isStatusFilterOpen ? (
          <div className="filters">
            <div className="input-box">
              <input
                type="checkbox"
                name="active"
                id="active"
                value="active"
                onChange={(e) => handleStatusCheckbox(e)}
              />
              <label htmlFor="active">Active</label>
            </div>
            <div className="input-box">
              <input
                type="checkbox"
                name="inactive"
                id="inactive"
                value="inactive"
                onChange={(e) => handleStatusCheckbox(e)}
              />
              <label htmlFor="inactive">Inactive</label>
            </div>
          </div>
        ) : null}
      </section>
      <section className="sex-filter-wrapper">
        <div
          className="sex-filter"
          onClick={() => setIsSexFilterOpen(!isSexFilterOpen)}
        >
          <i className="material-icons chevron">chevron_right</i>
          <span>სქესი</span>
        </div>
        {isSexFilterOpen ? (
          <div className="filters">
            <div className="input-box">
              <input
                type="checkbox"
                name="male"
                id="male"
                value="male"
                onChange={(e) => handleSexCheckbox(e)}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div className="input-box">
              <input
                type="checkbox"
                name="female"
                id="female"
                value="female"
                onChange={(e) => handleSexCheckbox(e)}
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
        ) : null}
      </section>
    </main>
  );
};

export default Filter;
