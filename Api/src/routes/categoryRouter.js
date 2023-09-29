const { Router } = require("express");
const { getCategoryHandler } = require("../handlers/categoryHandler");

const categoryRouter = Router();

categoryRouter.get("/", getCategoryHandler);

module.exports = categoryRouter;
