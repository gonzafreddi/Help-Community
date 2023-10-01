const { postOng_donor } = require("../controllers/ongdonorController");
  
const postOng_donorHandler = (req, res) => {
  try {
    const result = postOng_donor(req, res);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error:error.message });
  }
};

module.exports = { postOng_donorHandler};