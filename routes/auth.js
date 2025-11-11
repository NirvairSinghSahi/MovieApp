// routes/auth.js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const User = require("../models/User");

// Register page
router.get("/register", (req, res) => res.render("auth/register"));

// Register logic
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      req.flash("error_msg", "Email already registered");
      return res.redirect("/register");
    }
    user = new User({ name, email, password });
    await user.save();
    req.flash("success_msg", "Registration successful! Please log in.");
    res.redirect("/login");
  } catch (err) {
    req.flash("error_msg", "Server error");
    res.redirect("/register");
  }
});

// Login page
router.get("/login", (req, res) => res.render("auth/login"));

// Login logic
router.post("/login", (passport.authenticate("local", {
  successRedirect: "/movies",
  failureRedirect: "/login",
  failureFlash: true,
})));



// Logout
router.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/login");
  });
});

module.exports = router;
