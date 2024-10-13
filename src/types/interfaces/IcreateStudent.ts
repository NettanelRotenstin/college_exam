import roleEnum from "../roleEnum"
import IGrade from "./Grade"

export default interface IcreateStudents {
    role:string | roleEnum
    name: string
    email: string
    password: string
    nameOfClass: string
    grades?:[IGrade]
}
