import mongoose from "../config/database.js";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

export default User;
