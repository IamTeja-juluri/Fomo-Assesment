const { StatusCodes } = require("http-status-codes");
const { CoinService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function fetchCurrentDataFromApi(req, res) {
  try {
    const response = await CoinService.fetchCurrentDataFromApi()
    SuccessResponse.data =  response ;
    return res.status(200).json(SuccessResponse);
  } catch (error) {
    console.error("Error fetching data:", error);
    const ErrorResponse = { error: error.message };
    return res.status(error.statusCode || 500).json(ErrorResponse);
  }
}

async function fetchfromdb(req, res) {
  try {
    const response = await CoinService.fetchfromdb(req.query)
    console.log(response.length)
    SuccessResponse.data =  response ;
    return res.status(200).json(SuccessResponse);
  } catch (error) {
    console.error("Error fetching data:", error);
    const ErrorResponse = { error: error.message };
    return res.status(error.statusCode || 500).json(ErrorResponse);
  }
}

module.exports = {
  fetchCurrentDataFromApi,
  fetchfromdb
};
