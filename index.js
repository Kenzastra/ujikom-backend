import express from "express";
import cors from "cors";
import db from "./config/database.js";
import fileUpload from "express-fileupload";
import Users from "./models/userModel.js";
import Barangs from "./models/barangModel.js";
import Details from "./models/detailModel.js";
import Penjualan from "./models/penjualanModel.js";
import transaksiRoute from "./route/transaksiRoute.js";
import barangRoute from "./route/barangRoute.js";

const app = express();

// db.sync({alter:true});
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
app.use(fileUpload());
app.use(transaksiRoute);
app.use(barangRoute);

app.listen(5000, () => console.log("Server running at port 5000"));