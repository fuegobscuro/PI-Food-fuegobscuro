const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('recipe', {
    
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,
      // defaultValue: '',
      // allowNull: false,
    },

    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
      
    healthScore: {
      type: DataTypes.STRING,
      // defaultValue: 0,
      // allowNull: false,
    },

    steps: {
      type: DataTypes.TEXT,
      // allowNull: false,
    },

    createdInDb: {
      type : DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    }
  },
  {
    timestamps: false,
  });
};