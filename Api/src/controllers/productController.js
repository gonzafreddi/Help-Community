const axios = require("axios");
const { Product, Ong_donor } = require("../db");
const {
  cleanArrayProductDB,
  cleanArrayProductApi,
} = require("../../helpers/productHelper");
const products = require("../../dataApi/products");

const getAllProducts = async function () {
  const rawArrayDB = await Product.findAll(/* {
    include: {
      model: Ong_donor,
      attributes: ["name"],
      through: { attributes: [] },
    },
    // Habilitar cuando esté el getAllOngDonor()
  } */);

  const productsDB = cleanArrayProductDB(rawArrayDB);

  /* const rawArrayApi = (await axios.get(`https://fakestoreapi.com/products`))
    .data; */
  const productsApi = cleanArrayProductApi(products);

  return [...productsDB, ...productsApi];
};

const postProduct = async (name, description, image, price, category) => {
  const newProduct = await Product.create({
    name,
    description,
    image,
    price,
    category,
  });
  //await newProduct.setProducts(ongDonorId); // Todavia falta hacer el getAllOngDonor()

  return newProduct;
};

module.exports = {
  getAllProducts,
  postProduct,
};
