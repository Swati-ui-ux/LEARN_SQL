const sequelize = require("../utils/connection_db")
const {DataTypes} = require("sequelize")


const Department = sequelize.define("department", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey :true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        
    }

})

module.exports =Department