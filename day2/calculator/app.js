const http = require("http");
const { requestHandler } = require("./handler");

const server = http.createServer(requestHandler);

const Port = 3001;
server.listen(Port, () => {
  console.log(`Server is running on http://localhost:${Port}`);
});
