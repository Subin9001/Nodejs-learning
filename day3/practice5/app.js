const http = require("http");
const { userRequestHandler } = require("./input");
const server = http.createServer(userRequestHandler);

const Port = 3000;
server.listen(Port, () => {
  console.log(`server running at http://localhost:${Port} `);
});
