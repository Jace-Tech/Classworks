// Variables
const upBtn = document.querySelector("[data-up]")
const downBtn = document.querySelector("[data-down]")
const leftBtn = document.querySelector("[data-left]")
const rightBtn = document.querySelector("[data-right]")

const box = document.querySelector(".box")
const speed = 10

let topPosition = 0, leftPosition = 0

// Functions

function moveUp () {
    topPosition -= speed
    box.style.top = topPosition + "px"
}

function moveDown () {
    topPosition += speed
    box.style.top = topPosition + "px"
}

function moveRight () {
    leftPosition += speed
    box.style.left = leftPosition + "px"
}

function moveLeft () {
    leftPosition -= speed
    box.style.left = leftPosition + "px"
}

// Events


upBtn.addEventListener("click", moveUp);
downBtn.addEventListener("click", moveDown);
leftBtn.addEventListener("click", moveLeft);
rightBtn.addEventListener("click", moveRight);