import mongoose from "mongoose";

const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI;

  if (!mongoURI) {
    console.error(
      "ERROR: MONGODB_URI is not defined in your .env file. Please check backend/.env"
    );
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoURI);
    console.log("connected to database");
  } catch (error) {
    console.error(`"Error ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
