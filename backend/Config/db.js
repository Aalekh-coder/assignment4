import  mongoose,{ connect } from "mongoose";

const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URL, {
      connectTimeoutMS: 30000,
    });
    console.log(
      `✅ MongoDB connected successfully to: ${mongoose.connection.name}`
    );
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`);
    process.exit(1); 
  }
};


export default connectDB