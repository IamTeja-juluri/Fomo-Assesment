import React from "react";
import "./table.scss";
import { useAppSelector } from "../store/hooks";
const cols = ["name", "symbol", "rank", "allTimeHighUSD", "circulatingSupply"];

const Table = () => {
  const state = useAppSelector((state) => state.stockDataSlice);

  return (
    <div className="stockDataTable flex justify-center">
      <table className="styled-table">
        <thead>
          <tr>
            {cols.map((item, i) => (
              <th key={i}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {state?.data &&
            state?.data?.map((item: any, i: any) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.symbol}</td>
                <td>{item.rank}</td>
                <td>{item.allTimeHighUSD.toFixed(3)}</td>
                <td>{item.circulatingSupply}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
