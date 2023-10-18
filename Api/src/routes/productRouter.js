const { Router } = require("express");
const {
  getProductHandler,
  postProductHandler,
  putProductHandler,
} = require("../handlers/productHandler");

const productRouter = Router();

productRouter.get("/", getProductHandler);

productRouter.post("/", postProductHandler);

productRouter.put("/edit/:id", putProductHandler);

module.exports = productRouter;
