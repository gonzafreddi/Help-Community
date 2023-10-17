const {     
    addShoppingCarController,
    editShoppingCarController,
    getShoppingCarController,
    deleteShoppingCarController } = require('../controllers/shoppingCarController');

const addShoppingCarHandler = async (req, res) => {
    
    let email;
    let state= false;
    let products= [];
    try {
      
      const parsedBody = req.body;
      if (Array.isArray(parsedBody)) {
        parsedBody.forEach(item => {
          if (item.email) {
            email = item.email;
            // Manejar el objeto con la propiedad 'email'
            console.log(`Email: ${email}`);
          } else if (item.product) {
            // Manejar el objeto con la propiedad 'product'
            //const { id, name, description, image, price, category } = item.product;
            products.push(item.product);
            //const { quantity, precio } = item;
            //console.log(`Producto: ${name}, Cantidad: ${quantity}`);
            //console.log(`Descripción: ${description}`);
            //console.log(`Precio: ${price}, Categoría: ${category}`);
            //console.log(`ID: ${id}`);
            //console.log(`Imagen: ${image}`);
            //console.log(`Precio: ${precio}`);
            //console.log('------------------');
          } else {
            console.error("values no es un array");
            // Manejar otros objetos si es necesario
          }
        });
      
      }
      
      const result = await addShoppingCarController( email, products, state);
      res.status(200).json(result);


    } catch (error) {
      res.status(400).json({ error: error.message });
      console.error('Error al analizar el cuerpo del JSON:', error);
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