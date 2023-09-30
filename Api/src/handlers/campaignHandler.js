const {
  getAllCampaign,
  getCampaignByName,
  postCampaign
} = require("../controllers/campaignController");

const getCampaignHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const result = name
      ? await getCampaignByName(name)
      : await getAllCampaign();

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postCampaignHandler = (req, res) => {
  try {
    const result = postCampaign();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error:error.message });
  }
};

module.exports = { 
  getCampaignHandler,
  postCampaignHandler
};
