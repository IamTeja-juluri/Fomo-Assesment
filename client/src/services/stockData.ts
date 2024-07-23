import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const stockDataApi = createApi({
  reducerPath: "stockDataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1/",
  }),
  endpoints: (builder) => ({
    getStockData: builder.query({
      query: (name) => `coins/latest?name=${name}`,
    }),
  }),
});

export const { useGetStockDataQuery, useLazyGetStockDataQuery } = stockDataApi;
