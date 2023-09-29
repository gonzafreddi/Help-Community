const { getAllCategory } = require("../controllers/categoryController");
  
  const getCategoryHandler = async (req, res) => {
   
    try {
      const result = await getAllCategory();
  
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = { getCategoryHandler};
  