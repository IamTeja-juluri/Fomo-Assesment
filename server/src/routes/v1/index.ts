import { Router } from "express";
import {CoinController} from "../../controllers"

const router=Router();

router.get('/coins/list',CoinController.fetchCurrentDataFromApi)
router.get("/coins/latest",CoinController.fetchfromdb)

export default router