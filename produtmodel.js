import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
 
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        require: true,

    },
   
    photo: {
        data: Buffer,
        contentType: String
    },
},{timestamps:true}
)
export default mongoose.model('Productnew', productSchema);