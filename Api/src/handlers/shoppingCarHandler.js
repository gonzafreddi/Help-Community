const {     
    addShoppinCarController,
    editShoppingCarController,
    getShoppingCarController,
    deleteShoppingCarController } = require('../controllers/shoppingCarController');

const addShoppinCarHandler = async (req, res) => {
    try {
      const result = await addShoppinCarController();
  
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

const editShoppingCarHandler = async (req, res) => {
    try {
        const result = await editShoppingCarController();
    
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
};

const getShoppingCarHandler = async (req, res) => {
    try {
        const result = await getShoppingCarController();
    
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
};

const deleteShoppingCarHandler = async (req, res) => {
    try {
        const result = await deleteShoppingCarController();
    
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
};

module.exports = {
    addShoppinCarHandler,
    editShoppingCarHandler,
    getShoppingCarHandler,
    deleteShoppingCarHandler
};