import IcreateStudent from '../types/interfaces/IcreateStudent'
import mongoose, { Schema } from 'mongoose';
import IGrade from '../types/interfaces/Grade';
import gradeSchema from './gradSchema';
import roleEnum from '../types/roleEnum';

const studentSchema = new Schema<IcreateStudent>({
    role:{
        type:String,
        enum:roleEnum,
        required:[true,`role is necessary!`]
      },
    name: {
        type: String,
        default: ''
    },
    classID:{
        type:mongoose.Schema.Types.ObjectId
    },
    email: {
        type: String,
        default: ``
    },
    password: {
        type: String,
        required: [true, 'password is missing!']
    },
    nameOfClass: {
        type: String,
        enum: []
    },
    grades: {
        type: [gradeSchema],
        default:[]
    }
});

export default mongoose.model<IcreateStudent>("Student", studentSchema);