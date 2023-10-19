const {
  getAllCampaign,
  getCampaignByName,
  postCampaign,
  putCampaign,
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

const putCampaignHandler = async (req, res) => {
  try {
    let { id } = req.params;
    let {
      name,
      short_description,
      long_description,
      image,
      startDate,
      endDate,
      finalAmount,
      ong,
      state,
      StateId,
      CategoryId,
    } = req.body;
    await putCampaign(
      id,
      name,
      short_description,
      long_description,
      image,
      startDate,
      endDate,
      finalAmount,
      ong,
      state,
      StateId,
      CategoryId
    );
    res.status(200).json(`The Campaign ${name} was successfully updated`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCampaignHandler,
  postCampaignHandler,
  putCampaignHandler,
};
