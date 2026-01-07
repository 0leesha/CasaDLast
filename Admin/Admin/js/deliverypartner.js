 // Search functionality
document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const rows = document.querySelectorAll('#partnersTableBody tr');
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchTerm) ? '' : 'none';
    });
});

// Status filter
document.getElementById('statusFilter').addEventListener('change', function(e) {
    const filterValue = e.target.value.toLowerCase();
    const rows = document.querySelectorAll('#partnersTableBody tr');
    
    rows.forEach(row => {
        if (!filterValue) {
            row.style.display = '';
            return;
        }
        const statusBadge = row.querySelector('.status-badge');
        const statusText = statusBadge.textContent.toLowerCase();
        row.style.display = statusText === filterValue ? '' : 'none';
    });
});

// View partner details
function viewPartner(id) {
    const viewModal = new bootstrap.Modal(document.getElementById('viewPartnerModal'));
    viewModal.show();
}

// Edit partner
function editPartner(id) {
    const editModal = new bootstrap.Modal(document.getElementById('editPartnerModal'));
    editModal.show();
}

// Delete partner
function deletePartner(id) {
    if (confirm('Are you sure you want to delete this delivery partner?')) {
        alert('Partner deleted successfully!');
        // Add actual delete logic here
    }
}

// Save new partner
function savePartner() {
    const form = document.getElementById('addPartnerForm');
    if (form.checkValidity()) {
        alert('Partner added successfully!');
        bootstrap.Modal.getInstance(document.getElementById('addPartnerModal')).hide();
        form.reset();
        // Add actual save logic here
    } else {
        form.reportValidity();
    }
}

// Update partner
function updatePartner() {
    const form = document.getElementById('editPartnerForm');
    if (form.checkValidity()) {
        alert('Partner updated successfully!');
        bootstrap.Modal.getInstance(document.getElementById('editPartnerModal')).hide();
        // Add actual update logic here
    } else {
        form.reportValidity();
    }
}

// Refresh table
function refreshTable() {
    location.reload();
}

// Logout function
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        window.location.href = 'login.html';
    }
}