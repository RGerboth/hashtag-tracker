const DataTypes = require("sequelize");

module.exports = {
  up: (queryInterface) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.createTable(
          "users",
          {
            id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
            },
            username: {
              type: DataTypes.STRING,
              allowNull: false,
              unique: true,
            },
            password: {
              type: DataTypes.STRING,
              primaryKey: false,
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
        queryInterface.dropTable("users", { force: true }),
      ]);
    });
  },
};

