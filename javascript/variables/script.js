// Declaring a variable
// -> var, const, let => Keywords

// Declaration
var personName
// let personName

// Initialization
personName = "Jace"
const age = 13 // DATA TYPE

// alert(personName);
// document.write(age)


// Multiple declarations / Initialization
let englishScore = 50, 
    mathsScore = 70, 
    computerScore = 90

console.log(englishScore, mathsScore, computerScore)

// Classwork

const productName = "iPhone",
    productPrice = 200000

// let productName = "iPhone",
//     productPrice =  200000

console.log("product name => ", productName);
console.log("product price => ", productPrice);


// Overriding a variable

var person = "John Smith"

// Before Overriding
console.log("person name => ", person)


person = "Jane Doe"

// After Overriding
console.log("person name => ", person)

// Outputting HTML Elements
document.writeln("<h1>This is a bolded text</h1>")

// Getting HTML Elements

const h1 = document.getElementById('first-h1')

console.log("This is the h1 element => ", h1)

// Changing the content of the HTML Element
// .innerHTML
// .textContent
// .innerText

h1.innerHTML = "<i>This is changed Heading</i>"
h1.innerText = "<b>This is changed Heading</b>"
h1.textContent = "<b>This is changed Heading</b>"

console.log("this is the heading id => ", h1.id)

// .getElementsByClassName()
// .getElementsByTagName()
// .querySelector()
// .querySelectorAll()


// getElementsByClassName()
const listItems = document.getElementsByClassName("item")

// For the first item 
// assignment operator
listItems[0].innerHTML = "Paper"
listItems[1].innerHTML = "Marker"
listItems[1].style.color = "red"
listItems[1].style.fontSize = "3rem"

// getElementsByTagName()
const liTags = document.getElementsByTagName('li')
console.log({liTags})

// querySelector()

const h1Element = document.querySelector('.item')

console.log({h1Element})



// Some JS Window Methods
// const isOld = confirm("Are you older than 15? ")
// console.log({isOld})

// let someonesName = prompt("What is your name? ")

// console.log({ someonesName })

// h1.innerHTML = someonesName

// console.log("SomeonesName have a dataType of => ",typeof someonesName)


const personAge = parseFloat(prompt("What is your age? "))

console.log("personAge => ", typeof personAge, personAge)

// Adding strings
let result = eval("2 + 2")
console.log(result)