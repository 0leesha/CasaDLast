let selectedMediaType = 'image';

// Tab Switching
function openTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-btn');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

// Media Type Selection
function selectMediaType(type) {
    selectedMediaType = type;
    
    const imageOption = document.getElementById('imageOption');
    const videoOption = document.getElementById('videoOption');
    const imageSection = document.getElementById('imageUploadSection');
    const videoSection = document.getElementById('videoUploadSection');
    
    if (type === 'image') {
        imageOption.classList.add('selected');
        videoOption.classList.remove('selected');
        imageSection.style.display = 'block';
        videoSection.style.display = 'none';
    } else {
        videoOption.classList.add('selected');
        imageOption.classList.remove('selected');
        videoSection.style.display = 'block';
        imageSection.style.display = 'none';
    }
}

// Gallery Functions
function openAddGalleryModal() {
    document.getElementById('galleryModalTitle').textContent = 'Add New Gallery Media';
    document.getElementById('galleryModal').classList.add('active');
    selectMediaType('image');
}

function viewGalleryMedia(id, type) {
    const modalContent = document.getElementById('viewMediaContent');
    
    if (type === 'image') {
        modalContent.innerHTML = `
            <img src="https://via.placeholder.com/600x400" alt="Gallery" style="width: 100%; border-radius: 8px; margin-bottom: 20px;">
            <p><strong>Title:</strong> Sample Gallery Image</p>
            <p><strong>Type:</strong> <span class="badge-image" style="padding: 5px 12px; border-radius: 20px;"><i class="fas fa-image"></i> Image</span></p>
            <p><strong>Category:</strong> Living Room</p>
            <p><strong>Date:</strong> 2026-01-02</p>
            <p><strong>Status:</strong> <span class="badge-published">Published</span></p>
            <p><strong>Description:</strong> A beautifully designed modern living room with contemporary furniture and elegant decor.</p>
        `;
    } else {
        modalContent.innerHTML = `
            <video controls style="width: 100%; border-radius: 8px; margin-bottom: 20px;">
                <source src="#" type="video/mp4">
            </video>
            <p><strong>Title:</strong> Sample Gallery Video</p>
            <p><strong>Type:</strong> <span class="badge-video" style="padding: 5px 12px; border-radius: 20px;"><i class="fas fa-video"></i> Video</span></p>
            <p><strong>Category:</strong> Office</p>
            <p><strong>Date:</strong> 2026-01-02</p>
            <p><strong>Status:</strong> <span class="badge-published">Published</span></p>
            <p><strong>Description:</strong> A comprehensive tour of our office furniture collection.</p>
        `;
    }
    
    document.getElementById('viewMediaModal').classList.add('active');
}

function editGalleryMedia(id) {
    document.getElementById('galleryModalTitle').textContent = 'Edit Gallery Media';
    document.getElementById('galleryModal').classList.add('active');
}

function deleteGalleryMedia(id) {
    if (confirm('Are you sure you want to delete this media?')) {
        alert('Media #' + id + ' has been deleted.');
    }
}

function saveGalleryMedia() {
    const title = document.getElementById('galleryTitle').value;
    if (title.trim() === '') {
        alert('Please enter a media title.');
        return;
    }
    alert('Gallery media saved successfully!');
    closeModal('galleryModal');
}

// Blog Functions
function openAddBlogModal() {
    document.getElementById('blogModalTitle').textContent = 'Add New Blog';
    document.getElementById('blogModal').classList.add('active');
}

function viewBlog(id) {
    alert('View blog #' + id);
}

function editBlog(id) {
    document.getElementById('blogModalTitle').textContent = 'Edit Blog';
    document.getElementById('blogModal').classList.add('active');
}

function deleteBlog(id) {
    if (confirm('Are you sure you want to delete this blog?')) {
        alert('Blog #' + id + ' has been deleted.');
    }
}

function saveBlog() {
    const title = document.getElementById('blogTitle').value;
    const content = document.getElementById('blogContent').value;
    if (title.trim() === '' || content.trim() === '') {
        alert('Please enter blog title and content.');
        return;
    }
    alert('Blog saved successfully!');
    closeModal('blogModal');
}

// Modal Functions
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

function previewImage(input, previewId) {
    const preview = document.getElementById(previewId);
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function previewVideo(input, previewId) {
    const preview = document.getElementById(previewId);
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        }
        reader.readAsDataURL(input.files[0]);
    }
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