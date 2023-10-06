const {
  getAllProducts,
  postProduct,
  getProductByName,
} = require("../controllers/productController");

const getProductHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const result = name ? await getProductByName(name) : await getAllProducts();

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postProductHandler = async (req, res) => {
  const {
    name,
    description,
    image,
    price,
    brand,
    stock,
    rating,
    state,
    CategoryProductId,
  } = req.body;

  console.log(CategoryProductId);
  try {
    await postProduct(
      name,
      description,
      image,
      price,
      brand,
      stock,
      rating,
      state,
      CategoryProductId
    );
    res.status(200).json(`The Product ${name} was successfully created`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getProductHandler, postProductHandler };
