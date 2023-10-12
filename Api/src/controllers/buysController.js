const axios = require("axios");
const { Campaign, Category, Buys, State } = require("../db");
const { Op } = require("sequelize");

const getAllbuys = async function () {
  const allBuys = await Buys.findAll();
  const parsedBuys = allBuys.map((buy) => {
    const parsedProducts = JSON.parse(buy.products);

    // Replace the "products" property with the parsed array
    return {
      ...buy.dataValues, // Preserve other properties
      products: parsedProducts,
    };
  });

  return parsedBuys;
};

/* const postbuys = async (productId, userId, buyOut, totalAmount) => {
  const newBuy = await Buys.create({
    productId,
    userId,
    buyOut,
    totalAmount,
  });

  return newBuy;
}; */

module.exports = {
  getAllbuys,
  /* postbuys, */
};
