const number = prompt("Please Enter Your First Number: ")
const operator = prompt("Choose Operation:\n+ (Add) \n- (Subtract) \n/ (Divide) \n* (Multiply)")
const number1 = prompt("Now enter your second number: ")

let result;
if (operator == "*") {
    result = number * number1;
} 
else if (operator == "-") {
    result = number - number1;
} 
else if (operator == "/") {
    result = number / number1;
} 
else if (operator == "+") {
    result = parseInt(number) + parseInt(number1);
} 
alert(number + operator + number1 + "=" + result);

// if (isDigit(number) === false) {
//     alert("Invalid Input : Please enter a valid first number");
// } else {
//     const operator = prompt("Choose Operation:\n+ (Add) \n- (Subtract) \n/ (Divide) \n* (Multiply) ")
// }
// const number1 = prompt("Now enter your second number: ")
// if (isDigit(number1) === false) {
//     alert("Invalid Input : Please enter a valid second number");
// }
// let result;
// if (operatorVar === "*") {
//     result = number * number1;
// } else if (operatorVar === "-") {
//     result = number - number1;
// } else if (operatorVar === "/") {
//     result = number / number1;
// } else if (operatorVar === "+") {
//     result = parseInt(number) + parseInt(number1);
// } else {
//     alert("Invalid Operator");
// }
// alert(number + operator + number1 + "=" + result);

// Number.isDigit(input);