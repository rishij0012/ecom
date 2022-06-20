'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      validate: {
        len: [5,20], 
      },
    },
    email: {
      type: DataTypes.STRING ,
      validate: {
        isEmail: true ,
      },
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate(async (user , option) => {
    const encryptesPass = bcrypt.hashSync(user.password , 10) ;
    user.password = encryptesPass ;
  });
  
  return User;
};