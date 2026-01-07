document.addEventListener('DOMContentLoaded', () => {
    const raw = localStorage.getItem('lastOrder');

    if (!raw) {
        console.warn('No order found, redirecting');
        return; // STOP redirect for now
    }

    let order;
    try {
        order = JSON.parse(raw);
    } catch (e) {
        console.error('Invalid order data');
        return;
    }

    //  Validate required fields
    if (!order.items || !order.total) {
        console.error('Incomplete order object', order);
        return;
    }

    renderOrderItems(order.items);
    renderOrderSummary(order);
});


function renderOrderItems(items) {
    const container = document.getElementById('order-items');
    container.innerHTML = '';

    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'order-item';

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
}
function renderOrderSummary(order) {
    document.getElementById('order-subtotal').textContent = `₹${order.subtotal}`;
    document.getElementById('order-shipping').textContent =
        order.shipping === 0 ? 'Free' : `₹${order.shipping}`;
    document.getElementById('order-tax').textContent = `₹${order.tax}`;
    document.getElementById('order-total').textContent = `₹${order.total}`;
}