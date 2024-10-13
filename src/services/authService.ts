import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import createPersonDTO from '../DTOs/CreatePersonDTO';
import classModel from '../models/classModel';
import studentModel from '../models/studentModel'
import IcreateStudents from '../types/interfaces/IcreateStudent';
import IcreateTeacherClass from '../types/interfaces/IcreateTaecherClass';


export const loginServise = async (person: createPersonDTO) => {
    try {

        let dbUser = await classModel.findOne({ name: person.user_name });

        if (!dbUser) {

            dbUser = await studentModel.findOne({ name: person.user_name })

        }

        if (!dbUser) throw new Error("user not found");

        const userPass: string = person.password || " "

        const dbUserPass: string = dbUser.password || " "

        if (!(await bcrypt.compare(userPass, dbUserPass))) {

            throw new Error("wrong password");
        }

        const token = await jwt.sign({ role: dbUser.role, id: dbUser._id, }, process.env.TOKEN_SECRET as string);

        return token;

    } catch (err) {
       
        throw err;
    }
};