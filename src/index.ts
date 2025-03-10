import { Calculator } from "./calculaor";

const calc = new Calculator();

const operator: string = "-";
let a = 10;
let b = 20;
let result: number | string = 0;

switch (operator) {
  case "+":
    result = calc.add(a, b);
    break;
  case "-":
    result = calc.subtract(a, b);
    break;
  case "*":
    result = calc.multiply(a, b);
    break;
  case "/":
    result = calc.divide(a, b);
    break;
  default:
    console.log("Invalid operator");
}

console.log(`Result: ${result}`);
