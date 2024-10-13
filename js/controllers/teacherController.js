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
exports.avarageOfStudentsGrade = exports.updateGrade = exports.gradesOfAllStudents = exports.addGrade = exports.createTeacher = void 0;
const teacherService_1 = require("../services/teacherService");
const createTeacher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`hh`);
    try {
        const teacher = yield (0, teacherService_1.createTeacherService)(req.body);
        res.status(201).json({
            msg: 'class with teachew created!',
            teacher
        });
    }
    catch (error) {
        res.status(404).json({
            msg: 'bed request'
        });
    }
});
exports.createTeacher = createTeacher;
const addGrade = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
    }
});
exports.addGrade = addGrade;
const gradesOfAllStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
    }
});
exports.gradesOfAllStudents = gradesOfAllStudents;
const updateGrade = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
    }
});
exports.updateGrade = updateGrade;
const avarageOfStudentsGrade = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
    }
});
exports.avarageOfStudentsGrade = avarageOfStudentsGrade;
