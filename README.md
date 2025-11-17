# 🎬 MovieApp – Full Stack Node.js + Express + MongoDB Application

A simple and secure movie management application where each user can register, log in, and manage their own movie list privately.

---

## 🚀 Live Deployment

Your project is deployed on **Railway**.

🔗 **Live App:** https://movieapp-production-96c3.up.railway.app

---

## 📌 Project Overview

MovieApp is a full-stack web application built using **Node.js**, **Express**, **MongoDB Atlas**, and **Passport.js**.

Key functionality includes:

- 🔐 Secure user registration (bcrypt password hashing)
- 🔑 Login with session-based authentication
- 🎞️ Add, view, edit, delete movies
- 🔒 User-specific movie storage (each user only sees their own movies)
- 🌐 Cloud-hosted DB using MongoDB Atlas

This project demonstrates:

- Authentication (Passport Local Strategy)  
- CRUD operations  
- MongoDB schema design  
- Express routing  
- Protected routes using middleware  
- UI rendering using Pug templates  

---

## 🛠️ Tech Stack

### **Backend**
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- Passport.js  
- bcryptjs  
- express-session  
- connect-mongo  

### **Frontend**
- Pug Template Engine  
- Custom CSS  

### **Deployment**
- Railway (Node.js environment)  
- MongoDB Atlas  

---

## 📂 Project Structure

MovieApp/
│
├── app.js # Main Express application
├── db.js # MongoDB connection
├── passport.js # Authentication config
├── authMiddleware.js # Route protection middleware
├── errorHandler.js # Error handler
│
├── models/
│ ├── User.js # User schema
│ └── Movie.js # Movie schema
│
├── routes/
│ ├── auth.js # Login/Register routes
│ └── movies.js # Movie CRUD routes
│
├── views/ # Pug templates
│ ├── layout.pug # Main layout
│ ├── login.pug # Login page
│ ├── register.pug # Registration page
│ ├── list.pug # Movie list
│ ├── add.pug # Add movie form
│ └── edit.pug # Edit movie form
│
├── public/
│ └── style.css # Stylesheet
│
├── .env # Environment variables
└── package.json # Dependencies & scripts

yaml
Copy code

---

## ✨ Features

### 🔐 **Authentication**
- Secure registration  
- Hashed passwords using bcrypt  
- Login with sessions  
- Flash messages for errors & success  
- Protected pages for logged-in users only  

### 🎞️ **Movie Management**
Each user can:
- ➕ Add movies  
- ✏️ Edit movies  
- 🗑️ Delete movies  
- 🔍 Search by title or genre  
- 👀 Only see *their own* movies  

### 🌐 **Deployment**
- Fully deployed on Railway  
- MongoDB Atlas as cloud database  
- `.env` support for security  

---

## 🔧 Setup Instructions (Local Machine)

### 1️⃣ Clone the repo
```bash
git clone https://github.com/NirvairSinghSahi/MovieApp.git
cd MovieApp
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Create a .env file
env
Copy code
PORT=3000
MONGO_URI=your_atlas_connection_string
SESSION_SECRET=your_secret_key
4️⃣ Start the app
bash
Copy code
npm run dev
or:

bash
Copy code
npm start
🧪 Testing the App
Visit:

arduino
Copy code
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
json
Copy code
{
  "_id": "ObjectId",
  "username": "String",
  "email": "String",
  "password": "String (hashed)",
  "createdAt": "Date"
}
Movies Collection
json
Copy code
{
  "_id": "ObjectId",
  "title": "String",
  "genre": "String",
  "year": "Number",
  "createdBy": "ObjectId (reference to users._id)",
  "createdAt": "Date"
}
📸 Screenshots (Add after deployment)
You may include:

Login page

Register page

Movie list

Add movie form

Edit movie form

Railway deployment dashboard

🧑‍🏫 Instructor Access
Your instructor has read-only MongoDB Atlas access to verify:

Database

Collections

Documents

📜 License
This project is for academic use in the Humber College CPAN course.

