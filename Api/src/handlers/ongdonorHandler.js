const { postOng_donor } = require("../controllers/ongdonorController");
  
const getOng_donorHandler = async (req, res) => {
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

//const postOng_donorHandler = (req, res) => {
//  try {
//   const result = postOng_donor(req, res);
//    res.status(200).json(result);
//  } catch (error) {
//    res.status(400).json({ error:error.message });
//  }
//};
const postOng_donorHandler = async (req, res) => {
  const {
    name,
    cuit,
    adddres,
    email,
    webSite,
    image,
    userType,
    StateId,
    ongDonorId,
    CategoryId,
  } = req.body;

  try {
    await postOng_donor(
    name,
    cuit,
    adddres,
    email,
    webSite,
    image,
    userType,
    //StateId,
    //DonationId,
    //CategoryId,
    );
    res.status(200).json(`The Ong ${name} was successfully created`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = { postOng_donorHandler};