require("dotenv").config();
const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const connectDB = require("./config/db");
require("./config/passport")(passport);

const app = express();
connectDB();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
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

app.use("/", require("./routes/auth"));
app.use("/movies", require("./routes/movies"));

app.use(require("./middleware/errorHandler"));

const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("🎬 Movie App Server Running");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
