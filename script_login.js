const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === 'sample_username' && password === 'password') {
        window.location.href = "index_login.html";
       
    } else { 
        errorMessage.textContent = 'Invalid username or password. Please try again.';
    }
});


