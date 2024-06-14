import { configDotenv } from "dotenv";
import express from "express";

import connectDB from "./db/index.js";

configDotenv();

const app = express();

connectDB().then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`App is listening on port : ${process.env.PORT}`)
    })
}).catch((err)=>{
    console.log("Error", err);
    throw err;
})