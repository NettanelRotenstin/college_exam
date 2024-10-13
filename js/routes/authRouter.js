"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = require("express").Router();
const { login, logout } = require("../controllers/authController");
const authRouter = (0, express_1.Router)();
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
router.post("/login", login);
exports.default = authRouter;
