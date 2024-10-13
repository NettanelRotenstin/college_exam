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
exports.getClassId = exports.getGradeService = exports.createStudentService = void 0;
const checkingClassName_1 = __importDefault(require("../middleWares/checkingClassName"));
const classModel_1 = __importDefault(require("../models/classModel"));
const studentModel_1 = __importDefault(require("../models/studentModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const createStudentService = (student) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { role, name, email, password, nameOfClass } = student;
        yield (0, checkingClassName_1.default)(nameOfClass);
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const dbStudent = new studentModel_1.default({
            role, name, email, password: hashedPassword, nameOfClass
        });
        yield dbStudent.save();
        return dbStudent;
    }
    catch (err) {
        throw err;
    }
});
exports.createStudentService = createStudentService;
const getGradeService = (studentID, titleLooking) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const grade = yield studentModel_1.default.aggregate([{ $match: { _id: studentID } }]);
    }
    catch (err) {
        throw err;
    }
});
exports.getGradeService = getGradeService;
const getClassId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield classModel_1.default.findById(id);
});
exports.getClassId = getClassId;
