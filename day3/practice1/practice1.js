const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/" && req.method === "GET") {
    res.write(`
    <html>
    <head>
    <title>Practice 1</title>
    </head>
    <body>
    <h1>Welcome to Student Portal</h1>
    <nav>
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/students">Students</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    </body>
    </html>
 `);
    return res.end();
  } else if (req.url === "/about" && req.method === "GET") {
    res.write("<body><h1>This is a Node.js Practice Project.</h1></body>");
    res.write('<body> <li><a href="/">Home</a></li></body>');
    return res.end();
  } else if (req.url === "/students" && req.method === "GET") {
    res.write("<body><h1>Students</h1></body>");
    res.write(`
        <ol>
      <li>Ram</li>
      <li>Sita</li>
      <li>Hari</li>
      <li>Gita</li>
    </ol>
      `);
    res.write('<body> <li><a href="/">Home</a></li></body>');
    return res.end();
  } else if (req.url === "/contact" && req.method === "GET") {
    res.write("<body><h1>Contact</h1></body>");
    res.write("<body>Contact: student@example.com</body>");
    res.write('<body> <li><a href="/">Home</a></li></body>');
    return res.end();
  } else if (
    (req.url === "/about" ||
      req.url === "/students" ||
      req.url === "/contact") &&
    req.method === "POST"
  ) {
    res.write("<h1>405 - Method Not Allowed</h1>");
    return res.end();
  }
  res.write("<body><h1>404 -Page Not Found</h1></body>");
  res.write('<body> <li><a href="/">Home</a></li></body>');
  return res.end();
};
exports.userRequestHandler = userRequestHandler;
