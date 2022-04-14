// ARRAYS

let animals = [ "Dog", "Cat", "Monkey" ] // 3 []
console.table(animals)

animals = new Array("Dog", "Cat", "Monkey")
console.table(animals)


console.log(animals[1])
console.log(animals.length)


// For loop 
// for (initialization; condition; increment / decrement)

// for(let i = 1; i <= 10; i++) {
//     if(i % 2 == 0){
//         document.write(i + "<br>")
//     }
// }

// for(let i = 0; i < animals.length; i++) {
//     document.write(animals[i] + "<br>")
// }

// .forEach()


animals.forEach(function (animal, index, arr) {
    if(animal.toLowerCase() == "cat"){
        document.write(`<p>${animal} is at index => ${index}</p>`)
    }
})


// Adding Item to an Array

// .push() [one, two, three, four] -> Adds to the end of the array
// .unShift() -> Adds to the beginning of the array

animals.push("Lion")
animals.unshift("Elephant")

console.table(animals)

// Removing from the array

// pop() -> Removes the last element from the array
// shift() -> Removes the first element from the array

console.log("Removed item => " ,animals.pop()) // returns
console.table(animals)


// .splice(index, how many to delete, replacement)

const removedAnimal = animals.splice(0, 1, "Fish")

console.log("Removed animal => " , removedAnimal)
console.table(animals)


// .concat()

const primaryColor = ["red", "green", "blue"]
const secondaryColor = ["white", "purple", "violet"]

let allColors = primaryColor.concat(secondaryColor)
// console.table(allColors)
// console.log("Purple => ", allColors[4])

// spread operator [...]
allColors = [...primaryColor, ...secondaryColor]

allColors.push("purPle")
console.table(allColors)



// Searching the array 

// .indexOf() 
// .lastIndexOf() 

console.log(allColors.indexOf("purple")) // -> 2
console.log(allColors.lastIndexOf("purple")) 

// includes() => Boolean value 
console.log(allColors.includes("white"))

// .find() => the value of the first matched element
let item = allColors.find(function(_, index) { 
    return index === 4
})
console.log(item)

// .findIndex() => an index of the first matched element
item = allColors.findIndex(function(element, _) { 
    return element.toLowerCase() === "white"
})

console.log(item)

// .filter() => array of all matched elements

const purpleArr = allColors.filter(function(element, _) {
    return element.toLowerCase() === "purple"
})

// .join(separator)
document.write(allColors.join(" "))

console.table(purpleArr)

// .map()

function multiplySelf (num) {
    return num * num
}

const numArr = [1, 3, 100, 9, 6, 200, 2]
console.log(numArr.map(multiplySelf))
const newMultipliedArr = numArr.map(function(element, _) {
    return element  - 1
})

console.table(newMultipliedArr) // [0, 1, 2, 3, 4]

// Sorting an Array

// .sort()

allColors.sort()
console.log(allColors)

numArr.sort(function (a, b) {
    return b - a // DESC
    // return a - b ASC
})
console.log(numArr)






