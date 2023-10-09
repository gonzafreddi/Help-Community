const {
  getAllCampaign,
  getCampaignByName,
  postCampaign,
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

const postCampaignHandler = async (req, res) => {
  const {
    name,
    short_description,
    long_description,
    image,
    startDate,
    endDate,
    finalAmount,
    state,
    ong,
    StateId,
    CategoryId,
  } = req.body;

  try {
    await postCampaign(
      name,
      short_description,
      long_description,
      image,
      startDate,
      endDate,
      finalAmount,
      state,
      ong,
      StateId,
      CategoryId
    );
    res.status(200).json(`The Campaign ${name} was successfully created`);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCampaignHandler,
  postCampaignHandler,
};
