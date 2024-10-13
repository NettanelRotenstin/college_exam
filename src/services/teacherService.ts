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


export const gradesOfAllStudentsService = async (classID: string) => {
  try {
    const teacherClass = await classModel.findById(classID,).populate('students')
    if (teacherClass) {
      return teacherClass
    }
    throw new Error('cant find this class')
  } catch (error) {

    throw new Error('cant return')

  }
}

export const updateGradeService = async (grade: IGrade, studentID: string) => {
  try {
    const { title, score, classID } = grade

    const teacher = await studentModel.findById(studentID)

    if (!teacher) throw new Error('tou arent his teacher')

    const student = await

      await studentModel.updateOne({grades :  {title}} ,
        { $set: { score }})
  } catch (error) {

    throw new Error('cant return the')

  }
}

// export const avarageGradesService = async (teacherID: string): Promise<number> => {
//   try {
   
//   } catch (error) {

//     throw new Error('cant return the')

//   }
// }