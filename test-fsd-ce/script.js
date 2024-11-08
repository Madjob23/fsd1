const validUsername = "admin";
const validPassword = "password123";
const submitButton = document.getElementById("submit");
const errorBox = document.getElementById("error");

function validateLogin(username, password) {
    if (username === "" || password === "") {
        return "Fields cannot be empty!";
    }
    if (username === validUsername && password === validPassword) {
        return "Login successful!";
    } else {
        return "Incorrect credentials";
    }
}

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    const result = validateLogin(usernameInput, passwordInput);
    if (result === "Login successful!") {
        window.location.href = "./pages/calculator.html";
    }
    errorBox.style.display = "block";
    errorBox.textContent = result;
})

document.addEventListener('keydown', () => {
    errorBox.style.display = "none";
})