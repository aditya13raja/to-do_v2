import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const app = express();
const port = process.env.PORT;
const mongodb_uri = process.env.MONGODB_URI;

mongoose.connect(mongodb_uri).then(() => {
  console.log("Connected to mongodb!");
});

app.listen(port || 3000, () => {
  console.log(`Server started! at http://localhost:${port}`)
})