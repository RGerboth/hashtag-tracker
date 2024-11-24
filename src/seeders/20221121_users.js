module.exports = {
  async up(queryInterface) {
    queryInterface.bulkInsert("users", [
      {
        username: "robert.gerboth@gmail.com",
        password: "password",
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(
      "users",
      null,
      {}
    );
  },
};
