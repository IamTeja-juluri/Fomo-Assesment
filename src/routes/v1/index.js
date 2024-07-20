const express= require('express');

const { InfoController, CoinController }=require('../../controllers')

const router=express.Router();

router.get('/info',InfoController.info)
router.get('/coins/list',CoinController.fetchCurrentDataFromApi)
router.get("/coins/latest",CoinController.fetchfromdb)

module.exports=router