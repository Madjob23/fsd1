
const validUsername = "admin";
const validPassword = "password123";
const submitButton = document.getElementById("submit");

function validateLogin(username, password) {
    if (username === "" || password === "") {
        return "Fields cannot be empty!";
    }
    if (username === validUsername && password === validPassword) {
        return true;
    } else {
        return "Incorrect credentials";
    }
}

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    const result = validateLogin(usernameInput, passwordInput);
    
})