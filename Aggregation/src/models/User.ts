import {Schema, model, Types} from 'mongoose';

export interface IUser {
    name: string;
    email: string;
    age: number;
    role: "user" | "admin";
}

const UserSchema = new Schema<IUser>({
    name: {type: String},
    email: {type: String, unique: true},
    age: {type: Number},
    role: {type: String, enum: ["user", "admin"], default: "user"}
},{ timestamps: true }
)

export const User = model<IUser>("User",UserSchema);