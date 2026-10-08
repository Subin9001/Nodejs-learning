const { sumRequestHandler } = require("./handler");

const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/" && req.method === "GET") {
    res.write(`
      <html>
  <head>
    <title>Practice 2</title>
  </head>
  <body>
    <nav>
      <ul>
        <li><a href="/register">Register</a></li>
      </ul>
    </nav>
  </body>
</html>
      `);
    return res.end();
  } else if (req.url.toLowerCase() === "/register" && req.method === "GET") {
    res.write(`
      <html>
  <head>
    <title>Practice 2</title>
  </head>
  <body>
    <nav>
      <ul>
         <li><a href="/">Home</a></li>
      </ul>
    </nav>
      <h1>Welcome to the Student Page</h1>
  </body>
</html>
      `);
    res.write("<body><h1>Enter your details:</h1>");
    res.write('<form action = "/submit-details" method = "POST">');
    res.write('<label for="name">Name:</label>');
    res.write(
      '<input type="text" id="name" name="name" placeholder="Enter your name"><br><br>',
    );
    res.write(`<label for="age">Age</label>
      <input type="number" id="age" name="age"></input>
      <br><br>
      <label for="course">course:</label>
<select id="course" name="course">
  <option value="nepal">Nepali</option>
  <option value="hindi">Hindi</option>
  <option value="english">English</option>
  <option value="maths">Math</option>
</select>
<br><br>
      `);
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
    return sumRequestHandler(req, res);
  } else if (req.url === "/success" && req.method === "GET") {
    res.write("<h1>successfully registered</h1>");
  }
  return res.end();
};
exports.userRequestHandler = userRequestHandler;
