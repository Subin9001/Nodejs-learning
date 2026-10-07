const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.write(`<html>
    <head><title>Calculator</title></head>
    <body>
     <h1>Welcome to the Home Page</h1>
  <nav>
    <ul>
      <li><a href="/calculator">Calculator</a></li>
    </ul>
  </nav>
  </body>
  </html>`);
    res.end();
    return res.end();
  }
  if (req.url === "/calculator") {
    res.write(`<html>
    <head><title>Calculator</title></head>
    <body>
     <h1>Welcome to the Calculator Page</h1>
    <h1>Calculator</h1>
  <label for="num1">Number 1:</label>
  <input type="number" id="num1" name="num1">
  <label for="num2">Number 2:</label>
  <input type="number" id="num2" name="num2">
  <button onclick="calculate()">Calculate</button>
  <p id="result"></p>
</body>
<script>
  function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 + num2;
    document.getElementById('result').textContent = 'Result: ' + result;
  }
</script>
  </body>
  </html>`);
    return res.end();
  }
});
const Port = 3001;
server.listen(Port, () => {
  console.log(`Server is running on http://localhost:${Port}`);
});
