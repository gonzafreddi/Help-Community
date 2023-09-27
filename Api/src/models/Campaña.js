const {DataTypes, UUIDV4} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "Campaña",
        {
            Id:{
                type: DataTypes.UUID,
                primarykey: true,
                defaultValue: UUIDV4,
            },

            Nombre:{
                type: DataTypes.STRING,
                allowNull: false,
            },

            Descripcion:{
                type: DataTypes.STRING,
                allowNull: false,
            },

            Imagen:{
                type: DataTypes.STRING,
                allowNull: true,
            },

            Fecha_Inicio:{
                type: DataTypes.DATE,
                allowNull:false,

            },

            Fecha_Finalizacion:{
                type: DataTypes.DATE,
                allowNull:false,

            },

            Objetivo_Monetario:{
                type: DataTypes.DECIMAL,
                allowNull: true,
            },
            Estado:{
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
        }








    )





}