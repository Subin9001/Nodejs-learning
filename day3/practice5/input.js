const fs = require("fs");
const { inoutRequestHandler } = require("./handler");
const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.write(`
      <!doctype html>
<html>
  <head>
    <title>Practice 2</title>
  </head>
  <body>
    <h1>Home Page</h1>
    <nav>
      <ul>
        <li><a href="/add">Add Notes</a></li>
        <li><a href="/read">Read Notes</a></li>
      </ul>
    </nav>
  </body>
</html>
 `);
    return res.end();
  } else if (req.url.toLowerCase() === "/add" && req.method === "GET") {
    res.write(`
      <html>
      <body>
      <form action="/save-note" method="POST">
          <input type="text" name="note" placeholder="Enter your note">
          <button type="submit">Save Note</button>
        </form>
        </body>
        </html>
      `);
    return res.end();
  } else if (req.url.toLowerCase() === "/save-note" && req.method === "POST") {
    return inoutRequestHandler(req, res);
  } else if (req.url.toLowerCase() === "/success" && req.method === "GET") {
    res.write("<h1>Successfully Added Notes</h1>");
    res.write(`
      <!doctype html>
<html>
  <head>
    <title>Practice 2</title>
  </head>
  <body>
    <nav>
      <ul>
        <li><a href="/">home</a></li>
      </ul>
    </nav>
  </body>
</html>
 `);
    return res.end();
  } else if (req.url === "/read" && req.method === "GET") {
    fs.readFile("notes.txt", "utf8", (error, data) => {
      if (error) {
        res.statusCode = 500;
        return res.end("Could not read notes.");
      }

      res.write("<h1>My Notes</h1>");
      res.write(`<pre>${data}</pre>`);
      return res.end();
    });

    return;
  }
  res.write(`
    
      <!doctype html>
<html>
  <head>
    <title>error</title>
  </head>
  <body>
  <p>404:page not found</p>
  </body>
</html>

    `);
  res.end();
};
exports.userRequestHandler = userRequestHandler;
