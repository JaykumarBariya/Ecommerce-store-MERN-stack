import express from "express"
import pkg from 'colors';
import dotenv from"dotenv"
import morgan from "morgan";
import connectDB from './config/db.js';
import authRoutes from "./routes/authRoute.js"
import categoryRoutes from "./routes/categoryRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import cors from "cors";



//configure env
dotenv.config();

//database config
connectDB();

//rest objects
const app = express()

//middleware
app.use(cors({
    origin:"http://localhost:3000"
}))
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/category',categoryRoutes)
app.use('/api/v1/product',productRoutes)

//rest api
app.get("/",(req,res)=>{
    res.send("<h1>Welcome To MERN Stack Ecommerce Project</h1>")
});

//port
const PORT = process.env.PORT;

//run listen
app.listen(PORT,()=>{
    console.log(`server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});