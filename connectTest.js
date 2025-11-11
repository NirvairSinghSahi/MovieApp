// connectTest.js
require("dotenv").config();
const mongoose = require("mongoose");

const testConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connection test successful!");
  } catch (error) {
    console.error("❌ Connection test failed:", error.message);
  } finally {
    mongoose.connection.close();
  }
};

testConnection();
