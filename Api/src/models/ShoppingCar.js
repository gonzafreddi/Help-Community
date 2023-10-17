const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("ShoppingCar", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    products: {
      type: DataTypes.ARRAY(DataTypes.STRING(10000)),
      allowNull: false
    },
    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
  });
};  