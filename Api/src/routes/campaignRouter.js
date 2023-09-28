const { Router } = require("express");
const { getCampaignHandler } = require("../handlers/campaignHandler");

const campaignRouter = Router();

campaignRouter.get("/", getCampaignHandler);

module.exports = campaignRouter;
