const { DataTypes } = require("sequelize")

const sequelize = require("../utils/connection_db")

const StudentCourses = sequelize.define("studentCourses", {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey:true
    }

})


module.exports = StudentCourses