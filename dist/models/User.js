"use strict";
// import mongoose from "mongoose";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
// interface IUserSchema {
//   username: string;
//   email: string;
//   password: string;
//   picture: string;
//   savedCodes: Array<mongoose.Types.ObjectId>;
// }
// const UserSchema = new mongoose.Schema<IUserSchema>(
//   {
//     username: {
//       type: String,
//       required: true,
//       trim: true,
//       unique: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       trim: true,
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     picture: {
//       type: String,
//       default:
//         "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
//     },
//     savedCodes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Code" }],
//   },
//   { timestamps: true }
// );
// export const User = mongoose.model("User", UserSchema);
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    picture: {
        type: String,
        default: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
    },
    savedCodes: {
        type: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: "Code" }],
        default: [], // Ensures savedCodes is initialized as an empty array
    },
}, { timestamps: true });
exports.User = mongoose_1.default.model("User", UserSchema);
