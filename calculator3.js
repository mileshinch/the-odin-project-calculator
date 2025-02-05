let numberOnScreen;
let firstNumber;
let secondNumber;
let answer;

// declare a variable for the div where the numbers go
const calcScreen = document.querySelector(".calcScreen")

// make a node list const
const numberButtons = document.querySelectorAll(".numberButton")

function operate(operator,firstNumber,secondNumber) {
    return operator(firstNumber,secondNumber);
}

// there are two states that you can be in when you click the number button
// state 1 is when you want to replace what is on the screen with number that has just been clicked
// state 2 is when you want to add the number that has just been clicked to the number that is on the screen
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {

        // if in state 1
        if (numberOnScreen === undefined) {
            // replace what is on the screen with the number that has just been clicked
            numberOnScreen = button.textContent
            calcScreen.textContent = numberOnScreen
        }
        // if in state 2
        else {
            // push the number that has just been clicked to the number that is on the screen
            numberOnScreen += button.textContent
            calcScreen.textContent = numberOnScreen
        }
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
        firstNumber = Number(numberOnScreen)
        console.log(typeof firstNumber, firstNumber)
        numberOnScreen = undefined
     })
})

// equals button
const equalsBtn = document.querySelector(".equalsBtn")
equalsBtn.addEventListener("click", () => {
    // assign second number
    secondNumber = Number(numberOnScreen)
    // call the operate function to calculate the answer
    answer = operate(operator,firstNumber,secondNumber)
    // display the answer
    calcScreen.textContent = answer
})

// clear
const clear = document.querySelector(".clear")
clear.addEventListener("click", () => {
    calcScreen.textContent = '0'
    numberOnScreen = answer = firstNumber = secondNumber = operator = undefined
    console.log(firstNumber,secondNumber)
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