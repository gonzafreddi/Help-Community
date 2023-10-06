const { Product } = require("../src/db");

const cleanArrayProductDB = (rawArrayDB) => {
  return rawArrayDB.flatMap((category) => {
    const categoryName = category.name;
    return category.Products.map((product) => ({
      ...product.toJSON(),
      category: categoryName,
      created: true,
    }));
  });
};

const cleanArrayProductApi = (productsApi) =>
  productsApi.map((productData) => {
    return {
      id: productData.id,
      name: productData.title,
      price: productData.price,
      description: productData.description,
      image: productData.thumbnail,
      brand: productData.brand,
      stock: productData.stock,
      rating: productData.rating,
      state: false,
      category: productData.category,
      created: false,
    };
  });

module.exports = {
  cleanArrayProductApi,
  cleanArrayProductDB,
};
