const {Buys} = require("../db");

const createBuys = async(allData) => {
        console.log(allData);
        //allData = [[...allData], [userUuId]]  
        try {
            const products= allData[0]
        let userId= allData[1]
        userId = userId[0]

        const createBuy = await Buys.create({
            userId,
            products,
        })
        return createBuy
        } catch (error) {
        console.log(error.message)    
        }
};

module.exports = createBuys;