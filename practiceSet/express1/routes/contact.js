//core module
const path = require("path");

//external module
const express = require("express");
const contactRouter = express.Router();

contactRouter.get("/contact-us", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "contact.html"));
});

contactRouter.post("/contact-us", (req, res, next) => {
  console.log(req.body.name);
  console.log(req.body.email);
  res.sendFile(path.join(__dirname, "../", "views", "contact-submit.html"));
});
exports.contactRouter = contactRouter;
