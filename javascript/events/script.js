const input = document.querySelector("input")
const h1 = document.querySelector("h1")
// const image = document.querySelector("img")
const btn = document.querySelector("button[data-id]")

console.log("Btn =>", btn)

function changeSize (e) {
    let size = e.target.value
    h1.style.fontSize = size + "px"
}

// using the event attribute
// input.oninput = changeSize

// using the addEventListener method
input.addEventListener('input', changeSize())

// image.addEventListener('mouseover', function(e) {
//     console.log("Mouse Over Event -> ", e)
// })


btn.addEventListener('dblclick', function() {
    const name = btn.dataset.id
    alert(name)
})
