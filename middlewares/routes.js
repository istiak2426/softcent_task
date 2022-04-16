const currencyRouter = require("../routers/currencyRouter");

module.exports = (app) => {
  app.use("/api/getBitcoinInfo", currencyRouter);
};
