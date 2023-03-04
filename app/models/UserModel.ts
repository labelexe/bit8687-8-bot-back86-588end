import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    name: string,
    email: string,
    password: string,
    bearerToken: string
}

const UserSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    bearerToken: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const UserModel = mongoose.model<IUser>('users', UserSchema);
export default UserModel;