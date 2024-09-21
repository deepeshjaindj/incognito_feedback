import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: string
}

const connection: ConnectionObject = {};

export async function connectDB(): Promise<void> {
  if (connection?.isConnected) {
    // If already connected then no need to connect
    return;
  }

  try {
    const connectionResponse = await mongoose.connect(process.env.MONGODB_URI ?? '');
    connection.isConnected = connectionResponse?.connections?.[0]?.host;
    console.log("Database connected successfully");
  } catch (error) {
    console.error('Database connection failed: ', error);
    process.exit(1);
  }
}
