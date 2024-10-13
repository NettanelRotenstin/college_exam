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
exports.updateGrade = exports.gradesOfAllStudents = exports.addGrade = exports.createTeacher = void 0;
const teacherService_1 = require("../services/teacherService");
const createTeacher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const student = yield (0, teacherService_1.addGradeService)(req.body.grade, req.params.studentID, req.cookies.role);
        res.status(200).json({
            msg: 'grade addad',
            student
        });
    }
    catch (error) {
        res.status(404).json({ msg: 'request faild' });
    }
});
exports.addGrade = addGrade;
const gradesOfAllStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allGrades = yield (0, teacherService_1.gradesOfAllStudentsService)(req.cookies.id);
        res.status(200).json({
            allGrades
        });
    }
    catch (error) {
        res.status(404).json({
            msg: 'request faild'
        });
    }
});
exports.gradesOfAllStudents = gradesOfAllStudents;
const updateGrade = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, teacherService_1.updateGradeService)(req.body, req.params.studentID);
        res.status(200).json({
            msg: 'success changed!'
        });
    }
    catch (error) {
        res.status(404).json({
            msg: 'request faild'
        });
    }
});
exports.updateGrade = updateGrade;
// export const avarageOfStudentsGrade = async (req: Request, res: Response,): Promise<void> => {
//     try {
//         const result = await gradesOfAllStudentsService(req.cookies.id)
//         res.status(200).json({
//             result
//         })
//     } catch (error) {
//         res.status(404).json({ msg: 'request faild' })
//     }
// };
