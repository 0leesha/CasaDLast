// Search Functionality
document.getElementById('searchInput').addEventListener('keyup', function() {
    const searchValue = this.value.toLowerCase();
    const tableRows = document.querySelectorAll('#productsTableBody tr');
    
    tableRows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchValue) ? '' : 'none';
    });
});

// Category Filter
document.getElementById('categoryFilter').addEventListener('change', function() {
    filterTable();
});

// Status Filter
document.getElementById('statusFilter').addEventListener('change', function() {
    filterTable();
});

function filterTable() {
    const categoryValue = document.getElementById('categoryFilter').value.toLowerCase();
    const statusValue = document.getElementById('statusFilter').value.toLowerCase();
    const tableRows = document.querySelectorAll('#productsTableBody tr');
    
    tableRows.forEach(row => {
        const categoryText = row.cells[2].textContent.toLowerCase();
        const statusBadge = row.querySelector('.status-badge');
        const statusClass = statusBadge.className;
        
        let showRow = true;
        
        if (categoryValue && !categoryText.includes(categoryValue)) {
            showRow = false;
        }
        
        if (statusValue && !statusClass.includes(statusValue)) {
            showRow = false;
        }
        
        row.style.display = showRow ? '' : 'none';
    });
}

// View Product
function viewProduct(id) {
    alert('View product ' + id + ' - Will be connected to Django backend');
}

// Edit Product
function editProduct(id) {
    alert('Edit product ' + id + ' - Will be connected to Django backend');
}

// Delete Product
function deleteProduct(id) {
    if(confirm('Are you sure you want to delete this product?')) {
        alert('Delete product ' + id + ' - Will be connected to Django backend');
    }
}

// Save Product
function saveProduct() {
    alert('Product saved successfully! This will be connected to Django backend.');
    bootstrap.Modal.getInstance(document.getElementById('addProductModal')).hide();
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
