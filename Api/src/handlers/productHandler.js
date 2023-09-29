const { getAllProducts } = require("../controllers/productController");

const getProductHandler = async (req, res) => {
  try {
    const result = await getAllProducts();

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getProductHandler };
