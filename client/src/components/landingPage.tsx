import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  setStockDataToken,
  setStockNameToken,
} from "../features/stockDataSlice";
import Modal from "./Modal";
import Table from "./table";
import { useGetStockDataQuery } from "../services/stockData";

const LandingPage = () => {
  let stockName: string | null = localStorage.getItem("stockName");
  const { data: stocks, refetch } = useGetStockDataQuery(stockName, {
    pollingInterval: 300000,
  });
  const dispatch = useAppDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!stockName) {
      dispatch(setStockNameToken("Bitcoin"));
    }
    dispatch(setStockNameToken(localStorage.getItem("stockName") ?? ""));
    const data = localStorage.getItem("stockData");
    if (data) {
      dispatch(setStockDataToken(JSON.parse(data)));
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      const result = await refetch();
      if (result.data) {
        dispatch(setStockDataToken(result.data.data));
      } else if (result.error) {
        console.error("Failed to fetch stock data:", result.error);
      }
    }, 300000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-12 py-8">
      <div className="flex justify-between items-center">
        <span className="font-bold text-2xl">Name: {stockName}</span>
        <button
          className="bg-teal-600 text-white font-bold rounded-lg px-6 py-3"
          onClick={() => setIsModalOpen(true)}
        >
          Search Stock
        </button>
      </div>
      <Table />
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default LandingPage;
