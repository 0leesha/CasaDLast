// Search Functionality
document.getElementById('searchInput').addEventListener('keyup', function() {
    const searchValue = this.value.toLowerCase();
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(searchValue) ? '' : 'none';
    });
});

// Preview Image
function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const preview = document.getElementById('imagePreview');
        preview.src = reader.result;
        preview.style.display = 'block';
    }
    reader.readAsDataURL(event.target.files[0]);
}

// Save Category
function saveCategory() {
    // This will be connected to Django backend
    alert('Category saved successfully! This will be connected to Django backend.');
    bootstrap.Modal.getInstance(document.getElementById('addCategoryModal')).hide();
}

// Edit Category
function editCategory(id) {
    // This will be connected to Django backend
    alert(`Edit category ${id} - Will be connected to Django backend`);
}

// Delete Category
function deleteCategory(id) {
    if(confirm('Are you sure you want to delete this category? All products in this category will be affected.')) {
        // This will be connected to Django backend
        alert(`Delete category ${id} - Will be connected to Django backend`);
    }
}

// Logout
document.querySelector('.logout-btn').addEventListener('click', function() {
    if(confirm('Are you sure you want to logout?')) {
        window.location.href = 'login.html';
    }
});
