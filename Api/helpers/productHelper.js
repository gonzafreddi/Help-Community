const cleanArrayProductDB = (productsDB) =>
  productsDB.map((product) => {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.image,
      category: product.category,
      /* donor: stringAll(product.ongDonorId), */
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
      image: product.image,
      category: product.category,
      created: false,
    };
  });

const stringAll = (Donors) => {
  const teamsNames = Donors.map((donor) => donor.name);
  return teamsNames.join(", ");
};

module.exports = {
  cleanArrayProductApi,
  cleanArrayProductDB,
  stringAll,
};
