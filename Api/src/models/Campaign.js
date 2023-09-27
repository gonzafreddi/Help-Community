const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Campaign",
        {
            id: {
                type: DataTypes.UUID,
                primarykey: true,
                defaultValue: UUIDV4,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            image: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            startDate: {
                type: DataTypes.DATE,
                allowNull: false,

            },
            endDate: {
                type: DataTypes.DATE,
                allowNull: false,

            },
            finalAmount: {
                type: DataTypes.DECIMAL,
                allowNull: true,
            },
            state: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
        })
}