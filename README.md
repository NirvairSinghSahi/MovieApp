🎬 MovieApp – Full Stack Node.js + Express + MongoDB Application

A simple and secure movie management application where each user can register, log in, and manage their own movie list privately.

🚀 Live Deployment

Your project is deployed on Railway.
Replace the placeholder below with your actual domain:

🔗 Live App: movieapp-production-96c3.up.railway.app

📌 Project Overview

MovieApp is a full-stack web application built using Node.js, Express, MongoDB Atlas, and Passport.js.
It allows users to:

Register securely (password hashing powered by bcrypt)

Log in with sessions (stateful auth)

Add, view, edit, and delete movies

Keep their movies private — each user only sees their own movies

View movies stored by them in MongoDB

This project demonstrates:

Authentication (local strategy)

CRUD operations

MongoDB schema design

Express routing

Protected routes using middleware

Basic UI using Pug templates + CSS

🛠️ Tech Stack
Backend

Node.js

Express.js

MongoDB + Mongoose

Passport.js (Local Strategy)

bcryptjs

express-session + connect-mongo

Frontend

Pug template engine

Custom CSS

Deployment

Railway (Node.js environment)

MongoDB Atlas (database)

📂 Project Structure
MovieApp/
│
├── app.js                 # Main Express application  
├── db.js                  # MongoDB connection  
├── passport.js            # Authentication config  
├── authMiddleware.js      # Route protection middleware  
├── errorHandler.js        # Error handler  
│
├── models/
│   ├── User.js            # User schema  
│   └── Movie.js           # Movie schema  
│
├── routes/
│   ├── auth.js            # Login/Register routes  
│   └── movies.js          # Movie CRUD routes  
│
├── views/                 # Pug templates  
│   ├── layout.pug         # Main layout  
│   ├── login.pug          # Login page  
│   ├── register.pug       # Registration page  
│   ├── list.pug           # Movie list  
│   ├── add.pug            # Add movie form  
│   └── edit.pug           # Edit movie form  
│
├── public/
│   └── style.css          # Stylesheet  
│
├── .env                   # Environment variables  
└── package.json           # Dependencies & scripts

✨ Features
🔐 Authentication

User registration

Secure password hashing with bcrypt

Session-based login

Flash messages for success/error

Protected routes (only logged-in users can view movies)

🎞️ Movie Management

Each user has access ONLY to their own movies:

Add Movie

Edit Movie

Delete Movie

Search movies by title or genre

🌐 Deployment Ready

Fully deployed on Railway

MongoDB Atlas cluster

Environment variables securely handled

🔧 Setup Instructions (Local Machine)
1️⃣ Clone the repo
git clone (https://github.com/NirvairSinghSahi/MovieApp.git)
cd MovieApp

2️⃣ Install dependencies
npm install

3️⃣ Create a .env file
PORT=3000
MONGO_URI=your_atlas_connection_string
SESSION_SECRET=your_secret_key

4️⃣ Start the app
npm run dev


or

npm start

🧪 Testing the App
Visit:
http://localhost:3000


You should be able to:

Register a user

Log in

Add movies

Edit movies

Delete movies

Log out

🗄️ Database Schema
Users Collection
{
  _id: ObjectId,
  username: String,
  email: String,
  password: String (hashed),
  createdAt: Date
}

Movies Collection
{
  _id: ObjectId,
  title: String,
  genre: String,
  year: Number,
  createdBy: ObjectId, // Reference to users._id
  createdAt: Date
}

📸 Screenshots (Add after deployment)

You may upload:

Login page

Register page

Movie list

Add movie form

Edit movie form

Successfully deployed Railway dashboard

🧑‍🏫 Instructor Access

Your instructor has read-only MongoDB Atlas access to verify:

Database

Collections

Documents

📜 License

This project is for academic use in the Humber College CPAN course.
