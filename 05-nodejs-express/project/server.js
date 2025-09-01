import mongoose from "./config/database.js";
import express from "express";
import User from "./models/User.js";
const app = express();

app.use(express.json());

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
