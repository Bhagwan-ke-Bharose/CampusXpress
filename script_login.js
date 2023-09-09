const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === 'username' && password === 'password') {
        window.location.href = "index.html";
       
    } else {
        
        errorMessage.textContent = 'Invalid username or password. Please try again.';
    }
});
