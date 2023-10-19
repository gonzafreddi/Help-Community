const {     
    addShoppingCarController,
    editShoppingCarController,
    getShoppingCarController,
    deleteShoppingCarController } = require('../controllers/shoppingCarController');

const addShoppingCarHandler = async (req, res) => {
    try {
      const result = await addShoppingCarController(req, res);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

const editShoppingCarHandler = async (req, res) => {
    try {
        const result = await editShoppingCarController(req, res);
    
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
};

const getShoppingCarHandler = async (req, res) => {
    try {
        const result = await getShoppingCarController(req, res);
    
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
};

const deleteShoppingCarHandler = async (req, res) => {
    try {
        const result = await deleteShoppingCarController(req, res);
    
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
};

module.exports = {
    addShoppingCarHandler,
    editShoppingCarHandler,
    getShoppingCarHandler,
    deleteShoppingCarHandler
};