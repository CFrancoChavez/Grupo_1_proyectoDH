module.exports = function(sequelize, DataTypes){
    const productsUser =sequelize.define('productsUser',{
        id : {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        usersid : {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: false,
            foreignKey: true,
            allowNull: false
        },
        productsid : {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: false,
            foreignKey: true,
            allowNull: false
        },


    },{

        createdAt : 'created_at',
        updatedAt :'updated_at'
    });
    return productsUser
}