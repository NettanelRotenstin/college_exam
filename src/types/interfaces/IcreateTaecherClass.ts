import mongoose, { Mongoose } from "mongoose"
import roleEnum from "../roleEnum"
import IcreateStudents from "./IcreateStudent"
import { JwtPayload } from "jsonwebtoken"
import payLoadDTO from "../../DTOs/payLoadDTO"

export default interface IcreateTeacherClass extends Document{
    role:string | roleEnum | payLoadDTO
    teacherName: string
    email: string
    password: string
    nameOfClass: string
    students?:[mongoose.Types.ObjectId]
}

