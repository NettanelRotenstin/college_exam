import { JwtPayload } from "jsonwebtoken"
import roleEnum from "../roleEnum"
import IGrade from "./Grade"
import payLoadDTO from "../../DTOs/payLoadDTO"
import mongoose from "mongoose"

export default interface IcreateStudents extends Document {
    role:string | roleEnum | payLoadDTO
    classID?:mongoose.Types.ObjectId
    name: string
    email: string
    password: string
    nameOfClass: string
    grades?:[IGrade]
}
