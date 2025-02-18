const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Country = sequelize.define("Country", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Country;
