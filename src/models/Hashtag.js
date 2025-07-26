"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hashtag = void 0;
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Hashtag extends sequelize_1.Model {
}
exports.Hashtag = Hashtag;
Hashtag.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    tag: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
        unique: true,
    },
    count: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, {
    sequelize: _1.sequelize,
    modelName: 'Hashtag',
});
