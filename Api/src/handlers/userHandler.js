const { postUser, getAllUser, getUserByName, updateUser, getUserByEmail } = require("../controllers/userController");
  
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
    image,
    userState,
    userAdmin,
    userSuperadmin,
  } = req.body;
  // console.log(email);
  try {
    if (image !== undefined) {
      await postUser(
        name,
        email,
        image,
        userState,
        userAdmin,
        userSuperadmin
      );
    } else {
      await postUser(
        name,
        email,
        null, // O cualquier otro valor por defecto si 'image' es opcional
        userState,
        userAdmin,
        userSuperadmin
      );
    }
    res.status(200).json(`The User ${name} was successfully created`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const putUserHandler = async (req, res) => {
  const { id } = req.params;
  const { userState, userAdmin, userSuperadmin } = req.body;
  try {
    const updatedUser = await updateUser(id, userState, userAdmin, userSuperadmin);
    if (updatedUser) {
      res.status(200).json(`The User ${updatedUser.name} was successfully updated`);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserEmailHandler = async (req, res) => {
  const { email } = req.query;
  try {
    const result = email
      ? await getUserByEmail(email)
      : await getAllUser();

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = { postUserHandler, getUserHandler, putUserHandler, getUserEmailHandler
};