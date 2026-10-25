const path = require("path");
const express = require("express");
const contactusRouter = express.Router();
const rootDir = require("../utils/pathutils");

contactusRouter.get("/contact-us", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact.html"));
});
contactusRouter.post("/contact-us", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "contactsubmit.html"));
});
module.exports = contactusRouter;
