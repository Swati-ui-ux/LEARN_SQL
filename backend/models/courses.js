const { DataTypes } = require("sequelize")

const sequelize = require("../utils/connection_db")

const Courses = sequelize.define("courses", {

    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement:true
    }
    ,
    name: {
        type: DataTypes.STRING,
        allowNull:false
    }
})

module.exports = Courses