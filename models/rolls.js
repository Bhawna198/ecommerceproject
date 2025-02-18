const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Roll = sequelize.define("Roll", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  type: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Roll;