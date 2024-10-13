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
exports.createTeacherService = void 0;
const classModel_1 = __importDefault(require("../models/classModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const createTeacherService = (teacher) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { role, teacherName, email, password, nameOfClass } = teacher;
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const dbTeacher = new classModel_1.default({
            role, teacherName, email, password: hashedPassword, nameOfClass
        });
        yield dbTeacher.save();
        const classCreated = yield classModel_1.default.findOne({ nameOfClass });
        return classCreated;
    }
    catch (err) {
        throw err;
    }
});
exports.createTeacherService = createTeacherService;
