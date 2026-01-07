function viewInquiry(id) {
    document.getElementById('viewModal').classList.add('active');
}

function replyInquiry(id) {
    document.getElementById('replyModal').classList.add('active');
}

function deleteInquiry(id) {
    if (confirm('Are you sure you want to delete this inquiry?')) {
        alert('Inquiry #' + id + ' has been deleted.');
    }
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

function sendReply() {
    const message = document.getElementById('replyMessage').value;
    if (message.trim() === '') {
        alert('Please enter a reply message.');
        return;
    }
    alert('Reply sent successfully!');
    closeModal('replyModal');
    document.getElementById('replyMessage').value = '';
}

// Filter functionality
document.getElementById('statusFilter').addEventListener('change', filterInquiries);
document.getElementById('searchInput').addEventListener('input', filterInquiries);

function filterInquiries() {
    const status = document.getElementById('statusFilter').value;
    const search = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.querySelectorAll('#inquiryTableBody tr');

    rows.forEach(row => {
        const statusBadge = row.querySelector('.badge-status').textContent.toLowerCase();
        const customerName = row.cells[1].textContent.toLowerCase();
        const email = row.cells[2].textContent.toLowerCase();

        const statusMatch = status === 'all' || statusBadge === status;
        const searchMatch = customerName.includes(search) || email.includes(search);

        row.style.display = (statusMatch && searchMatch) ? '' : 'none';
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