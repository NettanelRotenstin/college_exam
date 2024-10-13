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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGrade = exports.createStudent = void 0;
const studentService_1 = require("../services/studentService");
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield (0, studentService_1.createStudentService)(req.body);
        res.status(201).json({
            msg: 'student created!',
            student
        });
    }
    catch (error) {
        res.status(404).json({
            msg: 'bed request'
        });
    }
});
exports.createStudent = createStudent;
const getGrade = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const exam = yield (0, studentService_1.getGradeService)(req.cookies.id, req.params.titleLooking);
        res.status(200).json({
            exam
        });
    }
    catch (error) {
        res.status(404).json({ msg: 'bed request' });
    }
});
exports.getGrade = getGrade;
