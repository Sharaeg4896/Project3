module.exports = function(sequelize, DataTypes) {
    var HairTips = sequelize.define("HairTips", {
        tips: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,

            
        },
        summary: {
            type: DataTypes.TEXT,
            allowNull: true,
            
        }
    });
    
    return HairTips;
}; 