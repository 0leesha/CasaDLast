function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.querySelector('.avatar-img').src = e.target.result;
            showNotification('Profile picture updated successfully!', 'success');
        };
        reader.readAsDataURL(file);
    }
}

function savePersonalInfo() {
    showNotification('Personal information updated successfully!', 'success');
}

function changePassword() {
    const inputs = document.querySelectorAll('#securityForm input');
    let allFilled = true;
    
    inputs.forEach(input => {
        if (!input.value) {
            allFilled = false;
            input.style.borderColor = '#ef4444';
        } else {
            input.style.borderColor = '#e2e8f0';
        }
    });

    if (allFilled) {
        showNotification('Password changed successfully!', 'success');
        inputs.forEach(input => input.value = '');
    } else {
        showNotification('Please fill in all password fields', 'error');
    }
}

function deactivateAccount() {
    if (confirm('Are you sure you want to deactivate your account? This action cannot be undone.')) {
        if (confirm('This will permanently delete all your data. Are you absolutely sure?')) {
            showNotification('Account deactivation initiated...', 'error');
        }
    }
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    notification.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i> ${message}`;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(style);