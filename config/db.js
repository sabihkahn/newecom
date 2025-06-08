 import mongoose from "mongoose";

 const connectDB = async () => {
    try{
const connection = await mongoose.connect(process.env.MONGO_URL)
console.log('connected to mongo db');


    }
    catch (error) {
        console.error(error);
    }
 }
 export default connectDB