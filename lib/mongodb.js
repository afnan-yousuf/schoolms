import mongoose from "mongoose";

export default async function mongodb(){
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB Connected")
    }
    catch(error){
        console.log(error)
    }
}