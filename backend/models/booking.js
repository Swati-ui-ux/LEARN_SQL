const sequelize = require("../utils/connection_db")
const {DataTypes} = require("sequelize")
const Booking = sequelize.define("booking", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true,
    },
    seatNumber: {
        type: DataTypes.INTEGER,
        allowNull:false,
    }

})
module.exports = Booking