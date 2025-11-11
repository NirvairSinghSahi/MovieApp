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
    if (user) return res.status(400).send("User already exists");
    user = new User({ name, email, password });
    await user.save();
    res.send("✅ Registration successful!");
  } catch (err) {
    res.status(500).send("❌ Server error");
  }
});

// Login page
router.get("/login", (req, res) => res.render("auth/login"));

// Login logic
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return res.status(500).send("Server error");
    if (!user) return res.status(401).send(info?.message || "Login failed");

    req.logIn(user, (err) => {
      if (err) return res.status(500).send("Error logging in");
      res.send("✅ Login successful!");
    });
  })(req, res, next);
});



// Logout
router.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/login");
  });
});

module.exports = router;
