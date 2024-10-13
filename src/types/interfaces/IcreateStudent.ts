import { JwtPayload } from "jsonwebtoken"
import roleEnum from "../roleEnum"
import IGrade from "./Grade"
import payLoadDTO from "../../DTOs/payLoadDTO"

export default interface IcreateStudents {
    role:string | roleEnum | payLoadDTO
    name: string
    email: string
    password: string
    nameOfClass: string
    grades?:[IGrade]
}
