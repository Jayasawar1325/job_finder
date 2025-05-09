import mongoose, {Schema} from "mongoose";
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true, 
        },

        password: {
            type: String,
            required: [true, 'Password is required']
        },
    },{
        timestamps:true
    }
)


export const User = mongoose.model("User", userSchema)