import mongoose from "mongoose"

export default interface IGrade extends Document{
    title: string
    score: Number
    classID:mongoose.Schema.Types.ObjectId
}
