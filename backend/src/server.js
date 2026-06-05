import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import dbConnect from "./db/dbConnect.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api", contactRoutes);

dbConnect();

app.listen(process.env.PORT, () => {
  console.log(
    `Server running on port ${process.env.PORT}`
  );
});