// Search Functionality
document.getElementById('searchInput').addEventListener('keyup', function() {
    const searchValue = this.value.toLowerCase();
    const tableRows = document.querySelectorAll('#subCategoriesTableBody tr');
    
    tableRows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchValue) ? '' : 'none';
    });
});

// Category Filter
document.getElementById('categoryFilter').addEventListener('change', function() {
    const filterValue = this.value.toLowerCase();
    const tableRows = document.querySelectorAll('#subCategoriesTableBody tr');
    
    tableRows.forEach(row => {
        if (filterValue === '') {
            row.style.display = '';
        } else {
            const badge = row.querySelector('.category-badge');
            const badgeClass = badge.className;
            row.style.display = badgeClass.includes(filterValue) ? '' : 'none';
        }
    });
});

// View Sub Category
function viewSubCategory(id) {
    alert('View sub category ' + id + ' - Will be connected to Django backend');
}

// Edit Sub Category
function editSubCategory(id) {
    alert('Edit sub category ' + id + ' - Will be connected to Django backend');
}

// Delete Sub Category
function deleteSubCategory(id) {
    if(confirm('Are you sure you want to delete this sub category?')) {
        alert('Delete sub category ' + id + ' - Will be connected to Django backend');
    }
}

// Save Sub Category
function saveSubCategory() {
    alert('Sub category saved successfully! This will be connected to Django backend.');
    bootstrap.Modal.getInstance(document.getElementById('addSubCategoryModal')).hide();
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
