const axios = require("axios");
const { Campaign, Category, Product, User, Buy, State } = require("../db");
const { Op } = require("sequelize");
//const Product = require("../models/Product");

const getAllUser = async function () {
  const rawArrayDB = await User.findAll({
    include: {
      model: Product,
      attributes: ["name"],
    },
  });
  return rawArrayDB;
};

const getUserByName = async function (name) {
  console.log(name);
  if (name) {
    //Insensitve Case
    console.log(name);
    const rawArrayDB = await User.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      include: {
        model: Product,
        attributes: ["name"],
      },
    });

    if (rawArrayDB.length > 0) return rawArrayDB;
    else throw new Error("User name not found");
  }
};

const postUser = async (
  name,
  email,
  image,
  userState,
  userAdmin,
  userSuperadmin,
) => {
  console.log(email);
  try {
    const newUser = await User.findOrCreate({
      where: { email },
    defaults: {
      name,
      image,
      userState,
      userAdmin,
      userSuperadmin,
      },
    });
    res.status(200).send(newUser)
  } catch (error) {
    console.log(error.message)
  }

//<<<<<<< HEAD
  const [newUser, created] = await User.findOrCreate({
    where: { email },
    defaults: {
      name,
      image,
      userState,
      userAdmin,
      userSuperadmin,
    },
  });

  return newUser;
  //const [newUser, created] = await User.findOrCreate({
  //  where: { email },
  //  defaults: {
  //    name,
  //    image,
  //    userState,
  //    userAdmin,
  //    userSuperadmin,
  //  },
  //});
  //return newUser;
//>>>>>>> c416c06372a5a92161d01affa56936941c78b06b
};

const updateUser = async (id, userState, userAdmin, userSuperadmin) => {
  const user = await User.findOne({ where: { id } });
  if (user) {
    await user.update({
      userState,
      userAdmin,
      userSuperadmin,
    });
  }
  return user;
};

const getUserByEmail = async function (email) {
  console.log(email);
  if (email) {
    
    console.log(email);
    const rawArrayDB = await User.findAll({
      where: {
        email: {
          [Op.iLike]: `%${email}%`,
        },
      },
      include: {
        model: Product,
        attributes: ["name"],
      },
    })
    return rawArrayDB;
    }
    
  };

module.exports = {
  postUser,
  getAllUser,
  getUserByName,
  updateUser,
  getUserByEmail
};
