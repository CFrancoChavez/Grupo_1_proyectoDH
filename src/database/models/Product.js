module.exports = function(sequelize, DataTypes){
    const Product =sequelize.define('Product',{
        id : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        discount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING(50),
            allowNull: false

        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING(200),
            allowNull: false
        },

    },{

        // createdAt : 'created_at',
        // updatedAt :'updated_at'
        timestamps : false
    });
    return Product
}