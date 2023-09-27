const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo//el modelo busca unificar los datos de la API y la BD
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('ong_donante', {
    id: {
      type: DataTypes.UUID,//identificador único
      defaultValue: DataTypes.UUIDV4,//UUID generado aleatoriamente
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cuit: {
      type: DataTypes.STRING(13),
      allowNull: true,
    },
    provincia: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    domicilio: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    páginaweb: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imagen: {
      type: DataTypes.STRING(500),
    },
    usuario_activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    usuario_tipo: {
      type: DataTypes.ENUM('ong', 'donante'),
      allowNull: false,
    },
    });
  };

