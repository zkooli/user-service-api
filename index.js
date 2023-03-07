import express from "express";
import bodyParser from "body-parser";
import dotEnv from "dotEnv";
import userRoutes from "./routes/users.js";

import { MongoClient } from "mongodb";
dotEnv.config();

const connectionString = process.env.DB_URL || "";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server  is running on port http://localhost:${PORT}`);
});
