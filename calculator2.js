// we need to keep track of the number we are calculating
// let's not definte it yet
let activeNumber;

let firstNumber;
let secondNumber;

let operator;

function operate(operator,firstNumber,secondNumber) {
    return operator(firstNumber,secondNumber);
}


// declare a variable for the div where the numbers go
const calcScreen = document.querySelector(".calcScreen")

// possible states when clicking a number button

// the calculator is clear
    // display it
    // assign activeNumber
const seven = document.querySelector(".seven")
seven.addEventListener("click", () => {
    if (activeNumber === undefined) {
        // assign firstNumber
        firstNumber = activeNumber = Number(seven.textContent)
        // display it
        calcScreen.textContent = firstNumber
    } else { // if activeNumber is not undefined then we must be in the second stage
        // assign secondNumber
        secondNumber = Number(seven.textContent)
        // display it
        calcScreen.textContent = secondNumber
    }
    console.log(firstNumber,secondNumber,activeNumber)
})

const eight = document.querySelector(".eight")
eight.addEventListener("click", () => {
    if (activeNumber === undefined) {
        // assign firstNumber
        firstNumber = activeNumber = Number(eight.textContent)
        // display it
        calcScreen.textContent = firstNumber
    } else { // if activeNumber is not undefined then we must be in the second stage
        // assign secondNumber
        secondNumber = Number(eight.textContent)
        // display it
        calcScreen.textContent = secondNumber
    }
    console.log(firstNumber,secondNumber,activeNumber)
})


// add button
const addBtn = document.querySelector(".addBtn")
addBtn.addEventListener("click", () => {
    operator = add
    console.log("the operation is " + operator)
 })
 // subtract button
const subtractBtn = document.querySelector(".subtractBtn")
subtractBtn.addEventListener("click", () => {
    operator = subtract
    console.log("the operation is " + operator)
 })
  // multiply button
const multiplyBtn = document.querySelector(".multiplyBtn")
multiplyBtn.addEventListener("click", () => {
    operator = multiply
    console.log("the operation is " + operator)
 })
    
// equals button
const equalsBtn = document.querySelector(".equalsBtn")
equalsBtn.addEventListener("click", () => {
    // assign activeNumber and firstNumber to result of operate function
    activeNumber = firstNumber = operate(operator,firstNumber,secondNumber)
    // display activeNumber
    calcScreen.textContent = activeNumber
    // make secondNumber undefined
    secondNumber = undefined
    // log result
    console.log(activeNumber)
})

// clear
const clear = document.querySelector(".clear")
clear.addEventListener("click", () => {
    calcScreen.textContent = ""
    activeNumber = firstNumber = secondNumber = undefined
    console.log(firstNumber,secondNumber,activeNumber)
})



const add = function(x,y) {
	return x + y;
};
const subtract = function(x,y) {
	return x - y;
};
const multiply = function(x,y) {
	return x * y;
};