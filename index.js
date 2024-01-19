import express from "express";
import cors from "cors";
import db from "./config/database.js";
import Users from "./models/userModel.js";
import Barangs from "./models/barangModel.js";

const app = express();

// db.sync(Barangs);
try {
    await db.authenticate();
    console.log("Database Connected")
} catch (error) {
    console.error(error);
}

app.use(cors(
    {credentials: true,
    origin: 'http://localhost:3000'}
));
app.use(express.json());

app.listen(5000, () => console.log("Server running at port 5000"));