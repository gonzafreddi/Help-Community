const { Router } = require("express");
const express = require("express");

const ongdonorRouter = require("./ongdonorRouter");
const campaignRouter = require("./campaignRouter");
const stateRouter = require("./stateRouter");
const categoryRouter = require("./categoryRouter");
const productRouter = require("./productRouter");
const CategoryProductRouter = require("./categoryProductRouter");
const buysRouter = require("./buysRouter");

const router = Router();

router.use("/ongdonor", ongdonorRouter);
router.use("/campaign", campaignRouter);
router.use("/state", stateRouter);
router.use("/category", categoryRouter);
router.use("/product", productRouter);
router.use("/categoryProduct", CategoryProductRouter);
router.use("/buys", buysRouter);


router.use(express.json());

module.exports = router;
