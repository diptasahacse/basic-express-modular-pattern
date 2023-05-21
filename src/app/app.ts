import express, { Application } from "express";
import cors from "cors";
import "dotenv/config";
import { dbConnect } from "./utils/dbconnect";
const app: Application = express();

// using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Render ejs
app.set("view engine", "ejs");

// Database connection
dbConnect();

// import all routes
import productRoute from "./modules/Product/product.routes";

// Default Route
app.get("/", (req, res) => {
  res.render("index");
});
// Custom route path
app.use("/api/v1/products", productRoute);
export { app };
