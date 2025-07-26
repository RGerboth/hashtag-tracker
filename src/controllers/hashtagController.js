"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Hashtag_1 = require("../models/Hashtag");
const models_1 = require("../models");
module.exports = {
    trendingTags(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const trendingHashtags = yield Hashtag_1.Hashtag.findAll({
                    order: models_1.sequelize.literal('max(count) DESC'),
                    group: ["id"],
                    limit: 25
                });
                const formattedTags = trendingHashtags.map(tag => {
                    return tag.tag;
                });
                return ({ success: true, hashtags: formattedTags || [] });
            }
            catch (error) {
                console.log(error);
                return ({ success: false, message: error });
            }
        });
    }
};
