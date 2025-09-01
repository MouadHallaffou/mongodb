import mongoose from "mongoose";

const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/challangemongodb";

async function connectDB() {
  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

connectDB();

export default mongoose;
