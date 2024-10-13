import { Router } from "express";
import login from "../controllers/authController";


const authRouter = require("express").Router();
 

 

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login to the system.
 *     description: Login to the system.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/src/routes/authRoutes'
 *      
 *     responses:
 *       '201':
 *         description: A successful response
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Internal server error
 */
authRouter.post("/login", login);

export default authRouter