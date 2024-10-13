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
exports.updateGradeService = exports.gradesOfAllStudentsService = exports.addGradeService = exports.createTeacherService = void 0;
const classModel_1 = __importDefault(require("../models/classModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const studentModel_1 = __importDefault(require("../models/studentModel"));
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
const addGradeService = (grade, studentId, teacherID) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const teacher = yield classModel_1.default.findOne({ _id: teacherID }, { students: { _id: studentId } });
        if (!teacher)
            throw new Error('you dont have an access!');
        yield studentModel_1.default.findByIdAndUpdate(studentId, { grades: { $push: grade } });
        return yield studentModel_1.default.findById(studentId);
    }
    catch (_a) {
        throw new Error('cant find student or teacher');
    }
});
exports.addGradeService = addGradeService;
const gradesOfAllStudentsService = (classID) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const teacherClass = yield classModel_1.default.findById(classID).populate('students');
        if (teacherClass) {
            return teacherClass;
        }
        throw new Error('cant find this class');
    }
    catch (error) {
        throw new Error('cant return');
    }
});
exports.gradesOfAllStudentsService = gradesOfAllStudentsService;
const updateGradeService = (grade, studentID) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, score, classID } = grade;
        const teacher = yield studentModel_1.default.findById(studentID);
        if (!teacher)
            throw new Error('tou arent his teacher');
        const student = yield yield studentModel_1.default.updateOne({ grades: { title } }, { $set: { score } });
    }
    catch (error) {
        throw new Error('cant return the');
    }
});
exports.updateGradeService = updateGradeService;
// export const avarageGradesService = async (teacherID: string): Promise<number> => {
//   try {
//   } catch (error) {
//     throw new Error('cant return the')
//   }
// }
