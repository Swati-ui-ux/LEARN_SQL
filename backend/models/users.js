const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection_db");

const Users = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
   
    password: {
  type: DataTypes.STRING,
  allowNull: false
},
    role: {
    type: DataTypes.ENUM("user", "admin"),
    defaultValue: "user",
    allowNull: false
  }
}, {
    freezeTableName: true
});

module.exports = Users;