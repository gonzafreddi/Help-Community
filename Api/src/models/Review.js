const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Review", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    rating: {
      type: DataTypes.INTEGER,
        validate: {
          min: 0,
          max: 5
        },
      allowNull: false,
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: true,
    },   
})};