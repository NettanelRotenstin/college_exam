import { Router } from "express";
import { createStudent, getGrade } from "../controllers/studentController";
const router = require("express").Router();

const studentRouter = Router()

/**
 * @swagger
 * /createstudent:
 *   post:
 *     summary:  create student
 *     description: create student
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/src/routes/studentRouter'
 *      
 *     responses:
 *       '201':
 *         description: A successful response
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Internal server error
 */
router.post("/createstudent", createStudent)

/**
 * @swagger
 * /getgrade/:examID:
 *   get:
 *     summary: get exam grade.
 *     description: get exam grade.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/src/routes/studentRouter'
 *      
 *     responses:
 *       '200':
 *         description: A successful response
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Internal server error
 */

router.delete("/logout", getGrade)



export default studentRouter