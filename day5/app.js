const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("first middleware run", req.url, req.method);
  next();
});
app.use((req, res, next) => {
  console.log("second middleware run", req.url, req.method);
  next();
});
// app.use((req, res, next) => {
//   console.log(" response wala middleware run");
//   res.send("<p>response wala middleware</p>");
// });
app.get("/", (req, res, next) => {
  console.log(" Home Page", req.url, req.method);
  res.send("<p>Home Page</p>");
});
app.get("/contact-us", (req, res, next) => {
  console.log(" ContactUs Page run");
  res.send(`
    <html>
    <head><title>ContactUs</title></head>
    <body>
     <h1>Registration Form</h1>

    <form action="/contact-us" method="POST">
        <label>Name:</label>
        <input type="text" name="name" required>
        <br><br>

        <label>Email:</label>
        <input type="email" name="email" required>
        <br><br>

        <button type="submit">Submit</button>
    </form>
    </body>
    </html>
    `);
});
app.post("/contact-us", (req, res, next) => {
  console.log(" ContactUs Page returned");
  res.send("Respose submitted");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
