module.exports = function(sequelize, DataTypes) {
    var HairTips = sequelize.define("HairTips", {
        tips: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,

            
        },
        summary: {
            type: DataTypes.TEXT,
            allowNull: true,
            
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    
    return HairTips;
}; 