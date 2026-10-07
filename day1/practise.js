const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/home") {
    res.write("<body><h1>Hello, Node.js!</h1></body>");
    return res.end();
  }
  if (req.url === "/products") {
    res.write("<body><h1>Products</h1></body>");
    return res.end();
  }
  if (req.url === "/mens") {
    res.write("<body><h1>Mens</h1></body>");
    return res.end();
  }
  if (req.url === "/womens") {
    res.write("<body><h1>Womens</h1></body>");
    return res.end();
  }
  if (req.url === "/promotions") {
    res.write("<body><h1>Promotions</h1></body>");
    return res.end();
  }

  res.write(`<html>
    <head><title>My Node.js Server</title></head>
    <body>
      <h1>Myntra</h1>
  <nav>
    <ul>
      <li><a href="/home">Home</a></li>
      <li><a href="/products">Products</a></li>
      <li><a href="/mens">mens</a></li>
      <li><a href="/womens">womens</a></li>
      <li><a href="/promotions">Promotions</a></li>

    </ul>
  </nav>
  </body>
  </html>`);
  res.end();
});
const Port = 3001;
server.listen(Port, () => {
  console.log(`Server is running on http://localhost:${Port}`);
});
