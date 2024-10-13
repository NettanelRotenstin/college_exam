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
    const allStudents = await classModel.find({ nameOfClass }, { students: 1, _id: 0 })

    let result: any = []

    for (let i = 0; i < allStudents.length; i++) {

      result += await studentModel.find({ _id: allStudents[i]._id }, { name: 1, grades: 1 })
    }
    return result

  } catch (error) {

    throw new Error('cant return the')

  }
}

export const updateGradeService = async (nameOfClass: string,grade:IGrade,studentID:string) => {
  try {
    const teacher = await classModel.findOne({nameOfClass,students:studentID})
    
    if(!teacher) throw new Error('tou arent his teacher')
    
    await studentModel.findOneAndUpdate({_id:studentID},{$match:{title:grade.title}})
  } catch (error) {

    throw new Error('cant return the')

  }
}