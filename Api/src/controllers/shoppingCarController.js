const { ShoppingCar } = require("../db");
const getUserByEmail = require('./getUserByEmail');

const getShoppingCarController = async (email) => {
    try {
        const userId = await getUserByEmail(email);
        const cart = await ShoppingCar.findAll({
            where: {
                userId,
            }
        });
        return cart;
    } catch (error) {
        console.log(error.message);
        throw error;
    }
};
const addShoppingCarController = async (body, state) => {
    try {
        console.log(body);
        let products = body[0];
        const email = body[1].email;
        const userId = await getUserByEmail(email);
        const copy = await getShoppingCarController(email);
        // deleteShoppingCarController(email)

        console.log("productos nuevos", products);
        console.log("carrito copy", copy);
        console.log(userId)
        // Combinar los productos existentes y los nuevos productos
        let combinedProducts = {};

        if (copy) {
            combinedProducts = [{ ...copy.products, ...products }];
        } else {
            combinedProducts = [products];
        }

        console.log("productos combinados", combinedProducts);

        // Crear un nuevo carrito con los productos combinados
        const newShoppingCar = await ShoppingCar.create({
                userId: userId,
                products: combinedProducts,
                state: state,
        });
        console.log("nuevo carrito", newShoppingCar);
        return newShoppingCar;
    } catch (error) {
        console.log(error.message);
        throw error;
    }
};


const editShoppingCarController = async (req, res) => {
    const { products, state } = req.body;
    const { id } = req.params;
    try {
        await ShoppingCar.update({
            products,
            state
        }, {
            where: {
                id,
            }
        });
        res.send('Shopping cart updated successfully');
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const deleteShoppingCarController = async (email) => {
    const userId = await getUserByEmail(email);
    try {
        await ShoppingCar.destroy({
            where: {
                userId: userId
            }
        });
        return "eliminado";
    } catch (error) {
        console.log(error.message);
        throw error;
    }
};

module.exports = {
    addShoppingCarController,
    editShoppingCarController,
    getShoppingCarController,
    deleteShoppingCarController
};
