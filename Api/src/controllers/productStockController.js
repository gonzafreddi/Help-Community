const { Product } = require("../db");

const productStockController = async (items) => {
  console.log(items);
  try {
    items.map(async (item) => {
      const quantityActual = await Product.findAll({
        where: { id: item.id },
        attributes: ["stock"],
      });
      console.log(quantityActual);
      const finalStock = quantityActual[0].dataValues.stock - item.quantity;
      console.log("STOCK UPDATE", finalStock);
      await Product.update(
        {
          stock: finalStock,
        },
        { where: { id: item.id } }
      );
    });
  } catch (error) {
    console.error("Error al actualizar el stock:", error.message);
  }
};

module.exports = productStockController;
