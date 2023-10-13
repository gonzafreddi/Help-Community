const { Router } = require('express');
const { postUserHandler, getUserHandler } = require("../handlers/userHandler");
const { loginUser } = require('../controllers/loginController');

const userRouter = Router();

userRouter.get("/", getUserHandler);
userRouter.post("/create", postUserHandler);
userRouter.post("/login", loginUser);

module.exports = userRouter;

