const signupForm = document.getElementById("signup-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const college = document.getElementById("college");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const firstNameError = document.getElementById("first-name-error");
const lastNameError = document.getElementById("last-name-error");
const collegeError = document.getElementById("college-error");
const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("confirm-password-error");

signupForm.addEventListener("submit", function (e) {
    let valid = true;

    if (firstName.value.trim() === "") {
        firstNameError.textContent = "First Name is required.";
        valid = false;
    } else {
        firstNameError.textContent = "";
    }

    if (lastName.value.trim() === "") {
        lastNameError.textContent = "Last Name is required.";
        valid = false;
    } else {
        lastNameError.textContent = "";
    }

    if (college.value.trim() === "") {
        collegeError.textContent = "College is required.";
        valid = false;
    } else {
        collegeError.textContent = "";
    }

    if (username.value.length < 5) {
        usernameError.textContent = "Username must be at least 5 characters.";
        valid = false;
    } else {
        usernameError.textContent = "";
    }

    if (password.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters.";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = "Passwords do not match.";
        valid = false;
    } else {
        confirmPasswordError.textContent = "";
    }
    
    if (valid) {
        alert("form submitted")
        window.location.href = 'index_login.html'; 
    } else {
        e.preventDefault();
    }
});