// OPERATORS

// -> Arithematic Operators [+, -, *, %, /] ~ binary operators

// Addition

// expression -> any piece of code that returns a value
let a = 10, b = 5

let result = a + b
console.log("Addition => ", result) // 10


// Subtraction 
result = a - b
console.log("Subtraction => ", result)

// Multiplication 
result = a * b
console.log("Multiplication => ", result)

// Division 
result = a / b
console.log("Division => ", result)

// Modulus 
result = a % b
console.log("Modulus => ", result)



// ASSIGNMENT OPERATORS

// Assign [=]
const variable = 2
console.log("Assignment => ", variable)

// Add and Assign [+=]
a += b
console.log("Add and Assign [a] => ", a) // 15


// Subtract and Assign [-=]
a -= b
console.log("Subtract and Assign [a] => ", a) // 10

// Multiply and Assign [*=]
a *= b
console.log("Multiply and Assign [a] => ", a) // 50

// Divide and Assign [/=]
a /= b
console.log("Divide and Assign [a] => ", a) // 10

// Modulus and Assign [%=]
a %= b
console.log("Modulus and Assign [a] => ", a) // 0


// STRING OPERATORS
// [+]
let name = "some text "
let anotherName = "some other text"

// Concatenation => adding a string to another string
const textResult = name + anotherName
console.log(textResult)

// [+=]
name += anotherName
console.log(name)


// INCREMENT / DECREMENT OPERATORS

let m = 4, n = 3

let incResult = --m

// clear your console
console.clear()
console.log({
    m,
    incResult
})



// COMPARISON OPERATORS [==, ===, <, >, <=, >=, !=, !==]

// equals to operator
console.log("4 == 5", 4 == 5); // false
console.log("4 == '4'", 4 == '4'); // true

// identical
console.log("4 === 5", 4 === 5); // false
console.log("4 === '4'", 4 === '4'); // false

// using variables
let o = 6, p = 7

// less than
console.log("o < p", o < p) // true

// greater than
console.log("o > p", o > p) // false


// not equal to
console.log("o != p", o != p) // true

// not identical to
console.log("o !== p", o !== p) // true


// LOGICAL OPERATORS

// AND [ && ], OR [ || ], NOT [ ! ]

// And -> Returns true if both left and right operands are true
console.log("5 < 2 AND 6 > 3", 5 < 2 && 6 > 3) // false
console.log("5 > 2 AND 6 > 3", 5 > 2 && 6 > 3) // true

// Or -> Returns true when either left or right operand is true
console.log("3 > 7 OR 2 == 2", 3 > 7 || 2 == 2) // true

// Not [ ! ]

const cond = (5 == 5)

console.log("!cond", !cond) // false


// NULLISH COALESCING [ ?? ]

const res = 0 ?? 5
console.log("res", res) //


