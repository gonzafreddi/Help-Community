const { Router } = require("express");

const { 
    addShoppingCarHandler,
    editShoppingCarHandler,
    getShoppingCarHandler,
    deleteShoppingCarHandler } = require('../handlers/shoppingCarHandler');
    
const shoppingCarRouter = Router();

shoppingCarRouter.get("/:email", getShoppingCarHandler);
shoppingCarRouter.post("/", addShoppingCarHandler);
shoppingCarRouter.put("/:id", editShoppingCarHandler);
shoppingCarRouter.delete("/:id", deleteShoppingCarHandler);

module.exports = shoppingCarRouter;