const { getAllState } = require("../controllers/stateController");
  
  const getStateHandler = async (req, res) => {
   
    try {
      const result = await getAllState();
  
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = { getStateHandler };
  