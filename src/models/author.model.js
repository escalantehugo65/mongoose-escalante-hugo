import { Schema, model } from "mongoose";

const authorSchema = new Schema({
    name:{type: String, required:true, trim:true},
    email:{type: String, required:true, trim:true, lowercase: true},
    active:{type: Boolean, default:true},
    address:{
        city:{type: String, required:true, trim:true},
        country:{type:String, required:true, trim:true},
        street:{type:String, required:true, trim:true},
    }
});

export const authorModel = model("Author", authorSchema) 