const { Router } = require("express");
const {
  getreviewHandler,
  postreviewHandler,
} = require("../handlers/reviewHandler");

const reviewRouter = Router();

reviewRouter.get("/", getreviewHandler);
console.log()

reviewRouter.post("/create", postreviewHandler);

module.exports = reviewRouter;