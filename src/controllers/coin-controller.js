const { StatusCodes } = require("http-status-codes");
const { CoinService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function fetchCurrentDataFromApi(req, res) {
  try {
    const response = await CoinService.fetchCurrentDataFromApi()
    SuccessResponse.data =  response ;
    return res.status(200).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error
    return res.status(error.statusCode || 500).json(ErrorResponse);
  }
}

async function fetchfromdb(req, res) {
  try {
    const response = await CoinService.fetchfromdb(req.query)
    SuccessResponse.data =  response ;
    return res.status(200).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error
    return res.status(error.statusCode || 500).json(ErrorResponse);
  }
}

module.exports = {
  fetchCurrentDataFromApi,
  fetchfromdb
};
