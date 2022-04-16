const router = require("express").Router();
const { getCurrency } = require("../controllers/currencyController");

router
  .route("/:id")
  .get(getCurrency);

module.exports = router;
