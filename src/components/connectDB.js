import mongoose from "mongoose";

async function connectDB() {
  if (mongoose.connections[0].readyState) return;
  mongoose.set("strictQuery", false);
  await mongoose.connect(process.env.URI_MONGO);
  console.log("Connected to DB Beni Joon");
}
export default connectDB;
