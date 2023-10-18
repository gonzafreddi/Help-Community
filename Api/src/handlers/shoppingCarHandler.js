const {     
    addShoppingCarController,
    editShoppingCarController,
    getShoppingCarController,
    deleteShoppingCarController } = require('../controllers/shoppingCarController');

    const addShoppingCarHandler = async (req, res) => {
      // let email = req.body[1].email
      let state = false;
      // let products = []
      try {
          const body = req.body;
          // if (Array.isArray(parsedBody)) {
          //     parsedBody.forEach(item => {
          //         if (item.email) {
          //             email = item.email;
          //             console.log(`Email: ${email}`);
          //         } else if (item.product) {                   
          //             products.push(item);
          //             console.log("la listitaaa", products)
          //             // Resto del código para procesar la información del producto
          //         } else {
          //             console.error("values no es un array");
          //         }
          //     });
          // }
          const result = await addShoppingCarController(body, state);
          console.log("resuuuuuult",result)
          res.status(200).send(result);
      } catch (error) {
          res.status(400).json({ error: error.message });
          console.error('Error al analizar el cuerpo del JSON:', error);
      }
  };
  
const editShoppingCarHandler = async (req, res) => {
    try {
        const result = await editShoppingCarController(req);
    
        res.status(200).json(result);
      } catch (error) {
        console.log(error)
        res.status(400).send(error.message );
      }
};


const getShoppingCarHandler = async (req, res) => {
    try {
        const { email } = req.params;
        const result = await getShoppingCarController(email);
    
        res.status(200).send(result);
      } catch (error) {
        res.status(400).send({ error: error.message });
      }
};

const deleteShoppingCarHandler = async (req, res) => {
    try {
        const result = await deleteShoppingCarController(req.params.id);
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