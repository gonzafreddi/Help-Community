const { Router } = require("express");
const {
  getCampaignHandler,
  postCampaignHandler,
  putCampaignHandler,
} = require("../handlers/campaignHandler");

const campaignRouter = Router();

campaignRouter.get("/", getCampaignHandler);
campaignRouter.post("/create", postCampaignHandler);
campaignRouter.put("/edit/:id", putCampaignHandler);

module.exports = campaignRouter;
