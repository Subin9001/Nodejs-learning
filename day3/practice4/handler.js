const fs = require("fs");
const sumRequestHandler = (req, res) => {
  console.log("Sum request handler called", req.url, req.method);
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
    fs.writeFileSync("students.txt", JSON.stringify(bodyObject));
  });
  res.statusCode = 302;
  res.setHeader("Location", "/success");
  return res.end();
};
exports.sumRequestHandler = sumRequestHandler;
