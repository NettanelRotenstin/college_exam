import mongoose from "mongoose"
import classModel from "../models/classModel"
import IcreateTeacherClass from "../types/interfaces/IcreateTaecherClass"
const selectedClass = async(className:string):Promise<void> => {
    const classSameName:IcreateTeacherClass | unknown = await classModel.findOne({nameOfClass:className})
    if(!classSameName) throw new Error('you have to chooce from an exist class')
}

export default selectedClass