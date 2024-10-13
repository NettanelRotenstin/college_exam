import { Router } from "express";
import { addGrade, avarageOfStudentsGrade, createTeacher, gradesOfAllStudents, updateGrade } from "../controllers/teacherController";

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
teacherRouter.post("/createteacher", createTeacher)

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

teacherRouter.post("/addgrade/:studentID", addGrade)


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

teacherRouter.get("/getstudentsandgrades", gradesOfAllStudents)

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

teacherRouter.patch("/updategrade/:studentID/:gradetitle", updateGrade)

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

teacherRouter.get("/avarage", avarageOfStudentsGrade)

export default teacherRouter