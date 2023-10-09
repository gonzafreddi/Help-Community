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
  ) => {
  const newUser = await User.findOrCreate({
      where: {
            name: User.name,
            email: User.email,
        }   
  });
  
  return newUser;
};

  module.exports = {
    postUser,
    getAllUser,
    getUserByName,
    };