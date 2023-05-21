import express, { Application } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import { dbConnect } from "./utils/dbconnect";
const app: Application = express();

// using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Database connection
dbConnect();

// import all routes

// Default Route

// Custom route path

export { app };
