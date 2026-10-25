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

    let students = [];

    if (fs.existsSync("students.txt")) {
      const existingData = fs.readFileSync("students.txt", "utf8");

      if (existingData) {
        students = JSON.parse(existingData);
      }
    }

    // Add new student
    students.push(bodyObject);

    // Save all students
    fs.writeFile("students.txt", JSON.stringify(students, null, 2), (error) => {
      if (error) {
        console.log("Error writing file:", error);
        return;
      }

      console.log("File written successfully");
    });

    // Redirect after saving
    res.statusCode = 302;
    res.setHeader("Location", "/success");
    return res.end();
    // fs.writeFileSync("students.txt", JSON.stringify(bodyObject));
  });
};
exports.sumRequestHandler = sumRequestHandler;
