module.exports = function(sequelize, DataTypes) {
    var Products = sequelize.define("products", {
        brand: {
            type: DataTypes.STRING,
            allowNull: true
        },
        productName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        ingredients: {
            type: DataTypes.STRING,
            allowNull: true
        },
        category: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    return Products;
};