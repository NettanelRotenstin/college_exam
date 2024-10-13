import mongoose, { Schema } from 'mongoose';
import IcreateTeacherClass from '../types/interfaces/IcreateTaecherClass'

const classSchema = new Schema<IcreateTeacherClass>({
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
  }
});

export default mongoose.model<IcreateTeacherClass>("class", classSchema);