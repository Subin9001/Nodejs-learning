const add = (a = 5, b = 5) => {
  return a + b;
};
const subtract = (a = 5, b = 5) => {
  return a - b;
};
const multiply = (a = 5, b = 5) => {
  return a * b;
};
const divide = (a = 5, b = 5) => {
  return a / b;
};

module.exports = { add, subtract, multiply, divide };
