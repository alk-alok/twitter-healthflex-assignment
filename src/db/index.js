import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

        console.log("Connected database!")
    }
    catch(err){
        console.log("Database Connection Error: ", err);
        process.exit(1);
    }
}

export default connectDB