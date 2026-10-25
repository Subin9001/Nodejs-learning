// core module
// const http = require("http");

// external module
const express = require("express");

//local module
const { userRequestHandler } = require("./input");

const app = express();

app.get("/", (req, res, next) => {
  console.log("came in first middleware", req.url, req.method);
  next();
});

app.post("/submit-details", (req, res, next) => {
  console.log("came in another middleware", req.url, req.method);
  res.send("<p> welcome to complete coding</p>");
});

app.use("/", (req, res, next) => {
  console.log("came in 2nd middleware", req.url, req.method);
  res.send("<p> welcome to subin aryal</p>");
});
// const server = http.createServer(app);

const Port = 3001;
app.listen(Port, () => {
  console.log(`Server is running on http://localhost:${Port}`);
});
