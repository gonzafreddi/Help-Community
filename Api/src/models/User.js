const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userState: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    userType: {
      type: DataTypes.ENUM('user', 'admin'),
      allowNull: false,
      defaultValue: "user"
    },
  });
};