const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === 'sample_username' && password === 'password') {
        window.location.href = "index_login.html";
        clearHistory();
    } else { 
        errorMessage.textContent = 'Invalid username or password. Please try again.';
    }
});

function clearHistory() {

    window.history.pushState(null, null, "index_login.html");
    window.addEventListener('popstate', function(event) {
        window.history.pushState(null, null, "index_login.html");
    });
    
}