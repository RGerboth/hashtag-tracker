module.exports = {
  async up(queryInterface) {
    queryInterface.bulkInsert("hashtags", [
      {
        tag: "#unlv",
        count: 4,
      },
      {
        tag: "#basketball",
        count: 7,
      },
      {
        tag: "#kobe",
        count: 2,
      },
      {
        tag: "#mamba",
        count: 1,
      },
      {
        tag: "#hoophall",
        count: 1,
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(
      "hashtags",
      null,
      {}
    );
  },
};
