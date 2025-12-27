// Main JavaScript for Casa D Last Website

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== SMOOTH SCROLLING =====
    initSmoothScroll();
    
    // ===== NAVBAR SCROLL EFFECT =====
    initNavbarScroll();
    
    // ===== ACTIVE NAV LINK =====
    initActiveNavLink();
    
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
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    if (typeof bootstrap !== 'undefined') {
                        const collapse = bootstrap.Collapse.getInstance(navbarCollapse);
                        if (collapse) collapse.hide();
                    }
                }
            }
        });
    });
}

// ===== NAVBAR BACKGROUND ON SCROLL =====
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 248, 240, 1)';
            navbar.style.boxShadow = '0 4px 20px rgba(139, 115, 85, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 248, 240, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// ===== ACTIVE NAV LINK ON SCROLL =====
function initActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===== SHOPPING CART (Optional - Add if needed) =====
// Uncomment and customize if you want cart functionality


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
