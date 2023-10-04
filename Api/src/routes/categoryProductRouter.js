const { Router } = require("express");
const { getCategoryProductHandler } = require("../handlers/categoryProductHandler");

const categoryProductRouter = Router();
//console.log("entre a CategoryProductRouter");
categoryProductRouter.get("/", getCategoryProductHandler);

module.exports = categoryProductRouter;