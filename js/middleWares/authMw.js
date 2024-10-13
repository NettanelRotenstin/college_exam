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
exports.student = exports.onlyTeachers = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const roleEnum_1 = __importDefault(require("../types/roleEnum"));
const onlyTeachers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.cookies.token;
        const userData = yield jsonwebtoken_1.default.verify(token, process.env.SECRET_TOKEN);
        if (userData.role.toString() != roleEnum_1.default[1]) {
            res.status(403).send("you are not a teacher");
        }
        next();
    }
    catch (err) {
        res.status(401).json({ err });
    }
});
exports.onlyTeachers = onlyTeachers;
const student = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.cookies.token;
        const userData = yield jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET);
        if (userData.id) {
            res.status(403).send("you are not a student");
        }
        next();
    }
    catch (err) {
        res.status(401).json({ err });
    }
});
exports.student = student;
