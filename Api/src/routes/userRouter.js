const { Router } = require('express');
const { postUserHandler, getUserHandler, putUserHandler } = require("../handlers/userHandler");

const userRouter = Router();

userRouter.get("/", getUserHandler);
userRouter.post("/create", postUserHandler);
userRouter.put("/update/:id", putUserHandler);

module.exports = userRouter;

