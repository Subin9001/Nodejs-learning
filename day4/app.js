const http = require("http");
const { userRequestHandler } = require("./input");
const server = http.createServer(userRequestHandler);

const Port = 3001;
server.listen(Port, () => {
  console.log("hello");
  console.log(`Server is running on http://localhost:${Port}`);
});
