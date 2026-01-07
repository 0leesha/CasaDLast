 // Search Functionality
document.getElementById('searchInput').addEventListener('keyup', function() {
    const searchValue = this.value.toLowerCase();
    const tableRows = document.querySelectorAll('#usersTableBody tr');
    
    tableRows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchValue) ? '' : 'none';
    });
});

// Status Filter
document.getElementById('statusFilter').addEventListener('change', function() {
    const filterValue = this.value.toLowerCase();
    const tableRows = document.querySelectorAll('#usersTableBody tr');
    
    tableRows.forEach(row => {
        if (filterValue === '') {
            row.style.display = '';
        } else {
            const statusBadge = row.querySelector('.status-badge');
            const status = statusBadge.textContent.toLowerCase();
            row.style.display = status.includes(filterValue) ? '' : 'none';
        }
    });
});

// View User
function viewUser(id) {
    // This will be connected to backend later
    const userDetails = `
        <div class="row g-3">
            <div class="col-12"><strong>User ID:</strong> ${id}</div>
            <div class="col-12"><strong>Name:</strong> John Doe</div>
            <div class="col-12"><strong>Email:</strong> john@example.com</div>
            <div class="col-12"><strong>Phone:</strong> +91 98765 43210</div>
            <div class="col-12"><strong>Address:</strong> Ahmedabad, Gujarat - 380001</div>
            <div class="col-12"><strong>Status:</strong> <span class="status-badge active">Active</span></div>
            <div class="col-12"><strong>Registered:</strong> Jan 15, 2025</div>
        </div>
    `;
    document.getElementById('userDetails').innerHTML = userDetails;
    new bootstrap.Modal(document.getElementById('viewUserModal')).show();
}

// Edit User
function editUser(id) {
    // This will be connected to backend later
    alert('Edit user functionality will be implemented with Django backend');
}

// Delete User
function deleteUser(id) {
    if(confirm('Are you sure you want to delete this user?')) {
        // This will be connected to backend later
        alert('Delete functionality will be implemented with Django backend');
    }
}

// Save User
function saveUser() {
    // This will be connected to backend later
    alert('User saved successfully! This will be connected to Django backend.');
    bootstrap.Modal.getInstance(document.getElementById('addUserModal')).hide();
}

// Refresh Table
function refreshTable() {
    // This will reload data from backend
    alert('Refresh functionality will be connected to Django backend');
}

// Logout
document.querySelector('.logout-btn').addEventListener('click', function() {
    if(confirm('Are you sure you want to logout?')) {
        window.location.href = 'login.html';
    }
});
