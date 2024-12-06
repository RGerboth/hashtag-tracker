const DataTypes = require("sequelize");

module.exports = {
  up: (queryInterface) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          "hashtags",
          "previous_rank",
          {
            type: DataTypes.INTEGER,
            default: 0
          },
          { transaction: t }
        ),
      ]);
    });
  },

  down: (queryInterface) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn("hashtags", { transaction: t }),
      ]);
    });
  },
};