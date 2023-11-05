import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/features/data";

const sortIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <g clipPath="url(#clip0_1_74)">
        <path
          d="M9 15.75L5.0625 11.8125L5.85562 11.0193L9 14.1581L12.1444 11.0193L12.9375 11.8125L9 15.75Z"
          fill="#767777"
        />
        <path
          d="M9 2.25L12.9375 6.1875L12.1444 6.98063L9 3.84187L5.85562 6.98063L5.0625 6.1875L9 2.25Z"
          fill="#767777"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_74">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

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
              <div className="icons">{sortIcon()}</div>
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
