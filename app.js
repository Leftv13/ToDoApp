require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const loginRouter = require("./controllers/login");

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI_TEST);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
})();

// Middleware
app.use(express.json());

//Rutas Frontend
app.use("/", express.static(path.resolve("views", "home")));
app.use("/styles", express.static(path.resolve("views", "styles")));
app.use("/signup", express.static(path.resolve("views", "signup")));
app.use("/login", express.static(path.resolve("views", "login")));
app.use("/components", express.static(path.resolve("views", "components")));
app.use("/images", express.static(path.resolve("img")));

// Rutas Backend
// app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);

module.exports = app;