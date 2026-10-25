const express = require("express");
const path = require("path");
const rootDir = require("../utils/pathutils");

const registrationRouter = express.Router();

// Bonus: Middleware only for registration routes
registrationRouter.use((req, res, next) => {
  console.log("Registration route accessed");
  next();
});

// GET /register
registrationRouter.get("/register", (req, res) => {
  res.sendFile(path.join(rootDir, "views/register.html"));
});

// POST /register
registrationRouter.post("/register", (req, res) => {
  console.log("Submitted student details:", req.body);

  res.redirect("/success");
});

// GET /success
registrationRouter.get("/success", (req, res) => {
  res.sendFile(path.join(rootDir, "views/success.html"));
});

module.exports = registrationRouter;
