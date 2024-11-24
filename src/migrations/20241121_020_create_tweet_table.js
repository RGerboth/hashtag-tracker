const DataTypes = require("sequelize");

module.exports = {
  up: (queryInterface) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.createTable(
          "tweets",
          {
            id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
            },
            text: {
              type: DataTypes.TEXT,
              allowNull: false,
              unique: true,
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
        queryInterface.dropTable("tweets", { force: true }),
      ]);
    });
  },
};
