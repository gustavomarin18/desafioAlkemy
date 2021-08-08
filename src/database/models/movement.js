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
    concept: { type: DataTypes.STRING, allowNull: false },
    amount:{ type: DataTypes.INTEGER, allowNull: false },
    date: DataTypes.DATE,
    type: { type: DataTypes.STRING, allowNull: false },
  }, {
    sequelize,
    modelName: 'Movement',
  });
  return Movement;
};