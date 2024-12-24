import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
   
},{
    timestamps:true //createdAt  , updatedAt
});

const Product = mongoose.model('Product',productSchema); 
//it creats a model based on the schema def. and this model rep.the
//products collection in MongoDB database and provides an interface to interact with it (e.g., querying, inserting, updating).

export default Product; 