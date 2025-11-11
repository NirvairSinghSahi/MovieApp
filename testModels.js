// testModels.js
require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./models/User");
const Movie = require("./models/Movie");

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected for model test");

    const newUser = new User({
      name: "Test User",
      email: `user${Date.now()}@example.com`,
      password: "password123",
    });
    await newUser.save();
    console.log("✅ User saved!");

    const newMovie = new Movie({
      title: "Inception",
      description: "Dream inside a dream",
      year: 2010,
      genre: "Sci-Fi",
      rating: 9,
      owner: newUser._id,
    });
    await newMovie.save();
    console.log("✅ Movie saved!");

    await mongoose.connection.close();
    console.log("✅ Test complete, connection closed.");
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
})();
