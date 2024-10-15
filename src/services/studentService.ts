import selectedClass from "../middleWares/checkingClassName";
import classModel from "../models/classModel";
import studentModel from "../models/studentModel";
import IGrade from "../types/interfaces/Grade";
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


export const getGradeService = async (studentID: string) => {
    try {
        const student = await studentModel.findById(studentID)
        return student?.grades
    } catch (err) {
        throw err
    }
};

export const getClassId = async (id:string) => {
    return await classModel.findById(id)
}


