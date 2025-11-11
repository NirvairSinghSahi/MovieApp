// routes/movies.js
const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");
const { ensureAuth } = require("../middleware/authMiddleware");

// List all movies
router.get("/", ensureAuth, async (req, res) => {
  const movies = await Movie.find({ owner: req.user._id });
  res.render("movies/list", { movies });
});

// Add movie (form)
router.get("/add", ensureAuth, (req, res) => res.render("movies/add"));

// Create movie
router.post("/add", ensureAuth, async (req, res) => {
  try {
    const movie = new Movie({ ...req.body, owner: req.user._id });
    await movie.save();
    res.redirect("/movies");
  } catch (err) {
    res.status(500).send("❌ Error adding movie");
  }
});

// Edit movie (form)
router.get("/edit/:id", ensureAuth, async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.render("movies/edit", { movie });
});

// Update movie
router.post("/edit/:id", ensureAuth, async (req, res) => {
  await Movie.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/movies");
});

// Delete movie
router.get("/delete/:id", ensureAuth, async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.redirect("/movies");
});

module.exports = router;
