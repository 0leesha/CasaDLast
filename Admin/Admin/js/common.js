export function common() {
    // Logout button functionality
    const logoutBtn = document.querySelector('.logout-btn');

    if (!logoutBtn) {
        console.log("Logout button not found");
        return;
    }

    logoutBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to logout?')) {
            alert('Logout functionality would be implemented in the backend');
        }
    });
}