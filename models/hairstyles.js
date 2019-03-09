module.exports = function(sequelize, DataTypes) {
    var Hairstyles = sequelize.define("hairstyles", {
        hairstyle: {
            type: DataTypes.STRING,
            allowNull: true
        },
        products: {
            type: DataTypes.STRING,
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