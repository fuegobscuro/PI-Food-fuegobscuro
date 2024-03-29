const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "recipe",
    {
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
        allowNull: false,
      },

      summary: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      healthScore: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      steps: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false,
      },

      createdInDb: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    },
  );
};
