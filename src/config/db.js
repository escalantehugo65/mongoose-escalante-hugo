import mongoose from 'mongoose';
import "dotenv/config"

export const StartDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Base de datos conectada correctamente")

    }catch(error){
        console.error("Error interno a la base de datos", error)
        throw error;
    }
}

