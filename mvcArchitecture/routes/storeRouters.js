const path = require("path");
const express = require("express");
const storeRouter = express.Router();

const rootDir = require("../utils/pathutils");
//local module
const storeController = require("../controllers/storeController");

storeRouter.get("/", storeController.getindex);
storeRouter.get("/homes", storeController.getHomes);
storeRouter.get("/bookings", storeController.getBookings);
storeRouter.get("/favourite-list", storeController.getfavourtieList);
exports.storeRouter = storeRouter;
