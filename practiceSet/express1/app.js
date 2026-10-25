//core module
const path = require("path");

//external module
const express = require("express");
const app = express();

//local module
const { contactRouter } = require("./routes/contact");

app.use(express.urlencoded());

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});
app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "./views/home.html"));
});
app.use(contactRouter);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "./views/404.html"));
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
