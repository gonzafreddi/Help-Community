const { Router } = require("express");
const express = require("express");

const ong_donanteRouter = require("./ong_donante");
const campaignRouter = require("./campaignRouter");
const stateRouter = require("./stateRouter");
const categoryRouter = require("./categoryRouter");

const router = Router();

router.use("/ong_donante", ong_donanteRouter);

router.use("/campaign", campaignRouter);

router.use("/state", stateRouter);

router.use("/category",categoryRouter);

router.use(express.json());



module.exports = router;
