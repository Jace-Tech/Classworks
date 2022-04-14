// FUNCTIONS

// ES5 
// function addOperand () {
//     console.log(2 + 3)
// }

// ES6 arrow function [=>]
const addOperand = () => {
    console.log(2 + 3)
}

addOperand()


// Declaration
const sayHello = name => {
    console.log(name)
}

// Call / Invoke the function


// Get DOM element
// const btn = document.querySelector("button")
// const input = document.querySelector("input")


// btn.addEventListener("click", function() {
    
// })

// btn.addEventListener("click", () => sayHello(input.value))

// ID Generator 

const idGenerator = (length = 8) => {
    const possibleValues = "1234567890abcdefghijklmnopqrstuvwsxyz"
    let id = ""

    for(let i = 1; i <= length; i++){
        id += possibleValues[Math.floor(Math.random() * possibleValues.length)]
    }

    return id
}

// idGenerator() // char len 8

// idGenerator(20) // char len 20

const userID = idGenerator()

console.log(userID)

// Returning an array
const getDiv = (num1, num2) => {
    const quotient = num1 / num2
    const dividend = num1
    const divisor = num2
    const modulus = num1 % num2

    return [dividend, divisor, quotient, modulus]
}

// Destructuring an array
// const [ d, divisor, quotient, modulus ] = getDiv(10, 5)

console.log("DIVISOR => ", getDiv(10, 5)[1])
console.log("DIVIDEND => ", getDiv(10, 5)[0])
console.log("MOD => ", getDiv(10, 5)[3])
console.log("QUOTIENT => ", getDiv(10, 5)[2])

// FUNCTION EXPRESSION

// const getSum = function (num, num2) {
//     return num + num2
// }

// console.log(getSum(2, 3))

// sayHi()

function sayHi () {
    return "Hi"
}

// Explicit return 
const getSum = (a, b) => a + b

console.log(getSum(2, 3))

// sayHi()

// global variable
const sum = 8
const name = "Jones"

const something = () => {
    const sum = 9
    const greet = "Hi Mark" // local
    console.log(sum, "Name => ", name)
}

something()
console.log(sum)


// RECURSIVE FUNCTIONS
// Factorials

const getFactorial = num => {
    if(num == 1) return 1

    return num * getFactorial(num - 1)
}

console.log(getFactorial(6))

// CALL BACK FUNCTIONS

// const callBack = () => {
//     console.log("Hey I'm Done")
// }

const DBconnection = (a) => {
    console.log("Connecting to database")
    a()
}

DBconnection(() => console.log("Done Connecting to database"))

// DBconnection(callBack)

// Function of a function

const someRandomFuction = (firstname) => {
    const anotherRandomFuction = (lastname) => {
        console.log(`${firstname} ${lastname}`)
    }
    return anotherRandomFuction
}

someRandomFuction("Jace")("Alexander")

//  HIGH ORDER FUNCTIONS ES6 

// setTimeout()
// setInterval()

// setTimeout(() => {
//     alert("HELLO WORLD")
// }, 5000)


let num = 0

const countUp = () => {
    document.body.innerHTML = `<h1>${num}</h1>`
    num++
}

// setInterval(() => countUp(), 1000)

// To clear the functions
// clearInterval()
// clearTimeout()



// COUNTER UP CLONE

const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')

const initialValue = parseInt(h1.textContent)

// console.log(initialValue)

const counterUp = (screen, initialValue) => {
    let counter = 0

    const handler = setInterval(() => {
        if(counter === initialValue) clearInterval(handler)
        screen.innerHTML = counter
        counter++
    }, 5)
}

counterUp(h1, 40)
counterUp(h2, parseInt(h2.innerHTML))