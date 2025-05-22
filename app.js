const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser')
const mongoose = require("mongoose");
const path = require("path");
const loginRouter = require("./controllers/login");
const usersRouters = require("./controllers/users"); 


(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI_TEST);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
})();

//Middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rutas BackEnd

app.use("/api/users", usersRouters);
app.use("/api/login", loginRouter);

//Rutas FrontEnd
app.use("/", express.static(path.resolve("views", "home")));
app.use("/styles", express.static(path.resolve("views", "styles")));
app.use("/signup", express.static(path.resolve("views", "signup")));
app.use("/login", express.static(path.resolve("views", "login")));
app.use("/components", express.static(path.resolve("views", "components")));
app.use("/images", express.static(path.resolve("img")));

//Morgan
app.use(morgan('tiny'))



module.exports = app;