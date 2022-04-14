// NUMBERS  

const wholeNumber = 10
const floatNumber = 3.5
const hexaDecimalNumber = 0xf

const exponentNumber = 1.42e5

// Operations with numbers

// Arithematic Operators with numbers

let result = 5 + 5 // 10 
result = 5 * 2 // 10
result = ((0.1 * 10) + (0.2 * 10)) / 10 // 0.3

console.log(result)

// PROPERTIES & METHODS OF NUMBERS

// .toString() 
const number = 9
const stringNumber = number.toString()


console.log("TypeOf => ",typeof number, "Value => ", number)
console.log("TypeOf => ",typeof stringNumber, "Value => ", stringNumber)

// parseInt()  // integer
// parseFloat() // float

const strNum = "50px"
const numStr = parseInt(strNum)

console.log(numStr)

const hexaString = "0xa"
const hexaNumber = parseInt(hexaString, 16)

console.log(hexaNumber)



// .toExponential()

const _floatNumber = 14.9865
let exponentResult = _floatNumber.toExponential()
console.log(exponentResult)

// with precision
exponentResult = _floatNumber.toExponential(3)
console.log(exponentResult)

// .toFixed()

const fixNum = 123.456
let fixResult = fixNum.toFixed(2) // 123.46
console.log(fixResult)

fixResult = fixNum.toFixed() // 123
console.log(fixResult)

// .toPrecision()

const presNum = 123.456 
let presResult = presNum.toPrecision(2) // 1.2e+2 
console.log(presResult)

presResult = presNum.toPrecision(4) // 123.5
console.log(presResult)


// NUMBER OBJECT

const minNum = Number.MIN_VALUE 
const maxNum = Number.MAX_VALUE 

let maxValueCal = maxNum * 2 
console.log(maxValueCal) // Infinity

console.log("minNum => ", minNum) 
console.log("maxNum => ", maxNum)

// MATHS OBJECT

console.log("PI =>", Math.PI)

// round()
const __floatNum = 123.534

const roundResult = Math.round(__floatNum) 
console.log("roundResult => ", roundResult)

// ceil()
console.log("ceilResult => ", Math.ceil(__floatNum)) 

// floor()
console.log("floorResult => ", Math.floor(__floatNum))

// pow()
console.log("powResult => ", Math.pow(2, 3)) // 8 [ES5]
console.log("powResult => ",2 ** 3) // 8 [ES6]

// random()

const randomNumber = Math.floor(Math.random() * 10)
console.log("randomNumber => ", randomNumber)

