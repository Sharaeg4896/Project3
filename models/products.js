module.exports = function(sequelize, DataTypes) {
    var Products = sequelize.define("Products", {
        brand: {
            type: DataTypes.STRING,
            allowNull: true
        },
        productName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        ingredients: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        category: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    return Products;
};