const DataTypes = require("sequelize");

module.exports = {
  up: (queryInterface) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.createTable(
          "hashtags",
          {
            id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
            },
            tag: {
              type: DataTypes.STRING,
              allowNull: false,
              unique: true,
            },
            count: {
              type: DataTypes.INTEGER,
            },
            created_at: {
              allowNull: false,
              type: DataTypes.DATE,
              defaultValue: DataTypes.fn("now"),
            },
            updated_at: {
              allowNull: false,
              type: DataTypes.DATE,
              defaultValue: DataTypes.fn("now"),
            },
            deleted_at: {
              type: DataTypes.DATE,
              defaultValue: null,
            },
          },
          { transaction: t }
        ),
      ]);
    });
  },
  down: (queryInterface) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.dropTable("hashtags", { force: true }),
      ]);
    });
  },
};
