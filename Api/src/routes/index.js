const { Router } = require("express");
const express = require("express");

const userRouter = require("./userRouter");
const campaignRouter = require("./campaignRouter");
const stateRouter = require("./stateRouter");
const categoryRouter = require("./categoryRouter");
const productRouter = require("./productRouter");

const router = Router();

router.use("/user", userRouter);
router.use("/campaign", campaignRouter);
router.use("/state", stateRouter);
router.use("/category", categoryRouter);
router.use("/product", productRouter);
router.use(express.json());

module.exports = router;
