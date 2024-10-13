import mongoose from "mongoose";
import roleEnum from "../types/roleEnum";

export default interface payLoadDTO{
    role:roleEnum
     id:mongoose.Types.ObjectId
}