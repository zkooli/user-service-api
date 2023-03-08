import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import { MongoClient } from "mongodb";

dotenv.config();

const connectionString = process.env.DB_URL || "";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}
const db = conn.db("carpooling");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use("/users", userRoutes);

app.get("/test", async (req, res) => {
  let collection = await db.collection("user");
  let results = await collection.find({}).limit(50).toArray();

  res.send(results).status(200);
});

app.listen(PORT, () => {
  console.log(`Server  is running on port http://localhost:${PORT}`);
});
