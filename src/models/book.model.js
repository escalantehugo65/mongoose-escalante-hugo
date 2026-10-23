import { Schema, model } from "mongoose";

const bookSchema = new Schema({
    tittle:{type: String, required:true, trim:true},
    active:{type: Boolean, default: true},
    author:{type: Schema.Types.ObjectId, ref:"Author", required:true},
    categories:[{
        type:Schema.Types.ObjectId, 
        ref:"Category",
    }]
    }
);

export const bookModel = model("Book", bookSchema);