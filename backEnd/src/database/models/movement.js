'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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