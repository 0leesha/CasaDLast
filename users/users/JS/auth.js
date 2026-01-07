document.addEventListener('DOMContentLoaded', () => {

    const user = JSON.parse(localStorage.getItem('user'));

    if (!user || !user.loggedIn) {
        localStorage.setItem(
            'redirectAfterLogin',
            window.location.href
        );
        window.location.href = 'authentication.html';
        return;
    }

    const logoutBtn = document.getElementById('logout');

    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('user');
            localStorage.removeItem('redirectAfterLogin');
            window.location.href = 'authentication.html';
        });
    }
});
