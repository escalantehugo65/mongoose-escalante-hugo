import { authorModel } from "../models/author.model.js";
import { matchedData } from "express-validator";


export const createAuthor= async (req,res)=>{
    try{
        const data = matchedData(req)
        const newAuthor= await authorModel.create(data)
        
        return res.status(201).json({msg:"Autor creado correctamente", data:newAuthor})


    }catch(error){
        console.error(error)
        return res.status(500).json({msg:"Ha ocurrido un error, lo sentimos"})
    }
}