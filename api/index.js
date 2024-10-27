import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const app = express();
const port = process.env.PORT;
const mongodb_uri = process.env.MONGODB_URI;

// connect mongodb 
mongoose.connect(mongodb_uri).then(() => {
  console.log("Connected to mongodb!");
});



// start server
app.listen(port || 3000, () => {
  console.log(`Server started! at http://localhost:${port}`)
})