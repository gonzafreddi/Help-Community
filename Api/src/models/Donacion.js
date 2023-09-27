const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Donacion",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
      },
      importe: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }
    //    { timestamps: false }
  );
};
