// Search Functionality
document.getElementById('searchInput').addEventListener('keyup', function() {
    const searchValue = this.value.toLowerCase();
    const tableRows = document.querySelectorAll('#ordersTableBody tr');
    
    tableRows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchValue) ? '' : 'none';
    });
});

// Status Filter
document.getElementById('statusFilter').addEventListener('change', function() {
    const filterValue = this.value.toLowerCase();
    const tableRows = document.querySelectorAll('#ordersTableBody tr');
    
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

// View Order
function viewOrder(id) {
    new bootstrap.Modal(document.getElementById('viewOrderModal')).show();
}

// Update Status
function updateStatus(id) {
    new bootstrap.Modal(document.getElementById('updateStatusModal')).show();
}

// Save Status
function saveStatus() {
    alert('Status updated successfully! This will be connected to Django backend.');
    bootstrap.Modal.getInstance(document.getElementById('updateStatusModal')).hide();
}

// Print Invoice
function printInvoice(id) {
    alert('Print invoice for order ' + id + ' - Will be connected to Django backend');
    // In production, this will open a printable invoice PDF
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

// Date Filter
document.getElementById('dateFilter').addEventListener('change', function() {
    alert('Date filter will be connected to Django backend to fetch orders by date');
});