// Toggle Password Visibility
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('toggleIcon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

// Show Alert Message
function showAlert(message, type) {
    const alertDiv = document.getElementById('alertMessage');
    alertDiv.textContent = message;
    alertDiv.className = `alert-message alert-${type}`;
    alertDiv.style.display = 'block';
    
    setTimeout(() => {
        alertDiv.style.display = 'none';
    }, 4000);
}

// Form Submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const loginBtn = document.querySelector('.btn-login');
    
    // Add loading state
    loginBtn.classList.add('loading');
    
    // Simulate API call
    setTimeout(() => {
        // Demo validation (replace with actual backend authentication)
        if (email === 'admin@casadlast.com' && password === 'admin123') {
            showAlert('Login successful! Redirecting to dashboard...', 'success');
            setTimeout(() => {
                // Redirect to dashboard
                window.location.href = 'dashboard.html';
            }, 1500);
        } else {
            showAlert('Invalid email or password. Please try again.', 'error');
            loginBtn.classList.remove('loading');
        }
    }, 1500);
});

// Input Focus Animation
document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});

// Prevent right click (optional security)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});