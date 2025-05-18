"use strict";

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("sqlite:" + process.env.SQLITE);

const Todo = sequelize.define("todos", {
  title: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },

  description: DataTypes.STRING,
  priority: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0,
  },

  isDone: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});
//sequelize.sync() // CREATE TABLE IF NOT EXISTS
// sequelize.sync({ force: true }) // DROP TABLE & CREATE TABLE IF NOT EXISTS
// sequelize.sync({ alter: true }) // TO BACKUP & DROP TABLE & CREATE TABLE IF NOT EXISTS & FROM BACKUP

sequelize
  .authenticate()
  .then(() => console.log("* DB Connected."))
  .catch(() => console.log("* DB Not Connected."));

module.exports = Todo;
