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
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const models_1 = require("./models"); // Import Sequelize instance
const passportConfig_1 = require("./middleware/passportConfig");
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
app.use(passport_1.default.initialize());
passport_1.default.use(passportConfig_1.localStrategy);
// Routes
app.use('/api', require('./routes/userRoutes'), require('./routes/tweetRoutes'), require('./routes/hashtagRoutes'));
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal server error.');
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Server running on port ${PORT}`);
    try {
        yield models_1.sequelize.authenticate();
        console.log('Database connection has been established successfully.');
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}));
exports.default = app;
