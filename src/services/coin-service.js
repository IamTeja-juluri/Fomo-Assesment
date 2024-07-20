const { CoinRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-error");
const { ObjectId } = require("mongodb");

const coinRepository = new CoinRepository();


async function fetchCurrentDataFromApi() {
  try {
    const response = await fetch(
      new Request("https://api.livecoinwatch.com/coins/list"),
      {
        method: "POST",
        headers: new Headers({
          "content-type": "application/json",
          "x-api-key": "6ed9e913-dcee-483a-8919-3dfb9a3c56f4",
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

    const resp = await coinRepository.insertMany(responseData)
    console.log("le=",resp.length)
    return responseData
  } catch (error) { 
    throw new AppError(
      "Something went wrong ",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function fetchfromdb(data) {
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

module.exports = {
  fetchCurrentDataFromApi,
  fetchfromdb
};
