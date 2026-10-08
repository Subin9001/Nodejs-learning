const http = require("http");
const { userRequestHandler } = require("./practice1");
const server = http.createServer(userRequestHandler);

const Port = 3001;
server.listen(Port, () => {
  console.log(`Server is running on http://localhost:${Port}`);
});
