import selectedClass from "../middleWares/checkingClassName";
import classModel from "../models/classModel";
import studentModel from "../models/studentModel";
import IcreateStudents from "../types/interfaces/IcreateStudent";
import bcrypt from 'bcrypt'

export const createStudentService = async (student: IcreateStudents) => {
    try {
        const { role, name, email, password, nameOfClass } = student;

        await selectedClass(nameOfClass)

        const hashedPassword = await bcrypt.hash(password, 10);

        const dbStudent = new studentModel({

            role, name, email, password: hashedPassword, nameOfClass

        });

        await dbStudent.save()

        return dbStudent

    } catch (err) {
        throw err
    }
};


export const getGradeService = async (studentID: string,titleLooking:string) => {
    try {
        const grade = await studentModel.aggregate([{$match:{_id:studentID}}])
    } catch (err) {
        throw err
    }
};

export const getClassId = async (id:string) => {
    return await classModel.findById(id)
}


