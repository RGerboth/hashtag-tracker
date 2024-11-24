require("dotenv").config();

const { user, host, database, password, port } = JSON.parse(process.env.DB);

module.exports = {
  development: {
    username: user,
    host,
    database,
    password,
    port,
    dialect: "postgres",
    logging: false,
    dialectOptions: {}
    // dialectOptions: {
    //   ssl: {
    //     require: true,
    //     rejectUnauthorized: false,
    //   },
    // },
  },
};