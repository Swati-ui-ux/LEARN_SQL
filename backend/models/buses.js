const sequelize = require("../utils/connection_db")
const {DataTypes} = require("sequelize")


const Buses = sequelize.define("buses", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey :true,
    },
    busNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    }, totalSeats: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    }, availableSeats: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    }

})



module.exports =Buses