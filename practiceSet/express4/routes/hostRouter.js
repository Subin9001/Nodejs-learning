const path = require("path");
const express = require("express");
const hostRouter = express.Router();
const rootDir = require("../utils/pathutils");
hostRouter.get("/add-home", (req, res, next) => {
  res.render("add-home", { pageTitle: "add-home" });
});
const registeredHomes = [];
hostRouter.post("/add-home", (req, res, next) => {
  console.log("home registered successfully for :", req.body.houseName);
  console.log(req.body);
  registeredHomes.push({
    houseName: req.body.houseName,
    price: req.body.price,
    location: req.body.location,
    rating: req.body.rating,
  });
  res.render("home-added", { pageTitle: "home added successfully" });
});
exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
