const path = require("path");
//external module
const express = require("express");
//local Module
const userRouter = require("./routes/userRouters");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/pathutils");

const app = express();

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
