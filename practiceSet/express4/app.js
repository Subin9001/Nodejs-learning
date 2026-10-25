const path = require("path");
//external module
const express = require("express");
//local Module
const { userRouter } = require("./routes/userRouters");
const { hostRouter } = require("./routes/hostRouter");
const rootDir = require("./utils/pathutils");

const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page not found" });
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
