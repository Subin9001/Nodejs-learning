const calculation = require("./math");

console.log(calculation.add(10, 5));
console.log(calculation.subtract(10, 5));
console.log(calculation.multiply(10, 5));
console.log(calculation.divide(10, 5));

const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);
  res.write(`
    <h1>Calculator</h1>
    <p>Addition: ${calculation.add(10, 5)}</p>
    <p>Subtraction: ${calculation.subtract(10, 5)}</p>
    <p>Multiplication: ${calculation.multiply(10, 5)}</p>
    <p>Division: ${calculation.divide(10, 5)}</p>
  `);
  res.end();
};
exports.userRequestHandler = userRequestHandler;
