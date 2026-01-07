// Logout
document.querySelector('.logout-btn').addEventListener('click', function() {
    if(confirm('Are you sure you want to logout?')) {
        window.location.href = 'login.html';
    }
});
