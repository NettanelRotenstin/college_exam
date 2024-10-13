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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const gradSchema_1 = __importDefault(require("./gradSchema"));
const roleEnum_1 = __importDefault(require("../types/roleEnum"));
const studentSchema = new mongoose_1.Schema({
    role: {
        type: String,
        enum: roleEnum_1.default,
        required: [true, `role is necessary!`]
    },
    name: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ``
    },
    password: {
        type: String,
        required: [true, 'password is missing!']
    },
    nameOfClass: {
        type: String,
        enum: []
    },
    grades: {
        type: [gradSchema_1.default]
    }
});
exports.default = mongoose_1.default.model("Student", studentSchema);
