const { Router } = require('express');
const { postUserHandler, getUserHandler, putUserHandler, getUserEmailHandler } = require("../handlers/userHandler");

const userRouter = Router();

userRouter.get("/", getUserHandler);
userRouter.get("/email", getUserEmailHandler);
userRouter.post("/create", postUserHandler);
userRouter.put("/update/:id", putUserHandler);

module.exports = userRouter;

