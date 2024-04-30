const calculate = function (a, b, operator) {
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
    }
};
const args = {
    a: 2,
    b: 3,
    operator: "+",
};
const values = [2, 3, "+"];
const result = calculate.apply(args, values);
console.log(result);
  