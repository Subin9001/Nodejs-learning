const { sumRequestHandler } = require("./sum");
const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    res.write(
      `
  <html>
    <head><title>Calculator</title></head>
    <body>
      <h1>Welcome to the Calculator</h1>
      <a href="/calculator">Calculator</a>
    </body>
  </html>`,
    );
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.write(`
  <html>
    <head><title>Calculator</title></head>
    <body>
      <form action="/calculate-result" method="POST">
      <h1>Welcome to the Calculator Page</h1>
      <h1>Calculator</h1>
      <label for="num1">Number 1:</label>
      <input type="number" id="num1" name="num1">
      <label for="num2">Number 2:</label>
      <input type="number" id="num2" name="num2">
      <input type="submit" value="Sum">
      </form>
    </body>
  </html>`);
    return res.end();
  } else if (
    req.url.toLowerCase() === "/calculate-result" &&
    req.method === "POST"
  ) {
    return sumRequestHandler(req, res);
  }
  res.write(
    `
  <html>
    <head><title>Calculator</title></head>
    <body>
      <h1>404:Page not found</h1>
      <a href="/">Go to home</a>
    </body>
  </html>`,
  );
};
exports.requestHandler = requestHandler;
