// Cart Management
// index.js

document.addEventListener('DOMContentLoaded', () => {
    CartUI.init();
});

        let cart = JSON.parse(localStorage.getItem('cart')) || {};        

        function initSmoothScroll() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');
                    if (href === '#') {
                        e.preventDefault();
                        return;
                    }
                    const target = document.querySelector(href);
                    if (target) {
                        e.preventDefault();
                        const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                        const targetPosition = target.offsetTop - navbarHeight;
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        }

        