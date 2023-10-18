const {
  postNodemailerController,
  postMailingController,
} = require("../controllers/nodemailerController");

const postNodemailerHandler = async (req, res) => {
  const { name, email } = req.body;

  try {
    await postNodemailerController(name, email);
    res.status(200).json(``);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postMailingHandler = async (req, res) => {
  const { subject, message } = req.body;

  try {
    await postMailingController(subject, message);
    res.status(200).json(``);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { postNodemailerHandler, postMailingHandler };
