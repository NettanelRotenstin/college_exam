import mongoose from "mongoose";
import classModel from "../models/classModel";
import IGrade from "../types/interfaces/Grade";
import IcreateTeacherClass from "../types/interfaces/IcreateTaecherClass";
import bcrypt from 'bcrypt'
import studentModel from "../models/studentModel";
import IcreateStudents from "../types/interfaces/IcreateStudent";


export const createTeacherService = async (teacher: IcreateTeacherClass) => {
  try {
    const { role, teacherName, email, password, nameOfClass } = teacher;

    const hashedPassword = await bcrypt.hash(password, 10);

    const dbTeacher = new classModel({

      role, teacherName, email, password: hashedPassword, nameOfClass

    });

    await dbTeacher.save()

    const classCreated = await classModel.findOne({ nameOfClass })

    return classCreated
  } catch (err) {
    throw err
  }
};


export const addGradeService = async (grade: IGrade, studentId: string, teacherID: mongoose.Types.ObjectId) => {
  try {
    const teacher = await classModel.findOne({ _id: teacherID }, { students: { _id: studentId } })

    if (!teacher) throw new Error('you dont have an access!')

    await studentModel.findByIdAndUpdate(studentId, { grades: { $push: grade } })

    return await studentModel.findById(studentId)

  } catch {

    throw new Error('cant find student or teacher')

  }
}


export const gradesOfAllStudentsService = async (nameOfClass: string) => {
  try {
     const teacherClass = await classModel.findOne({})
  } catch (error) {

    throw new Error('cant return the')

  }
}

export const updateGradeService = async (nameOfClass: string, grade: IGrade, studentID: string) => {
  try {
    const teacher = await classModel.findOne({ nameOfClass, students: { _id: studentID } })

    if (!teacher) throw new Error('tou arent his teacher')

    await studentModel.aggregate([{$set:{$match:{_id:studentID}}}])
} catch (error) {

  throw new Error('cant return the')

}
}

export const avarageGradesService = async (nameOfClass: string, teacherID: string): Promise<number> => {
  try {
    const teacher = await classModel.find({ nameOfClass, _id: teacherID }, { students: 1 })

    if (!teacher) throw new Error('you arent teacher of this class!')

    const grades = await gradesOfAllStudentsService(nameOfClass)

    return grades / grades.length

  } catch (error) {

    throw new Error('cant return the')

  }
}