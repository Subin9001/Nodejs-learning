const Home = require("../models/home");

exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnbHomes",
    }),
  );
};

exports.getindex = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnbHomes",
    }),
  );
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings",
  });
};
exports.getfavourtieList = (req, res, next) => {
  res.render("store/favourite-list", {
    pageTitle: "My favourites",
  });
};
