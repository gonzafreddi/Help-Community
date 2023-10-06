const { getAllCategoryProduct } = require("../controllers/categoryProductController");
  
  const getCategoryProductHandler = async (req, res) => {
    //console.log("Entre a categoryProductHandler");
    try {
      const result = await getAllCategoryProduct();
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = { getCategoryProductHandler};