import "dotenv/config";
import v8 from "node:v8";
import { Sequelize } from 'sequelize';

// Initialize Sequelize
// const sequelize = new Sequelize('postgres://postgres@localhost:5432/template1')
const { user, host, database, password, port } = JSON.parse(process.env.DB as string);
console.log(`Connecting to database - ${host}:${database}`)

const sequelize = new Sequelize(database, user, password, {
  define: {
    underscored: true,
  },
  host,
  port: Number(port),
  dialect: "postgres",
  dialectOptions: {},
  logging: (log) => {
    console.log(log);
    console.log(
      (v8.getHeapStatistics().used_heap_size / 1024 / 1024 / 1024).toFixed(4),
      "GB out of",
      (v8.getHeapStatistics().heap_size_limit / 1024 / 1024 / 1024).toFixed(4),
      "GB used"
    );
  },
});

export { sequelize };
