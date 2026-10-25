const path = require("path");
//external module
const express = require("express");
//local Module
const { storeRouter } = require("./routes/storeRouters");
const { hostRouter } = require("./routes/hostRouter");
const rootDir = require("./utils/pathutils");
const errorsController = require("./controllers/errors");

const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded());
app.use(storeRouter);
app.use("/host", hostRouter);

app.use(errorsController.errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
