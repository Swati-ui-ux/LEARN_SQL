const {  DataTypes } = require("sequelize")
const sequalize = require("../utils/connection_db")
const Users = sequalize.define("users",
{
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
         allowNull:false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    age: {
    type:DataTypes.INTEGER,
    allowNull:false,
    }
})


module.exports = Users