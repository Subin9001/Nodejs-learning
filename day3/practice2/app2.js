const http = require("http");
const { userRequestHandler } = require("./practice2");
const server = http.createServer(userRequestHandler);

const Port = 3000;
server.listen(Port, () => {
  console.log(`Server is Running on http://localhost:${Port}`);
});
