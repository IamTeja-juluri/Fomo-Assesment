import {Coin} from "../models";
import { ICoin } from "../models/coin-model";
import CrudRepository from "./crud-repository";

class CoinRepository extends CrudRepository<ICoin>{
  constructor() {
    super(Coin);
  }
}

export default CoinRepository;