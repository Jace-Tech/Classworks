// Get Elements
const textField = document.querySelector("#text-field")
const btn = document.querySelector("#btn")
const image = document.querySelector("img")

// Functions
function showMessage () {
    const value = textField.value

    alert(value)
}


// Event
btn.addEventListener("click", showMessage)

image.width = 300
image.height = 300

image.addEventListener('mouseenter', function(e) {
    image.src = "./img/wbt.jpg"
})

image.addEventListener('mouseleave', function(e) {
    image.src = "./img/table.png"
})
