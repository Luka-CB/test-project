import { createContext, useCallback, useEffect, useState } from "react";
import { students } from "../../data";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const dataPerPage = 7;

  const [filteredStudentsData, setFilteredStudentsData] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    if (filteredStudentsData.length > 0) {
      setCurrentData(filteredStudentsData.slice(0, dataPerPage));
    } else {
      setCurrentData(students.slice(0, dataPerPage));
    }
  }, [filteredStudentsData]);

  let totalPages;

  if (filteredStudentsData.length > 0) {
    totalPages = Math.ceil(filteredStudentsData.length / dataPerPage);
  } else {
    totalPages = Math.ceil(students.length / dataPerPage);
  }

  const handlePaginate = (pageNum) => {
    setCurrentPage(pageNum);
    const calculatedOffset = pageNum * dataPerPage;
    const calculatedDataPerPage = calculatedOffset + dataPerPage;

    let newData;
    if (filteredStudentsData.length > 0) {
      newData = filteredStudentsData.slice(
        calculatedOffset,
        calculatedDataPerPage
      );
    } else {
      newData = students.slice(calculatedOffset, calculatedDataPerPage);
    }
    setCurrentData(newData);
  };

  const handleFilter = useCallback((statusFilters, sexFilters) => {
    let filteredData;

    if (statusFilters.length === 1 && sexFilters.length === 1) {
      filteredData = students.filter(
        (student) =>
          student.status === statusFilters[0] && student.sex === sexFilters[0]
      );
      setCurrentPage(0);
    } else if (sexFilters.length === 1) {
      filteredData = students.filter((student) =>
        sexFilters.some((s) => s === student.sex)
      );
      setCurrentPage(0);
    } else if (statusFilters.length === 1) {
      filteredData = students.filter((student) =>
        statusFilters.some((f) => f === student.status)
      );
      setCurrentPage(0);
    } else {
      filteredData = students;
    }

    setFilteredStudentsData(filteredData);
  }, []);

  const clearFilter = () => {
    setFilteredStudentsData([]);
    setCurrentPage(0);
  };

  const contextData = {
    currentPage,
    setCurrentPage,
    currentData,
    totalPages,
    handlePaginate,
    handleFilter,
    clearFilter,
  };

  return (
    <DataContext.Provider value={contextData}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
