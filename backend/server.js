import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from "./config/db.js"
import Product from './models/product.js';

 
dotenv.config();

const app = express();

app.use(express.json()); //allows json data in req.body



app.post('/api/products', async (req,res) => {
    const product = req.body;

    if(!product.name || !product.price ||!product.image ){
        return res.status(400).json({ success:false ,message:"Please provide all fields"});
    }

    const newProduct = new Product(product)

    try{
        await newProduct.save();
        res.status(201).json({ success:true , data: newProduct});
    }catch(error){
        console.log("Error in Create product:",error.message);
            res.status(500).json({ success:false,message:"Server Error"});
        
    }
});
 

app.delete("/api/products/:id", async(req,res) => {
    const {id} = req.params;
     
    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:false,message:"Product Deleted"});
    }catch(error){
        res.status(404).json({ success:false,message:"Product not found"})
    }
})


app.listen(5001,()=>{
    connectDB();
    console.log("Running successfully on http://localhost:5001")
});
