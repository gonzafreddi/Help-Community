const { ShoppingCar } = require("../db");
const getUserByEmail = require('./getUserByEmail');

const getShoppingCarController = async (req, res) => {
    const { email } = req.params;
    try {
        const userId = await getUserByEmail(email);
        const user = await ShoppingCar.findByPk(userId);
        res.json(user);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const addShoppinCarController = async (req, res) => {
    const { email, product } = req.body;
    const userId = await getUserByEmail(email);
    try {
        await ShoppingCar.create({
            userId,
            product,
            state
        });
        res.send('Shopping card create successfull');
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const editShoppingCarController = async (req, res) => {
    const { product, state } = req.body;
    const { id } = req.params;
    try {
        await ShoppingCar.update({
            product,
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
    addShoppinCarController,
    editShoppingCarController,
    getShoppingCarController,
    deleteShoppingCarController
};