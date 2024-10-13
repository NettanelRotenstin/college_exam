"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const teacherController_1 = require("../controllers/teacherController");
const authMw_1 = require("../middleWares/authMw");
const teacherRouter = require("express").Router();
/**
 * @swagger
 * /createteacher:
 *   post:
 *     summary:  create teacher
 *     description: create teacher
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/src/routes/teacherRouter'
 *
 *     responses:
 *       '201':
 *         description: A successful response
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Internal server error
 */
teacherRouter.post("/createteacher", teacherController_1.createTeacher);
/**
 * @swagger
 * /add grade/:studentID:
 *   post:
 *     summary: add grade.
 *     description: add grade.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/src/routes/teacherRouter'
 *
 *     responses:
 *       '201':
 *         description: A successful response
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Internal server error
 */
teacherRouter.post("/addgrade/:studentID", authMw_1.onlyTeachers, teacherController_1.addGrade);
/**
 * @swagger
 * /getstudentsandgrades:
 *   get:
 *     summary: get students and grades.
 *     description: get students and grades.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/src/routes/teacherRouter'
 *
 *     responses:
 *       '200':
 *         description: A successful response
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Internal server error
 */
teacherRouter.get("/getstudentsandgrades", authMw_1.onlyTeachers, teacherController_1.gradesOfAllStudents);
/**
 * @swagger
 * /updategrade/:studentID/:gradeID:
 *   patch:
 *     summary: update grade.
 *     description: update grade.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/src/routes/teacherRouter'
 *
 *     responses:
 *       '200':
 *         description: A successful response
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Internal server error
 */
teacherRouter.patch("/updategrade/:studentID/:gradetitle", authMw_1.onlyTeachers, teacherController_1.updateGrade);
/**
 * @swagger
 * /avarage:
 *   get:
 *     summary: avarage.
 *     description: avarage.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/src/routes/teacherRouter'
 *
 *     responses:
 *       '200':
 *         description: A successful response
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Internal server error
 */
teacherRouter.get("/avarage", authMw_1.onlyTeachers, teacherController_1.avarageOfStudentsGrade);
exports.default = teacherRouter;
