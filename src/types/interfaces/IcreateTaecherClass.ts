import roleEnum from "../roleEnum"

export default interface IcreateTeacherClass {
    role:string | roleEnum
    teacherName: string
    email: string
    password: string
    nameOfClass: string
}

