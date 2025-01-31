var firstNumber;
var secondNumber;
var operator;
var number;

function operate(operator,firstNumber,secondNumber) {
    return operator(firstNumber,secondNumber);
}

// declare a variable for the div where the numbers go
const calcScreen = document.querySelector(".calcScreen")

// when you click a number it appears in the input box
const one = document.querySelector(".one")
one.addEventListener("click", () => {
    calcScreen.textContent = one.textContent
    firstNumber = Number(one.textContent)
    console.log("the first number is "+firstNumber)
})
const two = document.querySelector(".two")
two.addEventListener("click", () => {
    // on click put text content into the div
    calcScreen.textContent = two.textContent
    secondNumber = Number(two.textContent)
    console.log("the second number is "+secondNumber)
})
const three = document.querySelector(".three")
three.addEventListener("click", () => {
    console.log("this button has been clicked")
})


// equals button
const equalsBtn = document.querySelector(".equalsBtn")
equalsBtn.addEventListener("click", () => {
    number = operate(operator,firstNumber,secondNumber)
    console.log(number)
})

// clear the screen when you press clear button
const clear = document.querySelector(".clear")
clear.addEventListener("click", () => {
    calcScreen.textContent = ""
})


// add button
const addBtn = document.querySelector(".addBtn")
addBtn.addEventListener("click", () => {
    operator = add
    console.log("the operation is " + operator)

 })
 // multiply button
const multiplyBtn = document.querySelector(".multiplyBtn")
multiplyBtn.addEventListener("click", () => {
    operator = multiply
    console.log("the operation is " + operator)

 })



// operations

const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
	return x - y;
};

const multiply = function(x,y) {
	return x * y;
};

// const sum = function(arr) {
// 	let total=0;
//     for (let i=0; i<arr.length;i++) {
//         total = total + arr[i]
//     }
//     return total
// };

// const multiply = function(arr) {
//   let total=1;
//     for (let i=0; i<arr.length;i++) {
//         total = total * arr[i]
//     }
//     return total
// };