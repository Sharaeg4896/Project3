module.exports = function(sequelize, DataTypes) {
    var Hairstyles = sequelize.define("Hairstyles", {
        hairstyle: {
            type: DataTypes.STRING,
            allowNull: true
        },
        products: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        youtuberName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        youtubeURL: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    
    return Hairstyles;
}; 