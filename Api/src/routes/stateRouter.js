const { Router } = require("express");
const { getStateHandler } = require("../handlers/stateHandler");

const stateRouter = Router();

stateRouter.get("/", getStateHandler);

module.exports = stateRouter;
