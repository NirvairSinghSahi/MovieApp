const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../middleware/authMiddleware');
const Movie = require('../models/Movie');

// 📄 GET /movies
router.get('/', ensureAuthenticated, async (req, res) => {
  const movies = await Movie.find({ user: req.user.id }).sort({ createdAt: -1 });
  res.render('movies/list', { user: req.user, movies });
});

// ➕ GET /movies/add
router.get('/add', ensureAuthenticated, (req, res) => {
  res.render('movies/add');
});

// 💾 POST /movies/add
router.post('/add', ensureAuthenticated, async (req, res) => {
  const { title, genre, year } = req.body;
  if (!title || !genre || !year) {
    req.flash('error_msg', 'Please fill in all fields.');
    return res.redirect('/movies/add');
  }
  const newMovie = new Movie({ title, genre, year, user: req.user.id });
  await newMovie.save();
  req.flash('success_msg', 'Movie added successfully!');
  res.redirect('/movies');
});

// 🗑️ GET /movies/delete/:id
router.get('/delete/:id', ensureAuthenticated, async (req, res) => {
  await Movie.deleteOne({ _id: req.params.id, user: req.user.id });
  req.flash('success_msg', 'Movie deleted successfully.');
  res.redirect('/movies');
});

module.exports = router;
