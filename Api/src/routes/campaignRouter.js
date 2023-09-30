const { Router } = require("express");
const { getCampaignHandler, postCampaignHandler } = require("../handlers/campaignHandler");

const campaignRouter = Router();

campaignRouter.get("/", getCampaignHandler);
campaignRouter.get("/create", postCampaignHandler);

module.exports = campaignRouter;
