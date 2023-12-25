import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import apiRoutes from "./Routes/apiRoutes.js";

dotenv.config();
const DB=process.env.MONGO_URL;
console.log('MongoDB URI:', DB);

try {
    await mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }

const app=express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
console.log("inside server");
app.use('/api',apiRoutes);

app.get("/",(req,res)=>{
    res.send("<h1>Welcome To DreamWed- Connect</h1>")
});

const PORT= process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`);
})