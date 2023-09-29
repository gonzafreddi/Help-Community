const { Router } = require("express");
const { getProductHandler } = require("../handlers/productHandler");

const productRouter = Router();

productRouter.get("/", getProductHandler);

module.exports = productRouter;
