// Variables

const usernameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')
const btn = document.querySelector('[data-btn]')
const messageBox = document.querySelector('.message')


// constants
const username = "Jace"
const password = "0000"


btn.addEventListener('click', function (e) {
    e.preventDefault() // Stops from uploading to server

    const usersUsername = usernameInput.value 
    const usersPassword = passwordInput.value

    if((usersUsername === username) && (usersPassword === password)) {
        messageBox.textContent = "login successful"
        // messageBox.className = "message success"
    
        if(messageBox.classList.contains("danger")) {
            messageBox.classList.remove("danger")
        }

        messageBox.classList.add("success")

    }
    else {
        messageBox.textContent = "Incorrect Credientials"

        if(messageBox.classList.contains("success")) {
            messageBox.classList.remove("success")
        }
        messageBox.classList.add("danger")
    }
})


