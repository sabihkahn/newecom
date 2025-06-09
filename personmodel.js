import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true, 
    },
    email: {
        type: String,
        trim: true,
        lowercase: true, 
    },
    phone: {
        type: String,
        trim: true,
    },
    address: { 
        type: String,
        trim: true,
    },
    color :{
        type:String,
    },
    age :{
        type:String
    }
    
     
}, { timestamps: true }); 

export default mongoose.model('PersonData', personSchema); 