const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../middleware/authMiddleware');
const Movie = require('../models/Movie');

// 📖 Read all movies
// routes/movies.js

router.get('/', ensureAuthenticated, async (req, res, next) => {
  try {
    const searchQuery = req.query.search || '';
    const movies = await Movie.find({
      $or: [
        { title: { $regex: searchQuery, $options: 'i' } },
        { genre: { $regex: searchQuery, $options: 'i' } }
      ]
    });
    res.render('movies/list', { movies, searchQuery });
  } catch (err) {
    next(err);
  }
});


// ➕ Show add movie form
router.get('/add', ensureAuthenticated, (req, res) => {
  res.render('movies/add');
});

// 🧾 Handle add movie form
router.post('/add', ensureAuthenticated, async (req, res) => {
  const { title, genre, year } = req.body;
  const movie = new Movie({ title, genre, year });
  await movie.save();
  req.flash('success_msg', 'Movie added successfully!');
  res.redirect('/movies');
});

// ✏️ Edit movie form
router.get('/edit/:id', ensureAuthenticated, async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.render('movies/edit', { movie });
});

// 🔄 Handle edit submission
router.post('/edit/:id', ensureAuthenticated, async (req, res) => {
  const { title, genre, year } = req.body;
  await Movie.findByIdAndUpdate(req.params.id, { title, genre, year });
  req.flash('success_msg', 'Movie updated successfully!');
  res.redirect('/movies');
});

// ❌ Delete movie
router.post('/delete/:id', ensureAuthenticated, async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  req.flash('success_msg', 'Movie deleted successfully!');
  res.redirect('/movies');
});

module.exports = router;
