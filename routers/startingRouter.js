const router = require("express").Router();

const { starting } = require("../controllers/startingController");


router
  .route("/")
  .get(starting);

module.exports = router;