document.getElementById('login-btn').addEventListener('click', function () {
    const email = document.getElementById('usr-email').value;
    // 
    const password = document.getElementById('usr-password').value;
    
    if (email === '@customer.com' && password === 'password') {
        window.location.href = 'innerBank.html'
    }
})