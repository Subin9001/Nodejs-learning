const express = require("express");
const path = require("path");
const rootDir = require("./utils/pathutils");

const app = express();
const registrationRouter = require("./routes/registration");

// Parse HTML form data
app.use(express.urlencoded({ extended: true }));

// Home page
app.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

// Registration routes
app.use(registrationRouter);

// 404 middleware
app.use((req, res) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
