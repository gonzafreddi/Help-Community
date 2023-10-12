const { Router } = require("express");
const {
  getreviewHandler,
  postreviewHandler,
  putreviewHandler,
} = require("../handlers/reviewHandler");

const reviewRouter = Router();

reviewRouter.get("/", getreviewHandler);
console.log()

reviewRouter.post("/create", postreviewHandler);

reviewRouter.put("/update/:id", putreviewHandler);

module.exports = reviewRouter;