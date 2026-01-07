// ui/cart.ui.js

const CartUI = (() => {
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className =
            'alert alert-success position-fixed top-0 start-50 translate-middle-x mt-3';
        notification.style.zIndex = '9999';
        notification.textContent = message;

        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 2000);
    }
    function updateBadge() {
        const badge = document.getElementById('cart-badge');
        if (!badge) return;

        const total = CartService.getTotalItems();
        badge.textContent = total;
        badge.style.display = total > 0 ? 'inline-block' : 'none';
    }

    function renderProduct(cartAction) {
        const id = cartAction.dataset.productId;
        const quantity = CartService.getQuantity(id);

        if (quantity > 0) {
            cartAction.innerHTML = `
                <div class="cart-controls">
                    <button class="cart-btn decrease">−</button>
                    <span class="cart-quantity">${quantity}</span>
                    <button class="cart-btn increase">+</button>
                </div>
            `;

            cartAction.querySelector('.increase').onclick = () =>
                CartService.increase(id);

            cartAction.querySelector('.decrease').onclick = () =>
                CartService.decrease(id);

        } else {
            cartAction.innerHTML = `
                <button class="btn btn-sm btn-primary-custom add-to-cart-btn">
                    Add to Cart
                </button>
            `;

            cartAction.querySelector('.add-to-cart-btn').onclick = () => {
                CartService.add({
                    id,
                    name: cartAction.dataset.productName,
                    price: parseFloat(cartAction.dataset.productPrice)
                });
            };
        }
    }

    function renderAll() {
        document.querySelectorAll('.cart-action')
            .forEach(renderProduct);
    }

    return {
        init() {
            renderAll();
            updateBadge();

            document.addEventListener('cart:updated', (e) => {
                renderAll();
                updateBadge();
                if (e.detail?.action === 'add') {
                    showNotification('Added to cart!');
                }
            });
        }
    };
})();
