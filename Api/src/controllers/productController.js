const axios = require("axios");
const {
  Product,
  Campaign,
  Category,
  Donation,
  Ong_donor,
  State,
} = require("../db");
const { Op } = require("sequelize");

const ong = require("../../dataApi/ong");

const getAllProducts = async function () {
  /* const rawArrayDB = await Drivers.findAll({
    include: {
      model: Teams,
      attributes: ["name"],
      through: { attributes: [] }, //Esto excluye el through model, que traía por default la tabla "Drivers_Teams".
    }, //Devuelve un array de objetos, si se quiere mostrar solo como un objeto, hay que hacer un map.
  });
  const dataBaseDrivers = cleanArrayDB(rawArrayDB); */

  console.log("hola");

  const rawArrayApi = (await axios.get(`https://fakestoreapi.com/products`))
    .data;

  const productsApi = rawArrayApi.map((elem) => {
    return {
      id: elem.id,
      name: elem.title,
      price: elem.price,
      description: elem.description,
      image: elem.image,
      category: elem.category,
    };
  });

  return productsApi;
};

module.exports = {
  getAllProducts,
};
