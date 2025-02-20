import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URL
      //      {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      //   useCreateIndex: true,
      // }
    );
    console.log("🟢 Підключення до MongoDB")
  } catch (error) {
    console.error("❌ Помилка підключення до MongoDB:", error);
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
