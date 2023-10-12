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



const getAllBuysForUser = async function (userId) {
  try {
    const allBuys = await Buys.findAll({
      where: { userId: userId }, // Filtra por el ID de usuario
    });
    const parsedBuys = allBuys.map((buy) => {
    const parsedProducts = JSON.parse(buy.products);

      // Reemplaza la propiedad "products" con el array parseado
      return {
        ...buy.dataValues, // Preserva otras propiedades
        products: parsedProducts,
      };
    });
    return parsedBuys;
  } catch (error) {
    console.error('Error al buscar las compras del usuario:', error);
    throw error;
  }
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
  getAllBuysForUser
  /* postbuys, */
};
