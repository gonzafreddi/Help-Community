const {
  getAllProducts,
  postProduct,
} = require("../controllers/productController");

const getProductHandler = async (req, res) => {
  try {
    const result = await getAllProducts();

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postProductHandler = async (req, res) => {
  const { name, description, image, price, category, CategoryProductId } =
    req.body;

  try {
    await postProduct(
      name,
      description,
      image,
      price,
      category,
      CategoryProductId
    );
    res.status(200).json(`The Product ${name} was successfully created`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getProductHandler, postProductHandler };
