// Main JavaScript for Casa D Last Website

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== SMOOTH SCROLLING =====
    initSmoothScroll();
    
    
    
});




// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignore if href is just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                
            }
        });
    });
}


// ===== SHOPPING CART =====


let cart = [];

function addToCart(productId, productName, price) {
    cart.push({
        id: productId,
        name: productName,
        price: price
    });
    
    updateCartBadge();
    showNotification('Product added to cart!');
}

function updateCartBadge() {
    const badge = document.querySelector('.badge-custom');
    if (badge) {
        badge.textContent = cart.length;
    }
}

function showNotification(message) {
    // Create a simple notification
    const notification = document.createElement('div');
    notification.className = 'alert alert-success position-fixed top-0 start-50 translate-middle-x mt-3';
    notification.style.zIndex = '9999';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll('.btn-primary-custom').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h4').textContent;
        const productPrice = productCard.querySelector('.product-price').textContent;
        
        addToCart(Date.now(), productName, productPrice);
    });
});
