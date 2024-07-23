import {StatusCodes} from "http-status-codes"
import {CoinService} from "../services"
import {SuccessResponse,ErrorResponse} from "../utils/common"
import {Request,Response} from "express"
import AppError from "../utils/errors/app-error"

async function fetchCurrentDataFromApi(req: Request, res: Response): Promise<Response>{
  try {
    const response = await CoinService.fetchCurrentDataFromApi()
    SuccessResponse.data =  response ;
    return res.status(200).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = (error instanceof AppError) ? error.message : "Internal Server Error"
    return res.status((error instanceof AppError) ? error.statusCode : StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

async function fetchfromdb(req: Request, res: Response) : Promise<Response>{
  try {
    const response = await CoinService.fetchfromdb(req.query)
    SuccessResponse.data =  response ;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = (error instanceof AppError) ? error.message : "Internal Server Error"
    return res.status((error instanceof AppError) ? error.statusCode : StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

export {
  fetchCurrentDataFromApi,
  fetchfromdb
}

