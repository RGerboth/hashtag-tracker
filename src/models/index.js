"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
require("dotenv/config");
const node_v8_1 = __importDefault(require("node:v8"));
const sequelize_1 = require("sequelize");
// Initialize Sequelize
// const sequelize = new Sequelize('postgres://postgres@localhost:5432/template1')
const { user, host, database, password, port } = JSON.parse(process.env.DB);
console.log(`Connecting to database - ${host}:${database}`);
const sequelize = new sequelize_1.Sequelize(database, user, password, {
    define: {
        underscored: true,
    },
    host,
    port: Number(port),
    dialect: "postgres",
    dialectOptions: {},
    logging: (log) => {
        console.log(log);
        console.log((node_v8_1.default.getHeapStatistics().used_heap_size / 1024 / 1024 / 1024).toFixed(4), "GB out of", (node_v8_1.default.getHeapStatistics().heap_size_limit / 1024 / 1024 / 1024).toFixed(4), "GB used");
    },
});
exports.sequelize = sequelize;
