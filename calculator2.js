// we need to keep track of the number we are calculating
// let's not definte it yet
let activeNumber = 0;
let firstNumber;
let secondNumber;
let operator;

function operate(operator,firstNumber,secondNumber) {
    return operator(firstNumber,secondNumber);
}

// declare a variable for the div where the numbers go
const calcScreen = document.querySelector(".calcScreen")

// make a node list const
const numberButtons = document.querySelectorAll(".numberButton")

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (activeNumber === 0) {
            // if active number is zero then we are in the inital state
            // and we should set it to content of the button that is clicked
            // and we should keep it as a string
            // until we are ready to assign it as first number
            activeNumber = button.textContent
            // display it
            calcScreen.textContent = activeNumber
        } else { // if activeNumber is not undefined then we must be in the second stage
            // assign secondNumber
            secondNumber = Number(button.textContent)
            // display it
            calcScreen.textContent = secondNumber
        }
        console.log(firstNumber,secondNumber,activeNumber)
    })
})

// declare const to equal node list of operation buttons
const operationButtons = document.querySelectorAll(".operationButton")

// add event listener to each
operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // assign the operation
        operator = operations[button.id]
        // assign the first number to active number
        firstNumber = activeNumber
        console.log(operator)
     })
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
    activeNumber = firstNumber = secondNumber = operator = undefined
    console.log(firstNumber,secondNumber,activeNumber)
})

// Declare functions
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

// Map button IDs to corresponding functions
const operations = {
    add,
    subtract,
    multiply,
    divide
};