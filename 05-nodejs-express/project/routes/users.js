import express from "express";
import User from "../models/User.js";
import validateUser from "../middleware/validation.js";

const router = express.Router();

// GET all users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// GET user by id
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});

// POST create user
router.post("/", validateUser, async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT update user
router.put("/:id", validateUser, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE user
router.delete("/:id", async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json({ message: "User deleted" });
});

export default router;
