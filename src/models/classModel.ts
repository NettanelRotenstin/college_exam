import mongoose, { Schema } from 'mongoose';
import IcreateTeacherClass from '../types/interfaces/IcreateTaecherClass'
import roleEnum from '../types/roleEnum';

const classSchema = new Schema<IcreateTeacherClass>({
  role: {
    type: String,
    enum: roleEnum
  },
  teacherName: {
    type: String,
    default: ''
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
    unique: true
  },
  students: {
    type: [mongoose.Types.ObjectId],
    default:[]
  }
});

export default mongoose.model<IcreateTeacherClass>("class", classSchema);