const { Coin } = require("../models");
const CrudRepository = require("./crud-repository");

class coinRepository extends CrudRepository {
  constructor() {
    super(Coin);
  }
}

module.exports = coinRepository;
