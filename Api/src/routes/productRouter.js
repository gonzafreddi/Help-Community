const { Router } = require("express");
const {
  getProductHandler,
  postProductHandler,
} = require("../handlers/productHandler");

const productRouter = Router();

productRouter.get("/", getProductHandler);

productRouter.post("/", postProductHandler);

module.exports = productRouter;
