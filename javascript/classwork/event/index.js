// Variables
const h1 = document.querySelector('h1')


// Functions
function changeContent (eventObj) {
    // change the content of that h1 element
    h1.innerHTML += eventObj.key
}

// Events

window.addEventListener('keydown', changeContent)

window.addEventListener("keydown", function (e) {
    console.log("key down ")
})

window.addEventListener("keyup", function(e) {
    console.log("key Up ")
})

window.addEventListener("keypress", function(e) {
    console.log("key Press ", e)
})