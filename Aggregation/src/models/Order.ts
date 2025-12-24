import { Schema, model, Types } from "mongoose";

export interface IOrder {
    userId: Types.ObjectId;
    amount: number;
    status: "pending" | "completed" | "canceled";
    items: string[];
}

const OrderSchema = new Schema<IOrder>({
    userId: {type: Schema.Types.ObjectId, ref: "User", index: true},
    amount: Number,
    status: String,
    items: [String]
},{ timestamps: true
})

export const Order  =  model<IOrder>("Order", OrderSchema);