import { Request, Response } from "express";
import mongoose from "mongoose";
import { addGradeService, avarageGradesService, createTeacherService, gradesOfAllStudentsService, updateGradeService } from "../services/teacherService";
import classModel from "../models/classModel";

export const createTeacher = async (req: Request, res: Response): Promise<void> => {
    try {
        const teacher = await createTeacherService(req.body)
        res.status(201).json({
            msg: 'class with teachew created!',
            teacher
        })
    } catch (error) {
        res.status(404).json({
            msg: 'bed request'
        })
    }
};

export const addGrade = async (req: Request, res: Response): Promise<void> => {
    try {
        const student = await addGradeService(req.body.grade, req.params.studentID, req.cookies.role)
        res.status(200).json({
            msg: 'grade addad',
            student
        })
    } catch (error) {
        res.status(404).json({ msg: 'request faild' })
    }
};

export const gradesOfAllStudents = async (req: Request, res: Response,): Promise<void> => {
    try {
        const allGrades = await gradesOfAllStudentsService(req.cookies.nameOfClass)
        res.status(200).json({
            allGrades
        })
    } catch (error) {
        res.status(404).json({
            msg: 'request faild'
        })
    }
};

export const updateGrade = async (req: Request, res: Response,): Promise<void> => {
    try {
        await updateGradeService(req.cookies.nameOfClass, req.body, req.params.studentID)
        res.status(200).json({
            msg: 'success changed!'
        })
    } catch (error) {
        res.status(404).json({
            msg: 'request faild'
        })
    }
};


export const avarageOfStudentsGrade = async (req: Request, res: Response,): Promise<void> => {
    try {
        const avarage = await avarageGradesService(req.cookies.nameOfClass, req.cookies.id)
        res.status(200).json({
            avarage
        })
    } catch (error) {
        res.status(404).json({ msg: 'request faild' })
    }
};
