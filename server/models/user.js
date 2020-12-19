'use strict';
const {
  Model
} = require('sequelize');
const { hashSync } = require('bcryptjs')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Todo)
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "must be an email"
        }
      },
      unique: true
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate(instance) {
        instance.password = hashSync(instance.password, 10)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};