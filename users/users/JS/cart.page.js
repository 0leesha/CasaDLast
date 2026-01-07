document.addEventListener('DOMContentLoaded', () => {
    renderCartPage();
});

function renderCartPage() {
    const cart = CartService.getCart();
    const container = document.getElementById('cart-items');
    const countEl = document.getElementById('cart-count');

    if (!container) return;

    container.innerHTML = '';

    const items = Object.entries(cart);

    countEl.textContent = items.length;

    if (items.length === 0) {
        container.innerHTML = `<p>Your cart is empty.</p>`;
        return;
    }

    let subtotal = 0;

    items.forEach(([id, item]) => {
        subtotal += item.price * item.quantity;

        const div = document.createElement('div');
        div.className = 'cart-item';

        div.innerHTML = `
            <img src="../src/${id}.jpg" class="item-image" />
            <div class="item-details">
                <div class="item-name">${item.name}</div>
                <div class="item-stock">✓ In Stock</div>

                <div class="item-actions mt-3">
                    <div class="quantity-control">
                        <button class="quantity-btn decrease">-</button>
                        <input class="quantity-input" value="${item.quantity}" readonly>
                        <button class="quantity-btn increase">+</button>
                    </div>
                    <a href="#" class="item-remove">
                        <i class="bi bi-trash"></i> Remove
                    </a>
                </div>
            </div>
            <div class="item-price-section">
                <div class="item-price">₹${item.price * item.quantity}</div>
            </div>
        `;

        div.querySelector('.increase').onclick = () => {
            CartService.increase(id);
            renderCartPage();
        };

        div.querySelector('.decrease').onclick = () => {
            CartService.decrease(id);
            renderCartPage();
        };

        div.querySelector('.item-remove').onclick = (e) => {
            e.preventDefault();
            CartService.decrease(id);
            while (CartService.getQuantity(id) > 0) {
                CartService.decrease(id);
            }
            renderCartPage();
        };

        container.appendChild(div);
    });

    updateSummary(subtotal);
}

function updateSummary(subtotal) {
    document.querySelector('.summary-row .amount').textContent = `₹${subtotal}`;
    document.querySelector('.summary-row.total .amount').textContent = `₹${subtotal}`;
}
