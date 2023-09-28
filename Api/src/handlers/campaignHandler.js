const {
  getAllCampaign,
  getCampaignByName,
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

module.exports = { getCampaignHandler };
