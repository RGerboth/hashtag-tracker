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
const userController = require('../controllers/userController');
const router = express_1.default.Router();
router.post('/login', passport_1.default.authenticate('local', { session: false }), (req, res) => {
    // This section would usually include creating a session token and passing that back to the user
    // along with endpoints for password reset, etc. 
    res.json({ message: 'Logged in successfully' });
});
router.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield userController.getAllUsers(req);
    res.json({ users: result });
}));
module.exports = router;
