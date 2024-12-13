"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importStar(require("jsonwebtoken"));
const verifyToken = async (req, res, next) => {
    const token = req.cookies.token;
    console.log("Request cookies:", req.cookies); // Check if token is being received
    if (!token) {
        console.log("No token found in cookies.");
        return res.status(401).send({ message: "You are unauthorized." });
    }
    jsonwebtoken_1.default.verify(token, process.env.JWT_KEY, (err, data) => {
        if (err) {
            if (err instanceof jsonwebtoken_1.TokenExpiredError) {
                console.log("Token has expired.");
                return res.status(401).send({ message: "Token has expired." });
            }
            console.log("Token verification error:", err.message);
            return res.status(401).send({ message: "You are unauthorized." });
        }
        req._id = data._id;
        console.log("Token verified, user ID:", req._id);
        next();
    });
};
exports.verifyToken = verifyToken;
