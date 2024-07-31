import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
const app = express();

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on 3000");
    });
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });
