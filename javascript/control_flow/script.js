// CONTROL FLOW [ FLOW CONTROL ]

// IF STATEMENT
const age = 13

if(age >= 13 && age < 19) {
    // alert("YOU'RE A TEENAGER")
}

const text = document.getElementById('text')
const _age = document.getElementById('age') // string
const btn = document.querySelector("button")


btn.addEventListener('click', function () {
    const ageValue = parseInt(_age.value)

    if(ageValue > 18) {
        text.innerHTML = "Move"
        // text.className = "go"
        text.classList.add("go")
    }

    else {
        text.innerHTML = "Stop"
        // text.className = "go"
        text.classList.add("stop")
    }
})

// IF.. ELSE IF ...ELSE

// const _age_ = 12

// if(_age_ < 13){
//     alert("You're a child")
// }
// else if(_age_ >= 13 && _age_ <= 19) {
//     alert("You're a teenager")
// }
// else {
//     alert("You're an adult")
// }

// 
const moveBtn = document.querySelector("#move")
const stopBtn = document.querySelector("#stop")
const parkBtn = document.querySelector("#park")

let state = ""

function alertSomething () {
    if(state == "Move"){
        alert("Moving")
    }
    else if(state == "Park") {
        alert("Parked")
    }
    else if(state == "Stop"){
        alert("Stopped")
    }
    else {
        return
    }
}


moveBtn.addEventListener("click", function(){
    state = "Move"
    alertSomething()
})

stopBtn.addEventListener("click", function(){
    state = "Stop"
    alertSomething()
})

parkBtn.addEventListener("click", function(){
    state = "Park"
    alertSomething()
})


// TENARY OPERATOR

/*  if(age > 18){
        let state = "Adult"
    }
    else {
        let state = "Child"
    }
*/

// const _resultAge = (_age_ > 18) ? "Adult" : "Child";

// console.log("Age Result => ", _resultAge);

// Nested If statement

// const gender = ""

// if(gender) {
//     if(gender == "Male") {
//         alert("Male")
//     }
//     else {
//         alert("Female")
//     }
// }
// else {
//     alert("Enter your gender")
// }

// Using TENARY

// let genderResult = gender ? 
//                         (gender == "Male") ? "Male" : "Female"
//                     : 
//                         "Enter your gender"

// alert(genderResult)



// SWITCH CASE

const product = "Mac"

switch (product) {
    case "Windows": 
        alert("It's a window device")
        break
    
    case "Android":
        alert("It's a Android device")
        break
    
    case "Mac":
        alert("It's a Mac device")
        break

    default:
        alert("It's not supported")
        break
}