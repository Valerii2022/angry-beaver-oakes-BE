import mongoose from "mongoose";

let isConnected;

const connectToDatabase = async () => {
  if (isConnected) {
    console.log("=> Using existing database connection");
    return;
  }

  try {
    await mongoose.connect(process.env.DB_HOST);
    isConnected = mongoose.connections[0].readyState;
    console.log("=> Database connected");
  } catch (error) {
    console.error("Database connection error:", error);
    throw error;
  }
};

export default connectToDatabase;
