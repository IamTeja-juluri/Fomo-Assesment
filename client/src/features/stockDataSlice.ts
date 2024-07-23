import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface stockDataState {
  name: string;
  data: any[];
}

const initialState: stockDataState = {
  name: "",
  data: [],
};

export const stockDataSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    setStockDataToken: (state, action: any) => {
      localStorage.setItem("stockData", JSON.stringify(action.payload));
      state.data = action.payload;
    },
    setStockNameToken: (state, action: PayloadAction<string>) => {
      localStorage.setItem("stockName", action.payload);
      state.name = action.payload;
    },
  },
});

export const { setStockDataToken, setStockNameToken } = stockDataSlice.actions;

export default stockDataSlice.reducer;
