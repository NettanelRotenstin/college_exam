"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const gradeSchema = new mongoose_1.Schema({
    title: {
        type: String,
        default: ''
    },
    score: {
        type: Number
    }
});
exports.default = gradeSchema;
