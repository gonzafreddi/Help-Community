const {Buys} = require("../db");

const createBuys = async(allData) => {
        console.log(allData);
        //allData = [[...allData], [userUuId]]  
        const products= allData[0]
        const userId= allData[1]
        const createBuy = await Buys.create(
            userId,
            products,
       )
};

module.exports = createBuys;