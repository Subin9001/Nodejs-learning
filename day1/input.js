const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>My Node.js Server</title></head>");
    res.write("<body><h1>Enter your details:</h1>");
    res.write('<form action = "/submit-details" method = "POST">');
    res.write('<label for="name">Name:</label>');
    res.write(
      '<input type="text" id="name" name="name" placeholder="Enter your name"><br><br>',
    );
    res.write('<label for ="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for ="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write("<br><br>");
    res.write('<input type="submit" value="Submit">');
    res.write("</form>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method === "POST"
  ) {
    fs.writeFileSync(
      "userDetails.txt",
      "Nitai User details submitted successfully!",
    );
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  } else if (req.url === "/products") {
    res.write("<body><h1>Products</h1></body>");
    return res.end();
  }
  res.write("<body><h1>Page Not Found</h1></body>");
  res.write("</html>");
});
const Port = 3001;
server.listen(Port, () => {
  console.log(`Server is running on http://localhost:${Port}`);
});
