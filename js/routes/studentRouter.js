"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studentController_1 = require("../controllers/studentController");
const router = require("express").Router();
const studentRouter = (0, express_1.Router)();
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
router.post("/createstudent", studentController_1.createStudent);
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
router.delete("/logout", studentController_1.getGrade);
exports.default = studentRouter;
