const path = require("path");

const express = require("express");
const app = express();
const homeRouter = require("./routes/homeRouter");
const contactusRouter = require("./routes/contactRouter");
const rootDir = require("./utils/pathutils");

app.use(express.static(path.join(rootDir, "public")));
app.use(express.urlencoded());
app.use(homeRouter);
app.use(contactusRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
