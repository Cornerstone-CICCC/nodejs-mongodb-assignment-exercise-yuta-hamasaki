import express from 'express';
import mongoose from 'mongoose';
import productRouter from "./routes/product.routes"
import dotenv from 'dotenv'
dotenv.config()

// Create server
const app = express();

// Middleware
app.use(express.json());

// route
app.use('/product',productRouter)

// Connect to MongoDB and Start Server
const PORT = process.env.PORT || 3000;
const DB = process.env.DB!
mongoose
  .connect(DB)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
  })
  .catch((err) => console.error('Failed to connect to MongoDB', err));