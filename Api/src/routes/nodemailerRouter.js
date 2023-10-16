const { Router } = require("express");
const postNodemailerHandler = require("../handlers/nodemailerHandler");

const nodemailerRouter = Router();

nodemailerRouter.post("/", postNodemailerHandler);

module.exports = nodemailerRouter;
