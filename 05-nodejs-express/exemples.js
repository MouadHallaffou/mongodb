// Exemple avec Mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mydb");

const User = mongoose.model("User", { name: String, age: Number });

// Express route
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});
