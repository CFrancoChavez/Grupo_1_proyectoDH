module.exports = function(sequelize, DataTypes){
    const User =sequelize.define('User',{
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false


        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        phone: {
            type: DataTypes.INTEGER(11),
            allowNull: false

        },
        password: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        avatar: {
            type: DataTypes.STRING(200),
            allowNull: false
        },

    },
    {

        // createdAt : 'created_at',
        // updatedAt :'updated_at'
        timestamps:false
    });
    return User
}