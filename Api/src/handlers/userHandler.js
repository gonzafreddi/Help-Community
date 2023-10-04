const { postUser, getAllUser, getUserByName, } = require("../controllers/userController");
  
const getUserHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const result = name
      ? await getUserByName(name)
      : await getAllUser();

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postUserHandler = async (req, res) => {
  const {
    name,
    email,
  } = req.body;

  try {
    await postUser(
    name,
    email,
    );
    res.status(200).json(`The User ${name} was successfully created`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { postUserHandler, getUserHandler
};