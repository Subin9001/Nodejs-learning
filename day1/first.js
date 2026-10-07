const fs = require("fs");
fs.writeFile("output.txt", "Hello World", (err) => {
  if (err) console.error(err);
  console.log("File saved!");
});

// console.log("Subin Aryal");
