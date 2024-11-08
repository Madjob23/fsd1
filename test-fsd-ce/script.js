function validateLogin(username, password) {
    if (username === "" || password === "") {
        return "Fields cannon be empty!";
    }
    if (username === validUsername) {
        return true;
    } else {
        return "Incorrect username";
    }
    if (password === validPassword) {
        return true;
    } else {
        return "Incorrect password";
    }
}

// Example usage:
const usernameInput = document.getElementById("username").value;
const passwordInput = document.getElementById("password").value;
const validUsername = "admin";
const validPassword = "password123";

if (validateLogin(usernameInput, passwordInput)) {
    console.log("Login successful!");
} else {
    console.log("Invalid username or password.");
}