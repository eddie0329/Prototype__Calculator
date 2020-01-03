import Sum from "./Sum.js";
import Sub from "./Sub.js";
import Div from "./Div.js";
import Mul from "./Mul.js";

const sum = new Sum();
const sub = new Sub();
const div = new Div();
const mul = new Mul();

const input = "1+2";
let n1, n2;

for (let i = 0; i < input.length; i++) {
  if (input[i] === "+") {
  } else if (input[i] === "-") {
  } else if (input[i] === "*") {
  } else if (input[i] === "/") {
  }
}

console.log(`n1: ${n1}, n2: ${n2}`);
