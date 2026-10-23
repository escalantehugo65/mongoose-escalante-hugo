import { Schema, model } from "mongoose";

const bookDetailSchema = new Schema({
    summary:{type:String, trim:true, required:true},
    pages:{type:Number, required:true, min:1},
    active:{type:Boolean, default: true},
    book:{
        type:Schema.Types.ObjectId, 
        ref:"Book",
        required:true,
        unique:true,
        }
    }
);

export const bookDetailModel = model("BookDetail", bookDetailSchema);