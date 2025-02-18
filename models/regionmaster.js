const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const State = require("./state");

const RegionMaster = sequelize.define("RegionMaster", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  stateId: { type: DataTypes.INTEGER, references: { model: State, key: "id" } },
});

State.hasMany(RegionMaster, { foreignKey: "stateId" });
RegionMaster.belongsTo(State, { foreignKey: "stateId" });

module.exports = RegionMaster;