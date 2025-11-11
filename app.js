// app.js
require("dotenv").config();
const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const flash = require("connect-flash");
const connectDB = require("./config/db");
require("./config/passport")(passport);

const app = express();
connectDB();

// View engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Global variables for flash messages
app.use(function (req, res, next) {
  const success = req.flash('success_msg');
  const errorMsg = req.flash('error_msg');
  const error = req.flash('error');

  res.locals.success_msg = success.length > 0 ? success[0] : null;
  res.locals.error_msg = errorMsg.length > 0 ? errorMsg[0] : null;
  res.locals.error = error.length > 0 ? error[0] : null;
  res.locals.user = req.user || null;
  next();
});


// Routes
app.use("/", require("./routes/auth"));
app.use("/movies", require("./routes/movies"));

app.get("/", (req, res) => res.redirect("/login"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
