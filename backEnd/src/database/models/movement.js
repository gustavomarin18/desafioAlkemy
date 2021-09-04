'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movement extends Model {
 
    static associate(models) {
    
    }
  };
  Movement.init({
    concept: { type: DataTypes.STRING, allowNull: true },
    amount:{ type: DataTypes.INTEGER, allowNull: true },
    date: DataTypes.DATE,
    type: { type: DataTypes.STRING, allowNull: true },
  }, {
    sequelize,
    modelName: 'Movement',
  });
  return Movement;
};