const axios = require("axios");
const { Product, CategoryProduct } = require("../db");
const {
  cleanArrayProductDB,
  cleanArrayProductApi,
} = require("../../helpers/productHelper");
const products = require("../../dataApi/products");

const getAllProducts = async function () {
  const rawArrayDB = await CategoryProduct.findAll({
    include: {
      model: Product,
      attributes: ["name", "price", "description", "image", "state", "created"],
      through: { attributes: [] },
    },
    // Habilitar cuando esté el getAllOngDonor()
  });

  const productsDB = cleanArrayProductDB(rawArrayDB);

  /* const rawArrayApi = (await axios.get(`https://fakestoreapi.com/products`))
    .data; */
  const productsApi = cleanArrayProductApi(products);

  return [...productsDB, ...productsApi];
};

const postProduct = async (
  name,
  description,
  image,
  price,
  brand,
  stock,
  rating,
  state,
  CategoryProductId
) => {
  const newProduct = await Product.create({
    name,
    description,
    image,
    price,
    brand,
    stock,
    rating,
    state,
    CategoryProductId,
  });
  //await newProduct.setProducts(ongDonorId); // Todavia falta hacer el getAllOngDonor()

  return newProduct;
};

module.exports = {
  getAllProducts,
  postProduct,
};
