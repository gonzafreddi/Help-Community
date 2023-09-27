const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('ong_donor', {
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
    cuit: {
      type: DataTypes.STRING(13),
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    webSite: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING(500),
    },
    user: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    userType: {
      type: DataTypes.ENUM('ong', 'donante'),
      allowNull: false,
    },
  });
};