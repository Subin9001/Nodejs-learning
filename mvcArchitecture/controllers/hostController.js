//controller homes.js
const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/add-home", { pageTitle: "add-home" });
};

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("host/host-home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Host Homes List",
    }),
  );
};
exports.postAddHome = (req, res, next) => {
  console.log("home registered successfully for :", req.body);
  const { houseName, price, location, rating } = req.body;
  const home = new Home(houseName, price, location, rating);
  home.save();

  res.render("host/home-added", { pageTitle: "home added successfully" });
};
