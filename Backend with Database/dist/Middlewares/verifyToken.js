"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../../.env') });
const verifyToken = (req, res, next) => {
    //getting the token
    const token = req.headers['token'];
    try {
        if (!token) {
            res.status(401).json({ error: 'Forbbiden' });
        }
        //getting decoded data in the payload
        const decodedData = jsonwebtoken_1.default.verify(token, process.env.SECRETKEY);
    }
    catch (error) {
        res.status(401).json(error.message);
    }
};
exports.verifyToken = verifyToken;
