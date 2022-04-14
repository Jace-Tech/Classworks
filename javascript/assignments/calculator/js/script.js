// Variables
const clearBtn = document.querySelector('[data-clear]')
const deleteBtn = document.querySelector('[data-delete]')
const screen = document.querySelector('#screen')
const operands = document.querySelectorAll('[data-operand]')
const operators = document.querySelectorAll('[data-operator]')
const equalsBtn = document.querySelector('[data-equals]')

let firstNumber = "",
    secondNumber = "",
    operator = ""

// Functions

// Append Number
function appendNumber (number) {
    if(!operator) {
        if(number == "."){
            if(!firstNumber.includes(".")){
                firstNumber += number
                screen.innerText = firstNumber
            }
        }
        else {
            firstNumber += number
            screen.innerText = firstNumber
        }
        
    }
    else {
        if(number == "."){
            if(!secondNumber.includes(".")){
                secondNumber += number
                screen.innerText = secondNumber
            }
        }
        else {
            secondNumber += number
            screen.innerText = secondNumber
        }
    }
}

// clear Screen
function clearScreen() {
    firstNumber = ""
    secondNumber = ""
    operator = ""
    screen.innerText = ""
}

// Compute Functions
function computeResult () {
    let result = 0
    
    switch(operator){
        case "+":
            result = parseFloat(firstNumber) + parseFloat(secondNumber);
            break

        case "÷":
            result = parseFloat(firstNumber) / parseFloat(secondNumber);
            break

        case "×":
            result = parseFloat(firstNumber) * parseFloat(secondNumber);
            break

        case "-":
            result = parseFloat(firstNumber) - parseFloat(secondNumber);
            break

        default:
            break
    }

    firstNumber = result
    secondNumber = ""
    operator = ""
    screen.innerText = firstNumber
}

function deleteLast () {
    if(!operator) {
        const number = firstNumber.split("")
        // number.splice(firstNumber.length - 1, 1)
        number.pop()

        firstNumber = number.join("")
        screen.innerText = firstNumber
    }
}

// Add an Operator
function addOperator(_operator) {
    if(!operator) {
        operator = _operator
    }
    else {
        computeResult()
        operator = _operator
        screen.innerText = ""
    }
}

// Event Listeners 
operands.forEach(function (operand) {
    operand.addEventListener('click', function (e) {
        appendNumber(e.target.innerText)
    })
})

operators.forEach(function (operator) {
    operator.addEventListener('click', function (e) {
        addOperator(e.target.innerText)
    })
})

deleteBtn.addEventListener('click', deleteLast)

equalsBtn.addEventListener('click', computeResult)

clearBtn.addEventListener('click', clearScreen)