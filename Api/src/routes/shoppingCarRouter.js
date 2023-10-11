const { Router } = require("express");

const { 
    addShoppinCarHandler,
    editShoppingCarHandler,
    getShoppingCarHandler,
    deleteShoppingCarHandler } = require('../handlers/shoppingCarHandler');
    
const shoppingCarRouter = Router();

shoppingCarRouter.get("/:email", getShoppingCarHandler);
shoppingCarRouter.post("/", addShoppinCarHandler);
shoppingCarRouter.put("/:id", editShoppingCarHandler);
shoppingCarRouter.delete("/:id", deleteShoppingCarHandler);

module.exports = shoppingCarRouter;