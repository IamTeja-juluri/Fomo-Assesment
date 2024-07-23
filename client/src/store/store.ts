import { configureStore } from "@reduxjs/toolkit";
import { stockDataApi } from "../services/stockData";
import { setupListeners } from "@reduxjs/toolkit/query";
import stockDataSlice from "../features/stockDataSlice";

export const store = configureStore({
  reducer: {
    [stockDataApi.reducerPath]: stockDataApi.reducer,
    stockDataSlice: stockDataSlice,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(stockDataApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
