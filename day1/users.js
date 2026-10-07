const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My Node.js Server</title></head>");
  if (req.url === "/") {
    // redirecting to the home page
    res.write("<body><h1>Hello, Node.js!</h1></body>");
    return res.end();
  } else if (req.url === "/products") {
    // redirecting to the products page
    res.write("<body><h1>Products</h1></body>");
    return res.end();
  }
  res.write("<body><h1>Page Not Found</h1></body>"); // redirecting to the page not found page runs if the user enters a wrong url
  res.write("</html>");
});
const Port = 3001;
server.listen(Port, () => {
  // listening to the server on port 3001
  console.log(`Server is running on http://localhost:${Port}`); // logging the server address to the console
});
