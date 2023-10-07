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
      validate:{ min: 1, max: 5},
      allowNull: false
    },
    dateReview: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
