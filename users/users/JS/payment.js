// Run after page is ready
document.addEventListener('DOMContentLoaded', () => {
    bindPaymentMethod();
    renderPaymentSummary(0);
});

// Place order (event delegation – keep this)
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.place-order-btn');
    if (!btn) return;

    e.preventDefault();
    placeOrder();
});

function renderPaymentSummary(extraCharge = 0) {
    const checkout = JSON.parse(localStorage.getItem('checkout'));

    if (!checkout) {
        window.location.href = 'checkout.html';
        return;
    }

    const { subtotal, shipping, tax } = checkout;
    const total = subtotal + shipping + tax + extraCharge;

    document.getElementById('payment-item-count').textContent =
        Object.values(CartService.getCart()).length;

    document.getElementById('payment-subtotal').textContent = `₹${subtotal}`;
    document.getElementById('payment-tax').textContent = `₹${tax}`;
    document.getElementById('payment-shipping').textContent =
        shipping === 0 ? 'Free' : `₹${shipping}`;

    document.getElementById('payment-total').textContent = `₹${total}`;
}

function bindPaymentMethod() {
    document.querySelectorAll('.payment-method').forEach(method => {
        method.addEventListener('click', () => {
            document.querySelectorAll('.payment-method')
                .forEach(m => {
                    m.classList.remove('selected');
                    const r = m.querySelector('input[type="radio"]');
                    if (r) r.checked = false;
                });

            method.classList.add('selected');
            const radio = method.querySelector('input[type="radio"]');
            if (radio) radio.checked = true;

            const extra = parseInt(method.dataset.extra, 10) || 0;
            renderPaymentSummary(extra);
        });
    });
}

function getSelectedPayment() {
    const selected = document.querySelector('.payment-method.selected');
    return selected ? selected.dataset.method : null;
}

function placeOrder() {
    const checkout = JSON.parse(localStorage.getItem('checkout'));
    const paymentMethod = getSelectedPayment();

    if (!checkout) {
        window.location.href = 'checkout.html';
        return;
    }

    if (!paymentMethod) {
        alert('Please select a payment method');
        return;
    }

    const cart = CartService.getCart();
    const extra = paymentMethod === 'cod' ? 100 : 0;

    // CREATE ORDER OBJECT (YOU WERE MISSING THIS)
    const order = {
        id: `ORD-${Date.now()}`,
        date: new Date().toLocaleDateString(),
        items: Object.values(cart),
        subtotal: checkout.subtotal,
        shipping: checkout.shipping,
        tax: checkout.tax,
        paymentMethod,
        total: checkout.subtotal + checkout.shipping + checkout.tax + extra,
        status: 'processing'
    };

    // SAVE ORDER HISTORY
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.unshift(order);

    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('lastOrder', JSON.stringify(order));

    console.log('Saving order:', order);

    //CLEAR TEMP STATE
    localStorage.removeItem('cart');
    localStorage.removeItem('checkout');

    window.location.href = 'order_confirmed.html';
}
