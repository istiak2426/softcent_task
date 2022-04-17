const currencyRouter = require("../routers/currencyRouter");
const startingRouter = require("../routers/startingRouter");



module.exports = (app) => {
  app.use("/api/getBitcoinInfo", currencyRouter);
  app.use("/api", startingRouter)
};
