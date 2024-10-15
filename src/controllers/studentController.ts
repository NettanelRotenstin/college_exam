import { Request, Response } from "express";
import mongoose from "mongoose";
import { createStudentService, getGradeService } from "../services/studentService";


export const createStudent = async (req: Request, res: Response,): Promise<void> => {
    try {
        const student = await createStudentService(req.body)
        res.status(201).json({
            msg: 'student created!',
            student
        })
    } catch (error) {
        res.status(404).json({
            msg: 'bed request'
        })
    }
};

export const getGrade = async (req: Request, res: Response,): Promise<void> => {
    try {
        const grades = await getGradeService(req.cookies.id)
        res.status(200).json({
            grades
        })
    } catch (error) {
        res.status(404).json({ msg: 'bed request' })
    }
};