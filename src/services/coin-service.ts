import { CoinRepository } from "../repositories";
import {StatusCodes} from "http-status-codes"
import AppError from "../utils/errors/app-error";
import {ICoin} from "../models/coin-model";
import { ServerConfig } from "../config";

const coinRepository = new CoinRepository();

async function fetchCurrentDataFromApi(): Promise<ICoin[]> {
  try {
    const response = await fetch(
      new Request("https://api.livecoinwatch.com/coins/list"),
      {
        method: "POST",
        headers: new Headers({
          "content-type": "application/json",
          "x-api-key": `${ServerConfig.API_KEY}`,
        }),
        body: JSON.stringify({
          currency: "USD",
          sort: "rank",
          order: "ascending",
          offset: 0,
          limit: 10,
          meta: true,
        }),
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    if (!Array.isArray(responseData)) {
      throw new Error('Response data is not an array');
    }

    await coinRepository.insertMany(responseData)
    return responseData
  } catch (error) { 
    throw new AppError(
      "Something went wrong ",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function fetchfromdb(data: Partial<ICoin>): Promise<ICoin[]> {
  try {
    const response = await coinRepository.get({name:data.name})
    return response
  } catch (error) {
    throw new AppError(
      "Something went wrong ",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}



export {
  fetchCurrentDataFromApi,
  fetchfromdb
}