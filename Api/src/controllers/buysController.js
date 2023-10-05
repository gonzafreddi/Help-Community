const axios = require("axios");
const { Campaign, Category, Buy, State } = require("../db");
const { Op } = require("sequelize");


const getAllbuys = async function () {
  
};


const postbuys = async (
    productId,
    userId,
    buyOut,
    totalAmount,
) => {
  const newBuy = await Buy.create({
    productId,
    userId,
    buyOut,
    totalAmount,
  });
  
  return newBuy;
};

module.exports = {
  getAllbuys,
  postbuys,
};





