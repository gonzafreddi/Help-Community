const { Router } = require("express");
const express = require("express");

const userRouter = require("./userRouter");
const campaignRouter = require("./campaignRouter");
const stateRouter = require("./stateRouter");
const categoryRouter = require("./categoryRouter");
const productRouter = require("./productRouter");
const paymentRouter = require("./paymentRouter");
// const webhookRouter = require ("./webhookRouter");
const CategoryProductRouter = require("./categoryProductRouter");
const buysRouter = require("./buysRouter");
const reviewRouter = require("./reviewRouter");
const shoppingCarRouter = require("./shoppingCarRouter");
const nodemailerRouter = require("./nodemailerRouter");

const router = Router();

router.use("/payment", paymentRouter);

router.use("/user", userRouter);
router.use("/campaign", campaignRouter);
router.use("/state", stateRouter);
router.use("/category", categoryRouter);
router.use("/product", productRouter);
router.use("/review", reviewRouter);
router.use("/categoryProduct", CategoryProductRouter);
router.use("/buys", buysRouter);
router.use("/shoppingCar", shoppingCarRouter);
router.use("/admin", nodemailerRouter);

router.use(express.json());

module.exports = router;
