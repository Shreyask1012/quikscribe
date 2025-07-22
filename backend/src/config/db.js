import mongoose from "mongoose";
import dotenv from "dotenv";

export const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        
        console.log("MONGODB CONNECTED SUCCESFULLY ");

    }
    catch(error){
        console.log("Error connecting to MONGODB",error);
        process.exit(1);// exit with failure
        
    }
    
}
