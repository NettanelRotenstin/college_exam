import mongoose, { Mongoose } from "mongoose"
import roleEnum from "../roleEnum"
import IcreateStudents from "./IcreateStudent"

export default interface IcreateTeacherClass {
    role:string | roleEnum
    teacherName: string
    email: string
    password: string
    nameOfClass: string
    students:[mongoose.Types.ObjectId]
}

