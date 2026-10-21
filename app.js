import express from 'express';
import "dotenv/config";
import { StartDB } from './src/config/db.js';


const app = express();

const PORT = process.env.PORT || 3005;

app.use(express.json());

app.listen(PORT, ()=>{
    console.log("El servidor arrancó correctamente");
});



