const { Router } = require("express");
const express = require("express");

const ong_donorRouter = require("./ong_donor");
const campaignRouter = require("./campaignRouter");
const stateRouter = require("./stateRouter");
const categoryRouter = require("./categoryRouter");
const productRouter = require("./productRouter");

const router = Router();

router.use("/ong_donor", ong_donorRouter);

router.use("/campaign", campaignRouter);

router.use("/state", stateRouter);

router.use("/category", categoryRouter);

router.use("/product", productRouter);

router.use(express.json());

module.exports = router;
