"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tweet = void 0;
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Tweet extends sequelize_1.Model {
}
exports.Tweet = Tweet;
Tweet.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    text: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
        unique: true,
    },
}, {
    sequelize: _1.sequelize,
    modelName: 'Tweet',
});
