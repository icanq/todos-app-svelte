'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    static associate(models) {
      Todo.belongsTo(models.User)
    }
  };
  Todo.init({
    title: DataTypes.STRING,
    status: DataTypes.STRING,
    due_date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};