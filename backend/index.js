import express from 'express';
import { Router } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { Site } from './models/icons.model.js';
import {upload} from "./multer.js";
import {uploadSites} from "./controllers/upload.controller.js";

const DB_NAME = "Tata";
const app = express();
const port = process.env.PORT || 8000; // Port set to 5173

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// MongoDB connection
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
    console.log(`\n MongoDB connected!! DB Host: ${connectionInstance.connection.host}`);
    console.log(`\n MongoDB connected!! DB Name: ${DB_NAME}`);
  } catch (error) {
    console.error("MONGO_DB connection error", error);
    process.exit(1);
  }
};

connectDB();

// Routes
const router = Router();

app.post("/site/add", async (req, res) => {
  upload.single("img"),
uploadSites()
})
router.route("/sites").get(async (req, res) => {
  try{
    const sites = await Site.find();
    res.json(sites);
  }catch (e) {
    res.status(400).json({ error: "Error is: "+ e });
  }
});

export default router;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
