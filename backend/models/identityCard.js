const { Sequelize, DataTypes, Model } = require("sequelize")

const sequelize = require("../utils/connection_db")

const IdentityCard =  sequelize.define("identityCard", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false,
        autoIncrement:true,
    },
    cardNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique:true,
       
    }

})


module.exports = IdentityCard