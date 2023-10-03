const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Buys", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    //amountBuys: {
      //          buy:{
        //            type: DataTypes.STRING,
          //          allowNull: false,},
                
            //    quantityProduct: {
              //          type: DataTypes.INTEGER,
                //        allowNull: false,
                  //    },
    //},
   
  });
};
