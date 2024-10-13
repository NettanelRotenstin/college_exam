import mongoose, { Schema } from "mongoose";


const DTOPrfl = new Schema<DTOProfile>({
    bio: {
        type: String,
        default: ''
    },
    socialLinks: {
        type: [String],
        default: []
    }
});

export default DTOPrfl