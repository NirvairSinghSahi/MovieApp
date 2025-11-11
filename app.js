// app.js
require("dotenv").config();
const express = require("express");
const path = require("path");
const connectDB = require("./config/db");

const app = express();

// Connect to MongoDB
connectDB();

// Set Pug as view engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Routes placeholder
app.get("/", (req, res) => {
  res.send("🎬 Movie App Server Running");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
