"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authController_1 = __importDefault(require("../controllers/authController"));
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
 *             $ref: '#/src/routes/authRouter'
 *
 *     responses:
 *       '201':
 *         description: A successful response
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Internal server error
 */
authRouter.post("/login", authController_1.default);
exports.default = authRouter;
