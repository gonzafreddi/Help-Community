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
    image: {
      type: DataTypes.STRING,
      allowNull: true,},
    userState: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    userAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    userSuperadmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
  });
};