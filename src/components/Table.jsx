import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/features/data";
import { SortIcon } from "./svgs";

const Table = () => {
  const { currentData } = useContext(DataContext);

  const [sortKey, setSortKey] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(currentData);

    if (sortKey === "asc") {
      setData(currentData.sort((a, b) => a.score - b.score));
    }
    if (sortKey === "desc") {
      setData(currentData.sort((a, b) => b.score - a.score));
    }
  }, [currentData, sortKey]);

  return (
    <table cellSpacing={0}>
      <thead>
        <tr>
          <th>სტუდენტის სახელი და გვარი</th>
          <th>სტატუსი</th>
          <th>სქესი</th>
          <th>
            <div
              className="inner-wrapper"
              onClick={() => setSortKey(sortKey === "asc" ? "desc" : "asc")}
            >
              <span>ქულები</span>
              <div className="icons">{<SortIcon />}</div>
            </div>
          </th>
          <th>პირადი ნომერი</th>
          <th>მეილი</th>
          <th>მობილურის ნომერი</th>
          <th>მისამართი</th>
          <th>დაბადების თარიღი</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((student) => (
          <tr key={student.id}>
            <td>{`${student.firstName} ${student.lastName}`}</td>
            <td>{student.status}</td>
            <td>{student.sex}</td>
            <td>{student.score}</td>
            <td>{student.idCardNum}</td>
            <td>{student.email}</td>
            <td>{student.phoneNum}</td>
            <td>{student.address}</td>
            <td>{student.dateOfBirth}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
