import IcreateStudent from '../types/interfaces/IcreateStudent'
import mongoose, { Schema } from 'mongoose';

const studentSchema = new Schema<IcreateStudent>({
    name:{
      type:String,
      default:''
    },
    email:{
      type:String,
      default:``
    },
    password:{
      type:String,
      required:[true,'password is missing!']
    },
    nameOfClass:{
      type: String,
      enum:[]
    }
});

export default mongoose.model<IcreateStudent>("Student", studentSchema);