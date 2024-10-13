import IGrade from "./Grade"

export default interface IcreateStudents {
    role:string
    name: string
    email: string
    password: string
    nameOfClass: string
    grades?:[IGrade]
}
