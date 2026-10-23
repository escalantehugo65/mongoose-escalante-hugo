import { Schema, model } from "mongoose";

const categorySchema = new Schema({
    name:{type: String, required:true, trim:true},
    active:{type: Boolean, default: true}
    }
);

export const categoryModel = model("Category", categorySchema);