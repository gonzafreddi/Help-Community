const { ShoppingCar } = require("../db");
const getUserByEmail = require('./getUserByEmail');

const getShoppingCarController = async (req, res) => {
    const { email } = req.params;
    try {
        const userId = await getUserByEmail(email);
        console.log(userId);
        const user = await ShoppingCar.findAll({
            where: {
                userId,
            }
        });
        if(user.length > 1) res.json(user);
        res.send("No data exists");
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const addShoppingCarController = async (req, res) => {
    const { email, products, state } = req.body;
    const userId = await getUserByEmail(email);
    try {
        await ShoppingCar.create({
            userId,
            products,
            state
        });
        res.send('Shopping card create successfull');
    } catch (error) {
        res.status(400).json(error.message);
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
        res.send('Shopping card add successfull');
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const deleteShoppingCarController = async (req, res) => {
    const { id } = req.params;
    try {
        await ShoppingCar.destroy({
            where: {
                id,
            }
        });
        res.send('Shopping card deleted successfull');
    } catch (error) {
        res.status(400).json(error.message);
    }
};

module.exports = {
    addShoppingCarController,
    editShoppingCarController,
    getShoppingCarController,
    deleteShoppingCarController
};