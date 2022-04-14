const ball = document.querySelector('.ball');


function moveBall (event) {
    const x = event.clientX
    const y = event.clientY

    ball.style.left = (x - 50) + "px"
    ball.style.top = (y - 50) + "px"
}

document.body.addEventListener('mousemove', moveBall)
window.onmousemove = moveBall