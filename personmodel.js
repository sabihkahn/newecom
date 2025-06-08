import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true, // Removes extra whitespace
    },
    email: {
        type: String,
        trim: true,
        lowercase: true, // Stores email in lowercase
    },
    phone: {
        type: String,
        trim: true,
    },
    address: {  // Fixed typo: "adress" → "address"
        type: String,
        trim: true,
    }
}, { timestamps: true }); // Adds createdAt & updatedAt fields

export default mongoose.model('PersonData', personSchema); // PascalCase naming convention