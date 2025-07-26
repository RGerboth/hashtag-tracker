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
exports.localStrategy = void 0;
const passport_local_1 = __importDefault(require("passport-local"));
const User_1 = require("../models/User");
const LocalStrategy = passport_local_1.default.Strategy;
const localStrategy = new LocalStrategy((username, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.User.findOne({ where: { username } });
        if (user && user.password === password) {
            return done(null, user);
        }
        return done(null, false, { message: 'Invalid credentials' });
    }
    catch (error) {
        return done(error);
    }
}));
exports.localStrategy = localStrategy;
