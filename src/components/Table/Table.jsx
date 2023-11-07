import React from "react";
import "./Table.css";
import { ReactComponent as SortIcon } from "../../assets/sort.svg";

const Table = ({ list, perPage }) => {
  return (
    <div className="wrapper">
      <table className="table">
        <tbody>
          <tr>
            <th>სტუდენტის სახელი და გვარი</th>
            <th>სტატუსი</th>
            <th>სქესი</th>
            <th className="th-score">
              ქულები
              <SortIcon className="sort-icon" />
            </th>
            <th>პირადი ნომერი</th>
            <th>მაილი</th>
            <th>მობილურის ნომერი</th>
            <th>მისამართი</th>
            <th>დაბადების თარიღი</th>
          </tr>
          {list.map((person) => {
            const {
              name,
              status,
              gender,
              score,
              id,
              email,
              phone,
              location,
              dob,
            } = person;

            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{status}</td>
                <td>{gender}</td>
                <td>{score}</td>
                <td>{id}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{location}</td>
                <td>{dob}</td>
              </tr>
            );
          })}
          {Array.from(
            { length: perPage - list.length },
            (_, index) => index
          ).map((i) => {
            return <tr key={i}></tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
