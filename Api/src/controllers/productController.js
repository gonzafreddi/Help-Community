const { Product, CategoryProduct } = require("../db");
const {
  cleanArrayProductDB,
  cleanArrayProductApi,
} = require("../../helpers/productHelper");
const products = require("../../dataApi/products");

const getAllProducts = async function () {
  const rawArrayDB = await CategoryProduct.findAll({
    include: [
      {
        model: Product,
        attributes: [
          "id",
          "name",
          "price",
          "description",
          "image",
          "brand",
          "stock",
          "rating",
          "state",
        ],
      },
    ],
  });

  const productsDB = cleanArrayProductDB(rawArrayDB);

  const productsApi = cleanArrayProductApi(products);

  return [...productsDB, ...productsApi];
};

const getProductByName = async function (name) {
  if (name) {
    //Insensitve Case
    const rawArrayDB = await CategoryProduct.findAll({
      include: [
        {
          model: Product,
          attributes: [
            "id",
            "name",
            "price",
            "description",
            "image",
            "brand",
            "stock",
            "rating",
            "state",
          ],
        },
      ],
    });

    const productDB = [];

    rawArrayDB.forEach((category) => {
      category.Products.forEach((product) => {
        if (product.name.toLowerCase().includes(name.toLowerCase())) {
          productDB.push({
            ...product.dataValues,
            category: category.name,
            created: true,
          });
        }
      });
    });

    const productApi = cleanArrayProductApi(products);
    const filteredApi = productApi.filter((product) => {
      return product.name.toLowerCase().includes(name.toLowerCase()); // Busqueda inexacta
    });
    if (filteredApi.length > 0 || productDB.length > 0)
      return [...filteredApi, ...productDB];
    else throw new Error("Product name not found");
  }
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

  return newProduct;
};

module.exports = {
  getAllProducts,
  postProduct,
  getProductByName,
};
