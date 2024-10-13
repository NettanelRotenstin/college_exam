import { Request, Response } from "express";
import mongoose from "mongoose";
import { createTeacherService } from "../services/teacherService";

export const createTeacher = async (req: Request, res: Response): Promise<void> => {
    console.log(`hh`)
    try {
        const teacher = await createTeacherService(req.body)
        res.status(201).json({
            msg:'class with teachew created!',
            teacher
        })
    } catch (error) {
        res.status(404).json({
            msg:'bed request'
        })
    }
};

export const addGrade = async (req: Request, res: Response,): Promise<void> => {
    try {

    } catch (error) {

    }
};

export const gradesOfAllStudents = async (req: Request, res: Response,): Promise<void> => {
    try {

    } catch (error) {

    }
};

export const updateGrade = async (req: Request, res: Response,): Promise<void> => {
    try {

    } catch (error) {

    }
};


export const avarageOfStudentsGrade = async (req: Request, res: Response,): Promise<void> => {
    try {

    } catch (error) {

    }
};
 