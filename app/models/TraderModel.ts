import mongoose, { Schema, Document } from 'mongoose';

export interface ITrader extends Document {
    userID: string,
    exchange: string,
    name: string,
    api: string,
    Secret: string,
    balance: number,
    enabled: boolean,
    status: string,
}

const TraderSchema: Schema = new Schema({
    userID: {
        type: String,
        required: true
    },
    exchange: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    api: {
        type: String
    },
    Secret: {
        type: String,
    },
    balance: {
        type: Number,
        default: 433.959234
    },
    status: {
        type: String,
        default: "Pending"
    },
    enabled: {
        type: Boolean,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const TraderModel = mongoose.model<ITrader>('traders', TraderSchema);
export default TraderModel;