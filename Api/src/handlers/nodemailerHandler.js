const postNodemailerController = require("../controllers/nodemailerController");

const postNodemailerHandler = async (req, res) => {
  const { name, email } = req.body;

  try {
    await postNodemailerController(name, email);
    res.status(200).json(``);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postNodemailerHandler;
