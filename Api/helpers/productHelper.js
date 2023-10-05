const cleanArrayProductDB = (productsDB) =>
  productsDB.map((product) => {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.image,
      category: product.category,
      state: false,
      created: true,
    };
  });

const cleanArrayProductApi = (productsApi) =>
  productsApi.map((product) => {
    return {
      id: product.id,
      name: product.title,
      price: product.price,
      description: product.description,
      stock: product.stock,
      brand: product.brand,
      rating: product.rating,
      image: product.thumbnail,
      category: product.category,
      state: false,
      created: false,
    };
  });

const stringAll = (category) => {
  const categoryName = category.map((categ) => categ.name);
  return categoryName.join(", ");
};

module.exports = {
  cleanArrayProductApi,
  cleanArrayProductDB,
  stringAll,
};
