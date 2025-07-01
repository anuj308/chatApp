import mongoose from "mongoose";

export const connectDB = async ()=>{
    try {
        const con = await mongoose.connect(process.env.MONGO_URI);
        console.log("connected to mongoDB",con.connection.host);
    } catch (error) {
        console.log("Error while connecting to mongoDb",error);
    }
}