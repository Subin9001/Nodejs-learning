const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/" && req.method === "GET") {
    res.write(`
<html>      
  <head>
    <title>Practice 2</title>
  </head>
  <body>
    <nav>
      <ul>
        <li><a href="/calculator">Calculator</a></li>
      </ul>
    </nav>
  </body>
</html>
      `);
    return res.end();
  } else if (req.url === "/calculator" && req.method === "GET") {
    res.write(`
<html>      
  <head>
    <title>Calculator</title>
  </head>
  <body>
    <h1>Welcome to Calculator </h1>
    <nav>
      <ul>
        <li><a href="/">Go to Home</a></li>
      </ul>
    </nav>
    <form action="/calculator" method="POST">
    <label for="num1">Number 1:</label>
    <input type="number" id="num1" name="num1">
    <label for="num2">Number 2:</label>
    <input type="number" id="num2" name="num2">
    <br><br>
    <input type = "submit" value ="sum">
    <br><br>
    <input type = "submit" value ="subtract">
    <br><br>
    <input type = "submit" value ="multiply">
    </form>
  </body>
</html>
      `);
    return res.end();
  } else if (req.url === "/calculator" && req.method === "POST") {
    console.log("URL:", req.url);
    console.log("Method:", req.method);
    return res.end();
  }
};
exports.userRequestHandler = userRequestHandler;
