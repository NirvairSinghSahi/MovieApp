// models/Movie.js
const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    trim: true,
  },
  year: {
    type: Number,
    required: [true, "Release year is required"],
    min: [1888, "Year must be valid"], // first movie year :)
  },
  genre: {
    type: String,
    required: [true, "Genre is required"],
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
    required: [true, "Rating is required"],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Movie", MovieSchema);
