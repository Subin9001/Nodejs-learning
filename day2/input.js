const fs = require("fs");
const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);

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
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const params = new URLSearchParams(parsedBody);
      console.log(params);
      // const bodyObject = {};
      // for (const [key, value] of params.entries()) {
      //   bodyObject[key] = value;
      // }
      //OR
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);
      fs.writeFileSync("userDetails.txt", JSON.stringify(bodyObject));
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.write("<body><h1>Page Not Found</h1></body>");
  res.write("</html>");
};
// module.exports = userRequestHandler;
exports.userRequestHandler = userRequestHandler;
