const { getAllbuys, postbuys  } = require("../controllers/buysController");
  
  const getbuysHandler = async (req, res) => {
   
    try {
      const result = await getAllbuys();
  
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  const postbuysHandler = async (req, res) => {
    const {
      productId,
      userId,
      buyOut,
      totalAmount,
    } = req.body;
  
    try {
      await postbuys(productId, userId, buyOut, totalAmount,);

      res.status(200).json(`The Buy was successfully created`);
    } catch (error) {
      console.log(error)
      res.status(400).json({ error: error.message });
    }
  };

  
  module.exports = { getbuysHandler, postbuysHandler };
  