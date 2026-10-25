const fs = require("fs");
const { URLSearchParams } = require("url");
const inoutRequestHandler = (req, res) => {
  console.log(req.url, req.method);
  const body = [];
  req.on("data", (chunk) => {
    console.log(chunk);
    body.push(chunk);
  });
  req.on("end", () => {
    const parseBody = Buffer.concat(body).toString();
    console.log(parseBody);
    const params = new URLSearchParams(parseBody);
    console.log(params);
    const bodyObject = Object.fromEntries(params);
    console.log(bodyObject);

    let notesRecord = [];
    if (fs.existsSync("notes.txt")) {
      fs.readFile("notes.txt", "utf8", (error, existingData) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log(existingData);
        if (existingData) {
          notesRecord = JSON.parse(existingData);
        }
      });
    }
    // Add new notes
    notesRecord.push(bodyObject);

    // Save all notes
    fs.writeFile("notes.txt", JSON.stringify(notesRecord, null, 2), (error) => {
      if (error) {
        console.log("Error writing file:", error);
        return;
      }
      console.log("notes written successfully");

      res.statusCode = 302;
      res.setHeader("Location", "/success");
      return res.end();
    });
  });
};
exports.inoutRequestHandler = inoutRequestHandler;
