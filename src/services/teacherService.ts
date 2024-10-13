import classModel from "../models/classModel";
import IcreateTeacherClass from "../types/interfaces/IcreateTaecherClass";
import bcrypt from 'bcrypt'


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
