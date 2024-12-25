import dotenv from 'dotenv';
import express from 'express';
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.js";
 
dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;


app.use(express.json()); //allows json data in req.body

app.use("/api/products",productRoutes)


app.listen(5000,()=>{
    connectDB();
    console.log(`Running successfully on http://localhost: ${PORT}`)
});
