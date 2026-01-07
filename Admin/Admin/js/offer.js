// Search Functionality
document.getElementById('searchInput').addEventListener('keyup', function() {
    const searchValue = this.value.toLowerCase();
    const tableRows = document.querySelectorAll('#offersTableBody tr');
    
    tableRows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchValue) ? '' : 'none';
    });
});

// Status Filter
document.getElementById('statusFilter').addEventListener('change', function() {
    const filterValue = this.value.toLowerCase();
    const tableRows = document.querySelectorAll('#offersTableBody tr');
    
    tableRows.forEach(row => {
        if (filterValue === '') {
            row.style.display = '';
        } else {
            const statusBadge = row.querySelector('.status-badge');
            const statusClass = statusBadge.className;
            row.style.display = statusClass.includes(filterValue) ? '' : 'none';
        }
    });
});

// View Offer
function viewOffer(id) {
    new bootstrap.Modal(document.getElementById('viewOfferModal')).show();
}

// Edit Offer
function editOffer(id) {
    alert('Edit offer ' + id + ' - Will be connected to Django backend');
}

// Delete Offer
function deleteOffer(id) {
    if(confirm('Are you sure you want to delete this offer?')) {
        alert('Delete offer ' + id + ' - Will be connected to Django backend');
    }
}

// Save Offer
function saveOffer() {
    alert('Offer created successfully! This will be connected to Django backend.');
    bootstrap.Modal.getInstance(document.getElementById('addOfferModal')).hide();
}

// Refresh Table
function refreshTable() {
    alert('Refresh functionality will be connected to Django backend');
}

// Logout
document.querySelector('.logout-btn').addEventListener('click', function() {
    if(confirm('Are you sure you want to logout?')) {
        window.location.href = 'login.html';
    }
});