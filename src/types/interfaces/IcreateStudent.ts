import IGrade from "./Grade"

export default interface IcreateStudents {
    name: string
    email: string
    password: string
    nameOfClass: string
    grades?:[IGrade]
}
