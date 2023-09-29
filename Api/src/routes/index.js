const { Router } = require("express");
const express = require("express");

const ong_donorRouter = require("./ong_donor");
const campaignRouter = require("./campaignRouter");

const router = Router();

router.use("/ong_donor", ong_donorRouter);

router.use("/campaign", campaignRouter);

router.use(express.json());

module.exports = router;
