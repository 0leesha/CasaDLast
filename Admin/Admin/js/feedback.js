function viewFeedback(id) {
    document.getElementById('viewModal').classList.add('active');
}

function publishFeedback(id) {
    if (confirm('Are you sure you want to publish this feedback?')) {
        alert('Feedback #' + id + ' has been published.');
        location.reload();
    }
}

function deleteFeedback(id) {
    if (confirm('Are you sure you want to delete this feedback?')) {
        alert('Feedback #' + id + ' has been deleted.');
    }
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Filter functionality
document.getElementById('ratingFilter').addEventListener('change', filterFeedback);
document.getElementById('statusFilter').addEventListener('change', filterFeedback);
document.getElementById('searchInput').addEventListener('input', filterFeedback);

function filterFeedback() {
    const rating = document.getElementById('ratingFilter').value;
    const status = document.getElementById('statusFilter').value;
    const search = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.querySelectorAll('#feedbackTableBody tr');

    rows.forEach(row => {
        const customerName = row.cells[1].textContent.toLowerCase();
        const productName = row.cells[2].textContent.toLowerCase();
        const ratingCount = row.cells[3].querySelectorAll('.fas.fa-star').length;
        const statusBadge = row.querySelector('.badge-published, .badge-pending');
        const rowStatus = statusBadge.classList.contains('badge-published') ? 'published' : 'pending';

        const ratingMatch = rating === 'all' || ratingCount === parseInt(rating);
        const statusMatch = status === 'all' || rowStatus === status;
        const searchMatch = customerName.includes(search) || productName.includes(search);

        row.style.display = (ratingMatch && statusMatch && searchMatch) ? '' : 'none';
    });
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.classList.remove('active');
    }
}

// Logout
document.querySelector('.logout-btn').addEventListener('click', function() {
    if(confirm('Are you sure you want to logout?')) {
        window.location.href = 'login.html';
    }
});