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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tweet_1 = require("../models/Tweet");
const hastagHandler_1 = __importDefault(require("../utils/hastagHandler"));
module.exports = {
    handleTweet(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tweet = req.body.tweet;
                const newTweet = yield Tweet_1.Tweet.create({ text: tweet });
                if (newTweet) {
                    (0, hastagHandler_1.default)(tweet); // This is an asyncronous function but we are not waiting to see how it ends before responding to the POST request. 
                }
                return ({ success: true, message: newTweet });
            }
            catch (error) {
                console.log(error);
                return ({ success: false, message: error });
            }
        });
    }
};
