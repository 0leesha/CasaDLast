const TAX_RATE = 0.18;

document.addEventListener('DOMContentLoaded', () => {
    renderCheckoutSummary();
    bindShippingChange();
});

document.querySelectorAll('.shipping-method').forEach(method => {
    method.addEventListener('click', () => {
        document.querySelectorAll('.shipping-method')
            .forEach(m => m.classList.remove('selected'));

        method.classList.add('selected');
        method.querySelector('input').checked = true;

        updateCheckoutTotals(getSubtotal());
    });
});

function renderCheckoutSummary() {
    const cart = CartService.getCart();
    const container = document.getElementById('checkout-summary-items');
    if (!container) return;

    container.innerHTML = '';
    let subtotal = 0;

    Object.values(cart).forEach(item => {
        subtotal += item.price * item.quantity;

        const div = document.createElement('div');
        div.className = 'summary-item';
        div.innerHTML = `
            <img src="../src/${item.id}.jpg" class="item-image">
            <div class="item-details">
                <div class="item-name">${item.name}</div>
                <div class="item-meta">Quantity: ${item.quantity}</div>
            </div>
            <div class="item-price">₹${item.price * item.quantity}</div>
        `;
        container.appendChild(div);
    });

    updateCheckoutTotals(subtotal);
}

function bindShippingChange() {
    document.querySelectorAll('input[name="shipping"]').forEach(radio => {
        radio.addEventListener('change', () => {
            updateCheckoutTotals(getSubtotal());
        });
    });
}

function getSubtotal() {
    return Object.values(CartService.getCart())
        .reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function updateCheckoutTotals(subtotal) {
    const shipping = getShippingCost();
    const tax = Math.round(subtotal * TAX_RATE); // 18%
    const total = subtotal + shipping + tax;

    document.getElementById('checkout-subtotal').textContent = `₹${subtotal}`;
    document.getElementById('checkout-shipping').textContent =
        shipping === 0 ? 'Free' : `₹${shipping}`;
    document.getElementById('checkout-tax').textContent = `₹${tax}`;
    document.getElementById('checkout-total').textContent = `₹${total}`;

   
    localStorage.setItem(
        'checkout',
        JSON.stringify({ subtotal, shipping, tax, total })
    );
}

function getShippingCost() {
    const selected = document.querySelector('.shipping-method.selected');
    if (!selected) return 0;
    return parseInt(selected.dataset.shipping, 10) || 0;
}
