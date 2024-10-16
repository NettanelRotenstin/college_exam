import mongoose, { Schema } from "mongoose";
import IGrade from "../types/interfaces/Grade";

const gradeSchema = new Schema<IGrade>({
    title: {
        type: String,
        default: ''
    },
    score: {
        type: Number
    },
    classID:{
        type:mongoose.Schema.Types.ObjectId
    }
});

export default gradeSchema