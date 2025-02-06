let number;
let firstNumber;
let secondNumber;

function operate(operator,firstNumber,secondNumber) {
    return operator(firstNumber,secondNumber);
}

const numberButtons = document.querySelectorAll(".numberButton")

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // if in state 1
        if (number === undefined) {
            // replace what is on the screen with the number that has just been clicked
            number = button.textContent
        }
        // if in state 2
        else {
            // concatenate
            number += button.textContent
        }
        console.log(number)
    })
})

const operationButtons = document.querySelectorAll(".operationButton")

operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // assign the operation
        operator = operations[button.id]
        // assign the first number to active number
        firstNumber = Number(number)
        // reset number
        number = undefined
        console.log('the first number is ' + firstNumber,'number is ' + number)
     })
})

// equals button
const equalsBtn = document.querySelector(".equalsBtn")
equalsBtn.addEventListener("click", () => {
    secondNumber = Number(number)
    // call the operate function to calculate the answer
    number = operate(operator,firstNumber,secondNumber)
    console.log('the first number is '+firstNumber,'the second number is '+secondNumber,'number is ' + number)
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