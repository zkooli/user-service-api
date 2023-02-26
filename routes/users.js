import express from "express";
import { v4 } from "uuid";

const router = express.Router();

let users = [];

router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const userResearch = users.find((user) => user.id === id);
  res.send(userResearch);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  users = users.filter((user) => user.id !== id);
  res.send("User Deleted");
});

router.post("/", (req, res) => {
  const user = req.body;
  users.push({ ...user, id: v4() });
  res.json({ message: "user added" });
});

export default router;
