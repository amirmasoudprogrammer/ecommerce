import  { Schema, model,models } from "mongoose";
import {IRegisterData} from "@/types/RegisterData";

const UserSchema = new Schema<IRegisterData>({
        name: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 100,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 8,
            maxlength: 128,
        },

    },
    {
        timestamps: true,
    }
)
const User = models.User || model("User" , UserSchema)

export default User;