const { Router } = require('express');
const { postUserHandler, getUserHandler } = require("../handlers/userHandler");

const userRouter = Router();

userRouter.get("/", getUserHandler);
userRouter.post("/create", postUserHandler);

module.exports = userRouter;

