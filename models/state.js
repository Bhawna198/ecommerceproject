const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Country = require("./country");

const State = sequelize.define("State", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  countryId: { type: DataTypes.INTEGER, references: { model: Country, key: "id" } },
});

Country.hasMany(State, { foreignKey: "countryId" });
State.belongsTo(Country, { foreignKey: "countryId" });

module.exports = State;
