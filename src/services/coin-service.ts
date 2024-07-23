import { CoinRepository } from "../repositories";
import {StatusCodes} from "http-status-codes"
import AppError from "../utils/errors/app-error";
import {ICoin} from "../models/coin-model";
import { ServerConfig } from "../config";
import axios from "axios";

const coinRepository = new CoinRepository();

async function fetchCurrentDataFromApi(): Promise<ICoin[]> {
  try {
   const response = await axios.post(
      "https://api.livecoinwatch.com/coins/list",
      {
        currency: "USD",
        sort: "rank",
        order: "ascending",
        offset: 0,
        limit: 10,
        meta: true,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": ServerConfig.API_KEY,
        },
      }
    );
    
    const responseData = response.data;
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