const { Router } = require("express");
const {
  getreviewHandler,
  postreviewHandler,
  putreviewHandler,
  userreviewHandler,
} = require("../handlers/reviewHandler");

const reviewRouter = Router();

reviewRouter.get("/", getreviewHandler);
reviewRouter.get("/users/:userId/reviews", userreviewHandler);
console.log()

reviewRouter.post("/create", postreviewHandler);

reviewRouter.put("/update/:id", putreviewHandler);

module.exports = reviewRouter;