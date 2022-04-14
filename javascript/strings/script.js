// STRING

//  => ['', "", ``] -> String

let string = "Hello World" // Double

string = 'Hello World, Let\'s' // Single Quotes

string = `Hello World` // Backticks

// Escape Sequence

let name = "John \n Doe"

document.write(name)
document.write("<pre>" + name + "</pre>") 

// PROPERTIES AND METHODS OF A STRING

// -> .length [property]

let subject = "Java script"
console.log(subject.length)


// .indexOf() method

let str = "This is a string s"
let sPosition = str.indexOf("s", 4)

let lastPositionS = str.lastIndexOf("s")

console.log(`The position of "s" is ${sPosition}`)
console.log(`The Last position of "s" is ${lastPositionS}`)


// search() method

const _str = "This Is is a string"
const position = _str.search("is") // without regex
const position2 = _str.search(/is/i) // with regex

// .slice() method

const word = "Hello World"

let slice = word.slice(0, 5)
console.log(slice)

slice = word.slice(6) // World
console.log(slice)


// .substring() method

slice = word.substring(5, 0)
console.log("Substring: => ", slice)


// .replace() method

const anotherWord = "Obi is a girl"
const result = anotherWord.replace("Obi", "Ada")

console.log("Replaced => ", result)


// .toUpperCase()
// .toLowerCase()

const upperCase = result.toUpperCase()
const lowerCase = result.toLowerCase()

console.table({
    upperCase, 
    lowerCase
})

// template String or Literal

const wordOne = "Hello"
const wordTwo = "World"
const complex = "kjbcbcsdbvsdvbkadvadvjhdvdbvagdvdhjgvjdshgvjdhvhdvdsjvdshgjvchgjdcvdghjscdcvhgdscvdshx"

let combination = wordOne + " " + wordTwo
console.log("combination => ", combination)

combination = `${wordOne} ${wordTwo}`
console.log("combination => ", combination)


// charAt() method
const charH = wordOne.charAt(0) // H
const indexOfLastChar = complex.length - 1
const resultOfLastChar = complex.charAt(indexOfLastChar)

console.log("LastItem => ", resultOfLastChar)


// .split() method

const colors = "Red, Green, Blue, White, Purple, Violet, Pink, Black"
const colorsArray = colors.split(", ", 5)

const foodItems = "yam-beans-potatoes-tomatoes-fish-egg"
const foodItemsArray = foodItems.split("-", 3)

// console.log("colorsArray => ", colorsArray)

// console.table(foodItemsArray)
foodItemsArray[1] = "Pineapple"
console.table(foodItemsArray)